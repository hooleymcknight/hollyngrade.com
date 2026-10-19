import GhostyBoy from "./ghostyBoy";

export default function letterBoxes(props) {

    return (
        <>
            { Object.keys(props.data).map((letter) => 
                <button key={letter} onClick={(e) => {props.switchHandler(e)}} data-value={props.data[letter].date} className={
                    props.styles.letterBox + ' ' +
                    (props.todayLetter === letter ? props.styles.highlighted : 
                        Object.keys(props.data).indexOf(props.todayLetter) > Object.keys(props.data).indexOf(letter) ? props.styles.passed : props.styles.future)
                    + ' ' + (props.sdLetter === letter ? props.styles.selected : '') + ' ' + props.sdLetter
                }>
                    <svg className={props.styles.checkMark} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6EDE6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5"/>
                    </svg>

                    <span className={props.styles.letter}>{letter === 'GHOST' ? <GhostyBoy/> : letter}</span>
                    <span className={'block-date uppercase font-semibold tracking-wide text-xs mt-1'}>
                        { props.data[letter].date }
                    </span>
                </button>
            ) }
        </>
    );
}