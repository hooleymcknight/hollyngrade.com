'use server'
import { parseEntryDate } from "@/app/garden/helpers/gardenHelpers";
import { PrismaClient as PrismaClientGL } from "@/../prisma-gl/gl-client/client"

const garden_db = new PrismaClientGL();


// ---------------------------------------------------------------------------
// Garden journal feed reader. Returns entries with plants and photos nested,
// plus the list of locations for filter chips.
//
// Uses $queryRaw against garden_db — the SQL is the same JOIN already
// validated by hand, easier to debug than a Prisma `include` tree.
//
// Four parallel queries (entries+locations, plants, photos, locations list),
// grouped in JS. Cheaper than one big JOIN that fans out on photos.
// ---------------------------------------------------------------------------

// MySQL DATE columns come back from $queryRaw as JS Date objects. Convert
// to "YYYY-MM-DD" using local components so we don't accidentally shift the
// date by a timezone offset.
const toIsoDate = (val) => {
    if (!val) return null;
    if (typeof val === 'string') return val.slice(0, 10);
    if (val instanceof Date) {
        const y = val.getUTCFullYear();
        const m = String(val.getUTCMonth() + 1).padStart(2, '0');
        const d = String(val.getUTCDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
    return String(val);
};

export const getEntriesFull = async () => {
    try {
        const [entryRows, plantRows, photoRows, locationRows] = await Promise.all([
            garden_db.$queryRaw`
                SELECT
                    e.id          AS entry_id,
                    e.entry_date,
                    e.entry,
                    e.location_id,
                    l.name        AS location_name,
                    e.created_at
                FROM entries e
                LEFT JOIN locations l ON e.location_id = l.id
                ORDER BY e.entry_date DESC, e.id DESC
            `,
            garden_db.$queryRaw`
                SELECT
                    ep.entry_id,
                    p.id          AS plant_id,
                    p.name        AS plant_name,
                    p.nickname,
                    pf.id         AS family_id,
                    pf.name       AS family_name,
                    pf.color_token,
                    pf.sort_order AS family_sort_order
                FROM entry_plants ep
                JOIN plants p           ON ep.plant_id = p.id
                JOIN plant_families pf  ON p.family_id = pf.id
                ORDER BY pf.sort_order, p.name
            `,
            garden_db.$queryRaw`
                SELECT id, entry_id, url, caption, sort_order
                FROM photos
                ORDER BY entry_id, sort_order, id
            `,
            garden_db.$queryRaw`
                SELECT id, name FROM locations ORDER BY id
            `,
        ]);

        // Group plants by entry_id
        const plantsByEntry = new Map();
        for (const r of plantRows) {
            const eid = Number(r.entry_id);
            if (!plantsByEntry.has(eid)) plantsByEntry.set(eid, []);
            plantsByEntry.get(eid).push({
                id: Number(r.plant_id),
                name: r.plant_name,
                nickname: r.nickname,
                family_id: Number(r.family_id),
                family_name: r.family_name,
                color_token: r.color_token,
                family_sort_order: Number(r.family_sort_order),
            });
        }

        // Group photos by entry_id
        const photosByEntry = new Map();
        for (const r of photoRows) {
            const eid = Number(r.entry_id);
            if (!photosByEntry.has(eid)) photosByEntry.set(eid, []);
            photosByEntry.get(eid).push({
                id: Number(r.id),
                url: r.url,
                caption: r.caption,
                sort_order: Number(r.sort_order),
            });
        }

        // Assemble the nested shape the feed expects
        const entries = entryRows.map((e) => {
            const eid = Number(e.entry_id);
            return {
                id: eid,
                entry_date: toIsoDate(e.entry_date),
                // entry_date: e.entry_date,
                entry: e.entry,
                location_id: e.location_id == null ? null : Number(e.location_id),
                location_name: e.location_name,
                created_at: e.created_at,
                plants: plantsByEntry.get(eid) || [],
                photos: photosByEntry.get(eid) || [],
            };
        });

        const locations = locationRows.map((l) => ({
            id: Number(l.id),
            name: l.name,
        }));

        return { entries, locations };
    } catch (err) {
        return `Error retrieving entries: ${err}`;
    }
};

export const createGardenEntry = async (newEntryData) => {
    try {
        const result = await garden_db.$transaction(async (tx) => {
            const newEntry = await tx.entries.create({
                data: {
                    entry_date: new Date(`${newEntryData.entry_date}T12:00:00`),
                    location_id: newEntryData.location_id,
                    entry: newEntryData.entry,
                }
            });
            
            if (newEntryData.plant_ids.length > 0) {
                await tx.entry_plants.createMany({
                    data: newEntryData.plant_ids.map((pid) => ({
                        entry_id: newEntry.id,
                        plant_id: Number(pid),
                    })),
                });
            }

            if (newEntryData.photos?.length > 0) {
                await tx.photos.createMany({
                    data: newEntryData.photos.map((photo, idx) => ({
                        entry_id: newEntry.id,
                        url: photo.url,
                        caption: null,
                        sort_order: idx,
                    })),
                });
            }
            
            return newEntry;
        });
        return { success: true, entry_id: Number(result.id) };
    }
    catch (err) {
        return `Error creating entry: ${err}`;
    }
};