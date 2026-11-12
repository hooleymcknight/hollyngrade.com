'use client';
import data from "@/data/az/az_2026.json";
import GhostyBoy from "./ghostyBoy";

const isSameDay = (today: Date, targetDay: Date) => {
    return today.getMonth() === targetDay.getMonth() && today.getDate() === targetDay.getDate();
}

export default function AzBentoIndex() {
    const today = new Date();

    return (
        <div id="letters-simple" className="az flex flex-wrap gap-4">
            { data.days.map(x => {
                const startDate = new Date(x.start);
                return (<div key={x.label} data-label={x.label}
                    className={"az-tiles text-[var(--faded-white)] " + 
                        (isSameDay(today, startDate) ? "active" : 
                        today < startDate ? "upcoming" :
                        today > startDate ? "completed" : "")
                    }
                >
                    {x.label === 'GHOST' ? <GhostyBoy /> : x.label}
                </div>)
            })}
        </div>
    );
}
