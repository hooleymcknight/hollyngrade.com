export function buildFamilyChips(entries) {
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
}

export function buildLocationChips(entries, locations) {
    const counts = new Map();
    for (const entry of entries) {
        counts.set(entry.location_id, (counts.get(entry.location_id) || 0) + 1);
    }
    return locations
        .map((loc) => ({ ...loc, count: counts.get(loc.id) || 0 }))
        .filter((loc) => loc.count > 0);
}

export function filterEntries(entries, selectedFamilyIds, selectedLocationIds) {
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
}