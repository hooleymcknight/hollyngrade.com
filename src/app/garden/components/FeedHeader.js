export default function FeedHeader ({ entries, filteredEntries, isAdmin, onNewEntry }) {

    return (
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
                    onClick={onNewEntry}
                    className="px-3.5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                    + New entry
                </button>
            )}
        </header>
    );
}