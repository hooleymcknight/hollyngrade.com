import Image from "next/image";
import areYouLive from './api/twitch';
import TwitchEmbed from './components/TwitchEmbed/twitchEmbed';
import DonationButtons from "./components/TwitchEmbed/donationButtons";
import Link from "next/link";
import Main from './components/mainWrapper';

export default async function Home() {
    let isLive = false;
    const liveStreams = await areYouLive();
    if (liveStreams?.length) {
        isLive = liveStreams[0].type;
    }

    return (
        <>
            <Main classes={'flex-row gap-4 sm:items-center'} styles={{ alignItems: 'center' }} id="coming-soon">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:items-center sm:text-left sm:flex-nowrap">
                    <Image
                        className=""
                        src="/badge_03mo.png"
                        alt="hollyngrade logo"
                        width={100}
                        height={100}
                        priority
                    />
                    <div className="flex flex-col flex-nowrap">
                        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
                            hollyngrade.com
                        </h1>
                        <p className="max-w-md text-lg leading-8 text-zinc-800 my-0">
                            Full website coming soon...
                        </p>
                    </div>

                    <TwitchEmbed live={isLive} />
                </div>
            </Main>
        </>
    );
}