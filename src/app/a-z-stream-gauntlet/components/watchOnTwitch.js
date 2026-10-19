import Link from "next/link";

export default function WatchOnTwitch(props) {

    return (
        <>
            <p className="mb-4 flex flex-row flex-wrap items-center justify-start gap-x-4 gap-y-2">
                <a href="https://twitch.tv/hollyngrade" tabIndex="0" className={props.styles.azToday + ' flex items-center font-bold text-md !py-3 !px-5 ' + props.styles.twitchBtn}>
                    <svg className="inline-block mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#241014" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="2" fill="#241014"/>
                        <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.2 5.2a9.6 9.6 0 0 0 0 13.6M18.8 5.2a9.6 9.6 0 0 1 0 13.6"/>
                    </svg>
                    Watch live on Twitch
                </a>
                <span className="block font-bold tracking-[1px] text-sm" style={{ color: 'var(--dark-cream)' }}>
                    twitch.tv/hollyngrade
                </span>
            </p>
        </>
    );
}

