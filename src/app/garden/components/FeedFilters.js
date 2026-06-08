import { useCallback } from "react";
import { FilterChip, MapPinIcon } from "../helpers/gardenIconsChips";

export default function FeedFilters ({ familyChips, selectedFamilyIds, locationChips, selectedLocationIds }) {
    //

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

    return (
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
    );
}