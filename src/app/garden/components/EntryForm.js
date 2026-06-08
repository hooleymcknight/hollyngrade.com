import { useState, useMemo } from "react";
import { parseEntryDate, todayIso } from "../helpers/gardenHelpers";

/**
 * setting this as a function rather than an object so that the date 
 * definitely gets generated when we need it, and not just when 
 * the object is declared.
 * @returns Object
 */
const generateEmptyEntry = () => {
    // entry_date, location_id, entry, plant_ids
    return {
        entry_date: todayIso(),
        location_id: 5, // 5 = backyard. This is a reasonable default value.
        entry: '', // empty string for now.
        plant_ids: [], // array of numbers, which are the plant ids
        photos: [], // array of { url } objects
    }
}

export default function EntryForm({
    initialEntry, // null or object for creating or editing, respectively
    locations, // [{ id, name }]
    allPlants, // [ { id, name, nickname, family_id, family_name, color_token, family_sort_order }]
    onSave, // formData parameter
    onCancel,
    isSaving, // boolean. disables/enables save button
}) {
    const [draft, setDraft] = useState(() => initialEntry ?? generateEmptyEntry());

    const togglePlant = (plantId) => {
        setDraft(prev => ({
            ...prev,
            plant_ids: prev.plant_ids.includes(plantId)
                ? prev.plant_ids.filter(id => id !== plantId)
                : [...prev.plant_ids, plantId]
        }));
    };

    const selectedSet = useMemo(
        () => new Set(draft.plant_ids),
        [draft.plant_ids]
    );

    const plantsByFamily = useMemo(() => {
        const map = new Map(); // family_name -> { sort_order, plants: [] }
        for (const p of allPlants) {
            if (!map.has(p.family_name)) {
                map.set(p.family_name, { sort_order: p.family_sort_order, plants: [] });
            }
            map.get(p.family_name).plants.push(p);
        }
        return Array.from(map.entries())
            .map(([name, { sort_order, plants }]) => ({ name, sort_order, plants }))
            .sort((a, b) => a.sort_order - b.sort_order);
    }, [allPlants]);

    const handleFilesSelected = async (event) => {
        const files = Array.from(event.target.files);
        if (files.length === 0) return;
        
        for (const file of files) {
            const formData = new FormData();
            formData.append("file", file);
            
            try {
                const response = await fetch("/api/garden/upload-photo", {
                    method: "POST",
                    body: formData,
                });
                const result = await response.json();
                
                if (!response.ok) {
                    window.alert(`Upload failed for ${file.name}: ${result.error}`);
                    continue;
                }
                
                setDraft(prev => ({
                    ...prev,
                    photos: [...prev.photos, { url: result.url }],
                }));
            } catch (err) {
                window.alert(`Upload error for ${file.name}: ${err.message}`);
            }
        }
    };

    return(
        <>
            <div className="add-modal flex flex-col p-6 pt-0 gap-4">
                <h3 className="text-center mt-0 mb-2 text-xl">Add Entry</h3>
                <input type="date" className="bg-neutral-100 border border-neutral-300 px-2 py-1 rounded"
                    value={draft.entry_date}
                    onChange={(e) => { setDraft({ ...draft, entry_date: e.target.value }) }}
                />
                <select value={draft.location_id}
                    onChange={(e) => { setDraft({ ...draft, location_id: Number(e.target.value) }) }}
                    className="bg-neutral-100 border border-neutral-300 px-2 py-1 rounded"
                >
                    {locations.map(x =>
                        <option key={x.id} value={x.id}>
                            {x.name}
                        </option>
                    )}
                </select>
                <textarea
                    className="bg-neutral-100 border border-neutral-300 px-2 py-1 rounded"
                    value={draft.entry}
                    onChange={(e) => { setDraft({ ...draft, entry: e.target.value }) }}
                />

                <fieldset>
                    {plantsByFamily.map(family => (
                        <div key={family.name}>
                            <legend>{family.name}</legend>
                            <div>
                                {family.plants.map(plant => {
                                    const selected = selectedSet.has(plant.id);
                                    return (
                                        <button
                                            type="button"
                                            key={plant.id}
                                            onClick={() => togglePlant(plant.id)}
                                        >
                                            {plant.nickname ? `${plant.nickname} (${plant.name})` : plant.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </fieldset>

                <div>
                    <label className="block text-sm mb-1">Photos</label>
                    <input
                        type="file"
                        multiple
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleFilesSelected}
                    />
                    {draft.photos.length > 0 && (
                        <p className="text-sm text-neutral-600 mt-1">
                            {draft.photos.length} {draft.photos.length === 1 ? "photo" : "photos"} uploaded
                        </p>
                    )}
                </div>

                <div className="modal-btn-group flex flex-row justify-between">
                    <button type="button" onClick={onCancel}
                        className="bg-[#a20000] hover:opacity-[0.8] text-white rounded-full px-4 py-1"
                    >
                        Cancel
                    </button>
                    <button type="button" disabled={isSaving}
                        onClick={() => onSave(draft)}
                        className="bg-[#5a8f47] hover:opacity-[0.8] text-white rounded-full px-4 py-1"
                    >
                        { isSaving ? 'Saving...' : 'Save'}
                    </button>
                </div>

            </div>
        </>
    );
}