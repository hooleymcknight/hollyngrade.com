export default async function GameListing(props) {

    const dateStr = (new Date(`${props.date}/2026`)).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: 'America/Los_Angeles'
    });
    // "Fri, Oct 23"

    return (
        <div className="events-section w-full !max-w-[60ch] block">
            <h2 className="mb-0 ml-0 block w-full text-sm" style={{ textTransform: 'uppercase', letterSpacing: '0.75px', fontSize: 18, fontWeight: 500 }}>
                {dateStr}
            </h2>
            <h3 className="ml-0 block w-full" style={{ fontSize: 24 }}>
                {/* <Link href="/a-z-stream-gauntlet"> */}
                    {props.title}
                {/* </Link> */}
            </h3>
        </div>
    );
}