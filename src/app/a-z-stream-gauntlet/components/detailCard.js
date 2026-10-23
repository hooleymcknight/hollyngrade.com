import { useState, useEffect } from "react";
import GhostyBoy from "./ghostyBoy";

// calendar date like "2026-10-23" in the given time zone (undefined = the visitor's own)
const calendarDate = (d, timeZone) => d.toLocaleDateString('en-CA', { timeZone });

export default function DetailCard(props) {
    const start = props.start ? new Date(props.start) : null;
    const shownDay = start || props.day;

    const [useLocal, setUseLocal] = useState(false);
    useEffect(() => { setUseLocal(true); }, []);
    const timeZone = useLocal ? undefined : 'America/Los_Angeles';

    const dayStr = calendarDate(new Date(shownDay), timeZone);
    const todayStr = calendarDate(new Date(props.today), timeZone);
    const status = dayStr < todayStr ? 'Done' : dayStr > todayStr ? 'Upcoming' : 'Today';

    return (
        <>
            <div className={' flex gap-10 w-full'}>
                <div style={{ fontFamily: 'Saira Stencil One', lineHeight: 1, fontWeight: 'normal' }} className={
                    `${props.styles.azAccent} ${props.styles.azBigLetter}` + 
                    ` text-[200px] min-w-[20%] text-center hidden sm:block ` + 
                    (props.letter === 'GHOST' ? props.styles.spookyDetails : '')
                }>
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