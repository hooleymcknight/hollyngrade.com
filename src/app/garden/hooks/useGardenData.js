import { useState, useEffect, useCallback } from "react";
import { useSession } from "@/app/SessionProvider";
import { getEntriesFull } from "@/app/api/db/gardenQueries";

export function useGardenData() {
    const { session, updateSession } = useSession();
    
    const [entries, setEntries] = useState(() => session?.entries_full?.entries ?? []);
    const [locations, setLocations] = useState(() => session?.entries_full?.locations ?? []);
    const [allPlants, setAllPlants] = useState(() => session?.entries_full?.all_plants ?? []);
    const [loading, setLoading] = useState(() => !session?.entries_full);
    const [error, setError] = useState(null);
    
    // get some data
    useEffect(() => {
        if (session?.entries_full) return;  // already have data

        let cancelled = false;
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
                setAllPlants(response.all_plants || []);
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
    
    const invalidate = useCallback(() => {
        updateSession({ entries_full: null });
    }, [updateSession]);
    
    return { entries, setEntries, locations, allPlants, loading, error, invalidate };
}