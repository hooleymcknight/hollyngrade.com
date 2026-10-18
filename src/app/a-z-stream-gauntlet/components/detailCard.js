export default function DetailCard(props) {

    return (
        <>
            <div className={' flex gap-10 w-full'}>
                <div className={props.styles.azAccent + " text-[200px] w-[20%] text-center"} style={{ fontFamily: 'Saira Stencil One', lineHeight: 1, fontWeight: 'normal' }}>
                    {props.letter}
                </div>
                
                <div className={' flex flex-col flex-start w-[70%]'}>
                    <p className="mb-4">
                        <span className={props.styles.azToday + ' uppercase font-bold tracking-[2px] text-sm mr-4'}>Today</span>
                        <span className="uppercase font-semibold tracking-[2px] text-sm">
                            { props.day.toLocaleDateString('en-US', {timezone: 'America/Los_Angeles', 'weekday': 'short', 'month': 'short', 'day': 'numeric' }) }
                        </span>
                    </p>
                    { props.games.map((game) => 
                        <span key={game} className={props.styles.azTodaysGame}>{game}</span>
                    ) }
                </div>
            </div>
        </>
    );
}