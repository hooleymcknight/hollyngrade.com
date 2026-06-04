'use server'
// ---------------------------------------------------------------------------
// SECURITY: admin gating is currently UI-only.
// ---------------------------------------------------------------------------
// GardenJournalFeed hides edit and new-entry affordances when
// session.user.admin is falsy, but the Server Actions in this file
// (updateDatabase, updateGardenDatabase) do NOT verify admin status
// server-side. A motivated visitor could invoke either action directly.
//
// If this site is ever shared beyond personal use, add an admin check at
// the top of updateDatabase before the $transaction call — probably by
// reading the session on the server side via the same auth layer that
// populates session.user.
// ---------------------------------------------------------------------------

// import { PrismaClient } from "@prisma/client"; //  .\node_modules\@prisma\client
import { PrismaClient as PrismaClientHG } from "@/../prisma-hg/hg-client/client"
import { PrismaClient as PrismaClientGL } from "@/../prisma-gl/gl-client/client"

const db = new PrismaClientHG();
const garden_db = new PrismaClientGL();

// ---------------------------------------------------------------------------
// Generic table reader (default HG schema).
// ---------------------------------------------------------------------------
export const getDatabase = async (dbName, selects, whereNulls) => {
    let query = {};

    if (selects?.length) {
        const selectObject = { id: true };
        selects.map(s => { selectObject[`${s}`] = true });
        query.select = selectObject;
    }

    if (whereNulls?.length) {
        const whereObject = { OR: [] };
        for (const w of whereNulls) {
            let nullObj = {};
            nullObj[`${w}`] = null;
            let emptyObj = {};
            emptyObj[`${w}`] = '';
            whereObject['OR'].push(nullObj, emptyObj);
        }
        query.where = whereObject;
    }

    if (!Object.keys(query).length) return `Incomplete query.`;

    try {
        const data = await db[`${dbName}`].findMany(query);
        return Array.isArray(data) ? data : [data];
    }
    catch (err) {
        return `Error retrieving database: ${err}`;
    }
}

// ---------------------------------------------------------------------------
// Generic update. Pass `gl = true` to target the garden_log schema instead of
// the default HG schema. Most callers should use the named wrappers below.
// ---------------------------------------------------------------------------
export const updateDatabase = async (pushData, gl) => {
    const schema = gl ? garden_db : db;
    const transaction = await schema.$transaction(
        pushData.updates.map((data) =>
            schema[`${pushData.table}`].update({
                where: { id: Number(data.id) },
                data: { [`${data.field}`]: data.value },
            })
        )
    );

    return transaction;
}

// Thin wrapper so the call site reads as what it is.
export const updateGardenDatabase = async (pushData) => updateDatabase(pushData, true);

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
        const y = val.getFullYear();
        const m = String(val.getMonth() + 1).padStart(2, '0');
        const d = String(val.getDate()).padStart(2, '0');
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
