import { useEffect, useMemo, useState, useCallback } from "react";
import { useSession } from "@/app/SessionProvider";
import { getEntriesFull, updateGardenDatabase } from "@/app/api/db/getDatabase"
import { FilterChip, MapPinIcon } from "../helpers/gardenHelpers";
import EntryCard from "./EntryCard";

/**
 * GardenJournalFeed
 * ----------------------------------------------------------------
 * Card feed replacing the old dbDisplay.js table view. State lives
 * in React; filtering happens via useMemo derivations; submit
 * updates state in place (no reload).
 *
 * EXPECTED FETCH SHAPE — getDatabase("entries_full") returns:
 *   {
 *     entries: [{
 *       id, entry_date, entry, location_id, location_name, created_at,
 *       plants: [{ id, name, nickname, family_id, family_name, color_token }],
 *       photos: [{ id, url, caption, sort_order }]
 *     }],
 *     locations: [{ id, name }]
 *   }
 *
 * Server-side join sketch lives in a comment at the bottom of this file.
 */
export default function GardenJournalFeed() {
    const { session, updateSession } = useSession();
    const isAdmin = !!session?.user?.admin;

    const [entries, setEntries] = useState([]);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // editingId: which entry is currently in edit mode (null = none)
    const [editingId, setEditingId] = useState(null);
    // dirtyRows keyed by entry id; holds the in-progress draft
    const [dirtyRows, setDirtyRows] = useState({});
    const [savingId, setSavingId] = useState(null);

    // Filter state — arrays of selected ids
    const [selectedFamilyIds, setSelectedFamilyIds] = useState([]);
    const [selectedLocationIds, setSelectedLocationIds] = useState([]);

    // ---- Data fetch -------------------------------------------------------
    useEffect(() => {
        let cancelled = false;

        const cached = session?.entries_full;
        if (cached?.entries && cached?.locations) {
            setEntries(cached.entries);
            setLocations(cached.locations);
            setLoading(false);
            return () => { cancelled = true; };
        }

        (async () => {
            try {
                const response = await getEntriesFull();
                if (cancelled) return;
                if (!response || typeof response === "string") {
                    setError(response || "Failed to load entries");
                    setLoading(false);
                    return;
                }
                setEntries(response.entries || []);
                setLocations(response.locations || []);
                updateSession({ entries_full: response });
                setLoading(false);
            } catch (err) {
                if (!cancelled) {
                    setError(err.message || "Failed to load entries");
                    setLoading(false);
                }
            }
        })();

        return () => { cancelled = true; };
    }, [session, updateSession]);

    // ---- Derived: family list with counts ---------------------------------
    const familyChips = useMemo(() => {
        const map = new Map(); // family_id -> { id, name, color_token, sort_order, count }
        for (const entry of entries) {
            const seen = new Set();
            for (const p of entry.plants || []) {
                if (seen.has(p.family_id)) continue;
                seen.add(p.family_id);
                const existing = map.get(p.family_id);
                if (existing) {
                    existing.count += 1;
                } else {
                    map.set(p.family_id, {
                        id: p.family_id,
                        name: p.family_name,
                        color_token: p.color_token,
                        sort_order: p.family_sort_order,
                        count: 1,
                    });
                }
            }
        }
        return Array.from(map.values()).sort((a, b) => a.sort_order - b.sort_order);
    }, [entries]);

    // ---- Derived: location chips with counts ------------------------------
    const locationChips = useMemo(() => {
        const counts = new Map();
        for (const entry of entries) {
            counts.set(entry.location_id, (counts.get(entry.location_id) || 0) + 1);
        }
        return locations
            .map((loc) => ({ ...loc, count: counts.get(loc.id) || 0 }))
            .filter((loc) => loc.count > 0);
    }, [entries, locations]);

    // ---- Derived: filtered entries ----------------------------------------
    const filteredEntries = useMemo(() => {
        const familySet = new Set(selectedFamilyIds);
        const locationSet = new Set(selectedLocationIds);
        return entries
            .filter((entry) => {
                if (locationSet.size > 0 && !locationSet.has(entry.location_id)) return false;
                if (familySet.size > 0) {
                    const matchesAny = (entry.plants || []).some((p) => familySet.has(p.family_id));
                    if (!matchesAny) return false;
                }
                return true;
            })
            .sort((a, b) => (a.entry_date < b.entry_date ? 1 : a.entry_date > b.entry_date ? -1 : 0));
    }, [entries, selectedFamilyIds, selectedLocationIds]);

    // ---- Toggle helpers ---------------------------------------------------
    const toggleFamily = useCallback((id) => {
        setSelectedFamilyIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    }, []);
    const toggleLocation = useCallback((id) => {
        setSelectedLocationIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    }, []);

    // ---- Editing handlers -------------------------------------------------
    const startEdit = useCallback((entry) => {
        setEditingId(entry.id);
        setDirtyRows((prev) => ({
            ...prev,
            [entry.id]: {
                entry: entry.entry || "",
                entry_date: entry.entry_date,
                location_id: entry.location_id,
            },
        }));
    }, []);

    const cancelEdit = useCallback((entryId) => {
        setEditingId(null);
        setDirtyRows((prev) => {
            const next = { ...prev };
            delete next[entryId];
            return next;
        });
    }, []);

    const updateDraft = useCallback((entryId, field, value) => {
        setDirtyRows((prev) => ({
            ...prev,
            [entryId]: { ...prev[entryId], [field]: value },
        }));
    }, []);

    const saveEdit = useCallback(async (entry) => {
        const draft = dirtyRows[entry.id];
        if (!draft) return;

        // Match existing updateDatabase contract: { table, updates: [{ field, value, id }] }
        const updates = [];
        if (draft.entry !== entry.entry) {
            updates.push({ field: "entry", value: draft.entry, id: entry.id });
        }
        if (draft.entry_date !== entry.entry_date) {
            updates.push({ field: "entry_date", value: draft.entry_date, id: entry.id });
        }
        if (draft.location_id !== entry.location_id) {
            updates.push({ field: "location_id", value: draft.location_id, id: entry.id });
        }

        if (updates.length === 0) {
            cancelEdit(entry.id);
            return;
        }

        setSavingId(entry.id);
        try {
            const result = await updateGardenDatabase({ table: "entries", updates });
            if (!result) throw new Error("Update failed");

            // Patch entries in place — no reload.
            setEntries((prev) =>
                prev.map((e) => {
                    if (e.id !== entry.id) return e;
                    const updated = { ...e, ...draft };
                    if (draft.location_id !== entry.location_id) {
                        const loc = locations.find((l) => l.id === draft.location_id);
                        if (loc) updated.location_name = loc.name;
                    }
                    return updated;
                })
            );
            // Invalidate the session cache so the next mount refetches.
            updateSession({ entries_full: null });

            cancelEdit(entry.id);
        } catch (err) {
            window.alert(`Save failed: ${err.message || err}`);
        } finally {
            setSavingId(null);
        }
    }, [dirtyRows, locations, updateSession, cancelEdit]);

    // ---- Render -----------------------------------------------------------
    if (loading) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-12 text-neutral-500">
                Loading garden journal…
            </div>
        );
    }
    if (error) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-12 text-[#a20000] font-bold">
                {error}
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-0 sm:px-4 py-8">
            {/* Header */}
            <header className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">Garden journal</h1>
                    <p className="text-sm text-neutral-800 mt-1 tabular-nums">
                        {entries.length} {entries.length === 1 ? "entry" : "entries"}
                        {filteredEntries.length !== entries.length &&
                            ` · ${filteredEntries.length} shown`}
                    </p>
                </div>
                {isAdmin && (
                    <button
                        type="button"
                        onClick={() => {/* hook up to new-entry route next */}}
                        className="px-3.5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                    >
                        + New entry
                    </button>
                )}
            </header>

            {/* Filters */}
            <div className="mb-6 space-y-2">
                <div className="flex flex-wrap gap-2">
                    {familyChips.map((f) => (
                        <FilterChip
                            key={f.id}
                            label={f.name}
                            count={f.count}
                            active={selectedFamilyIds.includes(f.id)}
                            onClick={() => toggleFamily(f.id)}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {locationChips.map((loc) => (
                        <FilterChip
                            key={loc.id}
                            label={loc.name}
                            count={loc.count}
                            active={selectedLocationIds.includes(loc.id)}
                            onClick={() => toggleLocation(loc.id)}
                            icon={<MapPinIcon className="w-3 h-3" />}
                            size="sm"
                        />
                    ))}
                </div>
            </div>

            {/* Feed */}
            <div className="flex flex-col gap-5">
                {filteredEntries.length === 0 ? (
                    <div className="py-12 text-center text-neutral-500">
                        No entries match the current filters.
                    </div>
                ) : (
                    filteredEntries.map((entry) => (
                        <EntryCard
                            key={entry.id}
                            entry={entry}
                            locations={locations}
                            canEdit={isAdmin}
                            isEditing={editingId === entry.id}
                            draft={dirtyRows[entry.id]}
                            isSaving={savingId === entry.id}
                            onStartEdit={() => startEdit(entry)}
                            onCancelEdit={() => cancelEdit(entry.id)}
                            onSaveEdit={() => saveEdit(entry)}
                            onDraftChange={(field, value) => updateDraft(entry.id, field, value)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

/* --- Server-side query sketch ------------------------------------------------

If you need to build the joined endpoint, something like:

    SELECT
        e.id, e.entry_date, e.entry, e.location_id, e.created_at,
        l.name AS location_name
    FROM entries e
    JOIN locations l ON l.id = e.location_id
    ORDER BY e.entry_date DESC;

    SELECT ep.entry_id, p.id, p.name, p.nickname,
           p.family_id, pf.name AS family_name, pf.color_token
    FROM entry_plants ep
    JOIN plants p ON p.id = ep.plant_id
    JOIN plant_families pf ON pf.id = p.family_id
    WHERE ep.entry_id IN (?);

    SELECT id, entry_id, url, caption, sort_order
    FROM photos
    WHERE entry_id IN (?)
    ORDER BY entry_id, sort_order;

Then group plants/photos by entry_id in JS before returning.

----------------------------------------------------------------------------- */
