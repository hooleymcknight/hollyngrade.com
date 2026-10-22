export default function AzOBS () {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet" />

            <div className="gauntlet-col">
                <div className="gauntlet-title">
                    <div>Stream</div>
                    <div>Gauntlet</div>
                </div>
                <div className="gauntlet-dates">Oct 23 - Nov 18</div>
            </div>

            <style>
                {`.gauntlet-col {
                    --accent: #F2A93B;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-family: 'Saira Semi Condensed', system-ui, sans-serif;
                }
                .gauntlet-title {
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 0.95;
                    color: var(--accent);
                    margin-top: -5px;
                }
                .gauntlet-dates {
                    font-size: 22px;
                    font-weight: 600;
                    line-height: 1;
                    color: #E4D5CC;
                    margin-bottom: -4px;
                }`}
            </style>
        </>
    );
}