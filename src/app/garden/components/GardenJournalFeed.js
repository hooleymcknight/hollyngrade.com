import { useMemo, useState, useCallback } from "react";
import { useGardenData } from '@/app/garden/hooks/useGardenData';
import { useEntryEdits } from '@/app/garden/hooks/useEntryEdits';
import { createGardenEntry } from "@/app/api/db/gardenQueries";
import { FilterChip, MapPinIcon } from "../helpers/gardenIconsChips";
import EntryCard from "./EntryCard";
import EntryForm from "./EntryForm";
import FeedHeader from './FeedHeader';
import { buildFamilyChips, buildLocationChips, filterEntries } from "../helpers/gardenMemos";
import Modal from '@/app/components/Modal';

/**
 *
 * getDatabase("entries_full") returns:
 *   {
 *     entries: [{
 *       id, entry_date, entry, location_id, location_name, created_at,
 *       plants: [{ id, name, nickname, family_id, family_name, color_token }],
 *       photos: [{ id, url, caption, sort_order }]
 *     }],
 *     locations: [{ id, name }]
 *   }
 *
 */
export default function GardenJournalFeed() {
    // const isAdmin = !!session?.user?.admin;
    const isAdmin = true;

    const { entries, setEntries, locations, allPlants, loading, error, invalidate } = useGardenData();
    const {
        editingId, dirtyRows, savingId,
        startEdit, cancelEdit, updateDraft, saveEdit,
    } = useEntryEdits({ setEntries, locations, invalidate });

    const [newEntryOpen, setNewEntryOpen] = useState(false);
    const [creatingEntry, setCreatingEntry] = useState(false);

    // Filter state — arrays of selected ids
    const [selectedFamilyIds, setSelectedFamilyIds] = useState([]);
    const [selectedLocationIds, setSelectedLocationIds] = useState([]);

    // create garden entryyyyyyy
    const handleCreateEntry = useCallback(async (formData) => {
        // data: entry_date, location_id, entry, plant_ids
        setCreatingEntry(true);
        try {
            const result = await createGardenEntry(formData);
            if (typeof result === 'string') throw new Error(result);
            invalidate();
            // The effect re-fires because session changed; fresh data lands shortly.
            setNewEntryOpen(false);
        } catch (err) {
            window.alert(`Create failed: ${err.message || err}`);
        } finally {
            setCreatingEntry(false);
        }
    }, [invalidate]);

    // memo hooks
    const familyChips = useMemo(() => buildFamilyChips(entries), [entries]);
    const locationChips = useMemo(() => buildLocationChips(entries, locations), [entries, locations]);
    const filteredEntries = useMemo(() => filterEntries(entries, selectedFamilyIds, selectedLocationIds), [entries, selectedFamilyIds, selectedLocationIds]);

    // Toggle helpers
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

    // handle modal close
    const handleClose = useCallback(() => setNewEntryOpen(false), [])

    // render time:

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
            <FeedHeader 
                entries={entries}
                filteredEntries={filteredEntries}
                isAdmin={isAdmin} 
                onNewEntry={() => setNewEntryOpen(true)}
            />

            {/* // onsave data: entry_date, location_id, entry, plant_ids */}
            <Modal open={newEntryOpen} onClose={handleClose}>
                <EntryForm
                    initialEntry={null}
                    locations={locations}
                    allPlants={allPlants}
                    onSave={handleCreateEntry}
                    onCancel={handleClose}
                    isSaving={creatingEntry}
                />
            </Modal>

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
