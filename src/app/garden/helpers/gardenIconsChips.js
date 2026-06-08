import { familyColor } from "./gardenHelpers";

/* ============================== */
// icons!
/* ============================== */

export const MapPinIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

export const CameraIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </svg>
);

export const PencilIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
);

/* ============================== */
// chips!
/* ============================== */

// filter chip
export function FilterChip({ label, count, active, onClick, icon = null, size = "md" }) {
    const sizing = size === "sm"
        ? "px-2.5 py-1 text-xs"
        : "px-3 py-1.5 text-sm";
    const base = "inline-flex items-center gap-1.5 rounded-full border transition-colors cursor-pointer select-none";
    const stateClasses = active
        ? "bg-black text-white border-black"
        : "bg-white text-black border-neutral-300 hover:border-neutral-500";
    return (
        <button type="button" onClick={onClick} className={`${base} ${sizing} ${stateClasses}`}>
            {icon}
            <span>{label}</span>
            {typeof count === "number" && (
                <span className={`ml-0.5 tabular-nums ${active ? "opacity-70" : "opacity-50"}`}>
                    {count}
                </span>
            )}
        </button>
    );
}

// plant chip
export function PlantChip({ plant }) {
    const c = familyColor(plant.color_token);
    const label = plant.nickname || plant.name;
    return (
        <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium tracking-wide"
            style={{ backgroundColor: c.bg, color: c.fg }}
            title={plant.nickname ? `${plant.name} (${plant.family_name})` : plant.family_name}
        >
            {label}
        </span>
    );
}