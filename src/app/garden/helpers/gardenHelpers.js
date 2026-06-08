/**
 * gardenHelpers.js
 * ----------------------------------------------------------------
 * Shared utilities and small presentational components for the
 * garden journal. Imported by GardenJournalFeed, EntryCard, and
 * (eventually) the new-entry form.
 */

// --- Family color tokens -----------------------------------------------------
// Hex map rather than Tailwind arbitrary classes so chip colors are guaranteed
// to render regardless of Tailwind's content scan. Tweak hex values to taste.
export const FAMILY_COLORS = {
    coral: { bg: "#ee6c5a", fg: "#ffffff" },
    red:   { bg: "#b03030", fg: "#ffffff" },
    amber: { bg: "#d99632", fg: "#1a1a1a" },
    green: { bg: "#5a8f47", fg: "#ffffff" },
    teal:  { bg: "#3a8a85", fg: "#ffffff" },
    gray:  { bg: "#6b7178", fg: "#ffffff" },
    pink:  { bg: "#dc7fa0", fg: "#1a1a1a" },
};
export const familyColor = (token) => FAMILY_COLORS[token] || FAMILY_COLORS.gray;

// --- Date helpers ------------------------------------------------------------
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

// Parse "YYYY-MM-DD" as a local date (avoiding UTC drift from `new Date(str)`).
export function parseEntryDate(str) {
    if (!str) return null;
    const [y, m, d] = str.split("-").map(Number);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
}

export function todayIso() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

export function formatHeadline(str) {
    const d = parseEntryDate(str);
    if (!d) return { primary: "—", secondary: "" };
    return {
        primary: `${MONTHS[d.getMonth()]} ${d.getDate()}`,
        secondary: `${d.getFullYear()} · ${WEEKDAYS[d.getDay()]}`,
    };
}