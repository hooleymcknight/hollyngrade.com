import GhostyBoy from "./ghostyBoy";

export default function letterBoxes(props) {

    return (
        <>
            { (props.data).map((dayObj, idx) => 
                <button key={dayObj.label} onClick={(e) => {props.switchHandler(e)}} data-letter={dayObj.label} data-start={dayObj.start} className={
                    'letter-box ' +
                    (props.todayLetter === dayObj.label ? 'highlighted' : 
                        props.data.findIndex((y => y.label === props.todayLetter)) > idx ? 'passed' : 'future')
                    + ' ' + (props.sdLetter === dayObj.label ? 'selected ' : ' ') + props.sdLetter
                }>
                    <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6EDE6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5"/>
                    </svg>

                    <span className="letter">{dayObj.label === 'GHOST' ? <GhostyBoy/> : dayObj.label}</span>
                    <span className={'block-date uppercase font-semibold tracking-wide text-xs mt-1'}>
                        { dayObj.date }
                    </span>
                </button>
            ) }
        </>
    );
}