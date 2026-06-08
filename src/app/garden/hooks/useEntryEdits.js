import { useState, useCallback } from "react";
import { updateGardenDatabase } from "@/app/api/db/getDatabase";

export function useEntryEdits({ setEntries, locations, invalidate }) {
    //
    // editingId: which entry is currently in edit mode (null = none)
    const [editingId, setEditingId] = useState(null);
    // dirtyRows keyed by entry id; holds the in-progress draft
    const [dirtyRows, setDirtyRows] = useState({});
    const [savingId, setSavingId] = useState(null);

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
            invalidate()

            cancelEdit(entry.id);
        }
        catch (err) { window.alert(`Save failed: ${err.message || err}`); }
        finally { setSavingId(null); }
    }, [dirtyRows, locations, cancelEdit, invalidate, setEntries]);

    return {
        editingId, dirtyRows, savingId,
        startEdit, cancelEdit, updateDraft, saveEdit,
    };
}