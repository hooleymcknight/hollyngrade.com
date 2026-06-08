import { formatHeadline } from "../helpers/gardenHelpers";
import { MapPinIcon, CameraIcon, PencilIcon, PlantChip } from "../helpers/gardenIconsChips";

/**
 * EntryCard
 * ----------------------------------------------------------------
 * Single journal entry. Presentational — all state lives in the
 * parent (GardenJournalFeed). Edit mode swaps the headline, body,
 * and footer into editable controls.
 *
 * Editable fields in this pass: entry text, entry_date, location.
 * Plant editing belongs to the new-entry form's combobox picker.
 */
export default function EntryCard({
    entry,
    locations,
    isEditing,
    draft,
    onStartEdit,
    onCancelEdit,
    onSaveEdit,
    onDraftChange,
    isSaving,
}) {
    const { primary, secondary } = formatHeadline(entry.entry_date);
    const hasPhotos = entry.photos && entry.photos.length > 0;
    const heroPhoto = hasPhotos ? entry.photos[0] : null;
    const extraCount = hasPhotos ? entry.photos.length - 1 : 0;

    return (
        <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
            {/* Hero photo (top half) ------------------------------------- */}
            {hasPhotos ? (
                <div className="relative w-full aspect-[4/3] bg-neutral-100 max-h-400px">
                    <img
                        src={heroPhoto.url}
                        alt={heroPhoto.caption || ""}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Location chip top-right */}
                    <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur text-white text-xs">
                            <MapPinIcon />
                            {entry.location_name}
                        </span>
                    </div>
                    {extraCount > 0 && (
                        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur text-white text-xs tabular-nums">
                            +{extraCount}
                        </div>
                    )}
                </div>
            ) : (
                <div className="px-6 pt-5 flex justify-end">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs">
                        <MapPinIcon />
                        {entry.location_name}
                    </span>
                </div>
            )}

            {/* Body ------------------------------------------------------ */}
            <div className="px-6 pt-5 pb-4">
                {/* Date headline */}
                {!isEditing ? (
                    <header className="mb-3">
                        <h2 className="text-2xl font-semibold tracking-tight leading-none">
                            {primary}
                        </h2>
                        <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                            {secondary}
                        </p>
                    </header>
                ) : (
                    <header className="mb-3">
                        <input
                            type="date"
                            value={draft.entry_date}
                            onChange={(e) => onDraftChange("entry_date", e.target.value)}
                            className="text-lg font-semibold border-b border-neutral-300 focus:border-black outline-none px-1 py-0.5"
                        />
                    </header>
                )}

                {/* Plant chips */}
                {entry.plants && entry.plants.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {entry.plants.map((p) => <PlantChip key={p.id} plant={p} />)}
                    </div>
                )}

                {/* Entry prose / textarea */}
                {!isEditing ? (
                    <p
                        className="text-[15px] leading-relaxed text-neutral-800 whitespace-pre-wrap"
                        style={{ fontFamily: "var(--font-serif), Georgia, 'Times New Roman', serif" }}
                    >
                        {entry.entry}
                    </p>
                ) : (
                    <>
                        <textarea
                            value={draft.entry}
                            onChange={(e) => onDraftChange("entry", e.target.value)}
                            rows={Math.max(4, Math.ceil((draft.entry?.length || 0) / 60))}
                            className="w-full text-[15px] leading-relaxed text-neutral-800 border border-neutral-300 rounded-md p-3 outline-none focus:border-black resize-y"
                            style={{ fontFamily: "var(--font-serif), Georgia, 'Times New Roman', serif" }}
                        />
                        <div className="mt-3">
                            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">
                                Location
                            </label>
                            <select
                                value={draft.location_id}
                                onChange={(e) => onDraftChange("location_id", Number(e.target.value))}
                                className="px-2.5 py-1.5 border border-neutral-300 rounded-md text-sm outline-none focus:border-black"
                            >
                                {locations.map((loc) => (
                                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                                ))}
                            </select>
                        </div>
                    </>
                )}
            </div>

            {/* Footer band ----------------------------------------------- */}
            <footer className="px-6 py-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                    {hasPhotos ? (
                        <>
                            <CameraIcon />
                            <span className="tabular-nums">
                                {entry.photos.length} {entry.photos.length === 1 ? "photo" : "photos"}
                            </span>
                        </>
                    ) : (
                        <span className="text-neutral-500 italic">Note only</span>
                    )}
                </div>
                {!isEditing ? (
                    <button
                        type="button"
                        onClick={onStartEdit}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-sm text-neutral-700 hover:bg-neutral-200 transition-colors"
                    >
                        <PencilIcon />
                        Edit
                    </button>
                ) : (
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onCancelEdit}
                            disabled={isSaving}
                            className="px-3 py-1 rounded-md text-sm text-neutral-600 hover:bg-neutral-200 disabled:opacity-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={onSaveEdit}
                            disabled={isSaving}
                            className="px-3 py-1 rounded-md text-sm font-medium bg-black text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors"
                        >
                            {isSaving ? "Saving…" : "Save"}
                        </button>
                    </div>
                )}
            </footer>
        </article>
    );
}
