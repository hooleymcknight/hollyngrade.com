import { useState, useEffect } from "react";
import GhostyBoy from "./ghostyBoy";

// calendar date in Pacific time, e.g. "2026-10-23" (sorts correctly as text)
const pacificDate = (d) => d.toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });

export default function DetailCard(props) {
    const start = props.start ? new Date(props.start) : null;

    // The first render (server + browser) uses Pacific time so both match.
    // Right after that, switch to the visitor's own timezone.
    const [useLocal, setUseLocal] = useState(false);
    useEffect(() => { setUseLocal(true); }, []);
    const timeZone = useLocal ? undefined : 'America/Los_Angeles';

    // Build the label from start when we have it, so the date and time always agree
    const shownDay = start || props.day;

    // Done / Today / Upcoming, judged by Pacific calendar dates
    const dayStr = pacificDate(shownDay);
    const todayStr = pacificDate(props.today);
    const status = dayStr < todayStr ? 'Done' : dayStr > todayStr ? 'Upcoming' : 'Today';

    return (
        <>
            <div className={' flex gap-10 w-full'}>
                <div className={`${props.styles.azAccent} ${props.styles.azBigLetter} text-[200px] min-w-[20%] text-center hidden sm:block ` + (props.letter === 'GHOST' ? props.styles.spookyDetails : '')} style={{ fontFamily: 'Saira Stencil One', lineHeight: 1, fontWeight: 'normal' }}>
                    {props.letter === 'GHOST' ? <GhostyBoy /> : props.letter }
                </div>
                
                <div className={' flex flex-col flex-start w-full sm:w-[70%]'}>
                    <p className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:block">
                        <span className={props.styles.azToday + ' uppercase font-bold tracking-[2px] text-sm sm:mr-4 '
                            + ((props.letter === 'GHOST') ? props.styles.spooky : status === 'Done' ? props.styles.done : status === 'Upcoming' ? props.styles.future : props.styles.today)
                        }>
                            { props.letter === 'GHOST' ? 'Spooky Day' : status }
                        </span>
                        <span className="uppercase font-bold tracking-[2px] text-sm" style={{ color: 'var(--dark-cream)' }}>
                            { shownDay.toLocaleDateString('en-US', { timeZone, 'weekday': 'short', 'month': 'short', 'day': 'numeric' }) }
                            {start && ` · `}
                            { start && start.toLocaleTimeString('en-US', { timeZone, 'hour': 'numeric', 'minute': '2-digit', 'timeZoneName': 'short' })}
                        </span>
                    </p>
                    <div className={`${props.styles.azAccent} ${props.styles.azBigLetter} text-[200px] min-w-[20%] text-center block sm:hidden ` + (props.letter === 'GHOST' ? props.styles.spookyDetails : '')} style={{ fontFamily: 'Saira Stencil One', lineHeight: 1, fontWeight: 'normal' }}>
                        {props.letter === 'GHOST' ? <GhostyBoy /> : props.letter }
                    </div>

                    { props.games.map((game) => 
                        <span key={game} className={props.styles.azTodaysGame + ' mb-3'} style={{ lineHeight: 1.2 }}>
                            {game}
                        </span>
                    ) }
                </div>
            </div>
        </>
    );
}