export default function DetailCard(props) {

    return (
        <>
            <div className={' flex gap-10 w-full'}>
                <div className={props.styles.azAccent + " text-[200px] min-w-[20%] text-center hidden sm:block"} style={{ fontFamily: 'Saira Stencil One', lineHeight: 1, fontWeight: 'normal' }}>
                    {props.letter}
                </div>
                
                <div className={' flex flex-col flex-start w-full sm:w-[70%]'}>
                    <p className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:block">
                        <span className={props.styles.azToday + ' uppercase font-bold tracking-[2px] text-sm sm:mr-4 '
                            + ((props.today > props.day) ? props.styles.done : (props.today < props.day) ? props.styles.future : props.styles.today)
                        }>
                            { props.today > props.day ? 'Done' : props.today < props.day ? 'Upcoming' : 'Today' }
                        </span>
                        <span className="uppercase font-bold tracking-[2px] text-sm" style={{ color: 'var(--dark-cream)' }}>
                            { props.day.toLocaleDateString('en-US', {timezone: 'America/Los_Angeles', 'weekday': 'short', 'month': 'short', 'day': 'numeric' }) }
                        </span>
                    </p>
                    <div className={props.styles.azAccent + " text-[200px] min-w-[20%] text-center block sm:hidden"} style={{ fontFamily: 'Saira Stencil One', lineHeight: 1, fontWeight: 'normal' }}>
                        {props.letter}
                    </div>

                    { props.games.map((game) => 
                        <span key={game} className={props.styles.azTodaysGame + ' mb-3'} style={{ lineHeight: 1.2 }}>{game}</span>
                    ) }
                </div>
            </div>
        </>
    );
}