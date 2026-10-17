import Image from "next/image";
import areYouLive from '../api/twitch';
import TwitchEmbed from '../components/TwitchEmbed/twitchEmbed';
import DonationButtons from "../components/TwitchEmbed/donationButtons";
import Link from "next/link";
import Main from '../components/mainWrapper';

import AzLogo from "./components/a-z";
import GameListing from "./components/gameListing";

export default async function AzGauntlet() {
    let isLive = false;
    const liveStreams = await areYouLive();
    if (liveStreams?.length) {
        isLive = liveStreams[0].type;
    }

    return (
        <>
            <Main classes={'flex-row flex-wrap justify-start gap-4 items-end'} id="coming-soon">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:text-left">
                    <AzLogo width="calc(90% - 320px)" />
                    <h1 style={{ fontSize: 40 }} className="max-w-xs font-semibold leading-10 tracking-tight text-black">
                        Stream Gauntlet
                    </h1>

                    <div className="flex flex-col flex-nowrap">
                        <p className=" text-[18px] leading-7 text-zinc-800 my-0 mt-4 md:block">
                            Each day, I'll play a game whose title starts with the next letter of the alphabet. Experience the gauntlet with me!
                        </p>
                    </div>

                    <TwitchEmbed live={isLive} />
                </div>
            </Main>

            <Main id="coming-up" classes={'mb-8'} style={{ marginBottom: 8 }}>
                <div className="flex flex-column flex-wrap justify-start gap-6 text-left sm:text-left sm:flex-nowrap mb-8 !max-w-[60ch]">

                    <GameListing date="10/23" title="Alien Isolation / Arc Raiders" />
                    <GameListing date="10/24" title="Big Walk / Beat Saber / Baldur's Gate 3" />
                    <GameListing date="10/25" title="Cyberpunk 2077 / Coral Island" />
                    <GameListing date="10/26" title="Dead by Daylight / Death Stranding 2" />
                    <GameListing date="10/27" title="<Elden Ring> / <ESO>" />
                        <meta content=" / <Eternal Threads>" />
                    <GameListing date="10/28" title="Fortnite / <Fallout 76>" />
                        <meta content=" / <Funger>" />
                    <GameListing date="10/29" title="GTFO" />
                        <meta content=" / <Ghostwire: Tokyo>" />

                    <hr/>

                    <GameListing date="10/31" title="Hollow Knight" />
                    <GameListing date="11/1" title="ICO" />
                    <GameListing date="11/2" title="{{ J }}" />
                        <meta content="<Jusant>" />
                    <GameListing date="11/3" title="Keplerth" />
                    <GameListing date="11/4" title="Lords of the Fallen / Life Is Strange" />
                    <GameListing date="11/5" title="Monster Hunter: World / Mass Effect / Marathon" />
                    <GameListing date="11/6" title="Neva" />
                    <GameListing date="11/7" title="One Hour One Life / Ori and the Blind Forest" />
                    <GameListing date="11/8" title="Pathologic / PEAK" />
                    <GameListing date="11/9" title="{{ Q }}" />
                        <meta content="<The Quarry>" />
                    <GameListing date="11/10" title="RiME / R.E.P.O." />
                    <GameListing date="11/11" title="Silent Hill f / Shadow of the Colossus" />
                    <GameListing date="11/12" title="Trash Day" />
                        <meta content=" / <Timelie>" />
                    <GameListing date="11/13" title="Undertale" />
                    <GameListing date="11/14" title="Venba / VALORANT" />
                    <GameListing date="11/15" title="{{ W }}" />
                        <meta content="Witcher 3 / The Witness / <Warframe>" />
                    <GameListing date="11/16" title="X8 / X-MODE / X-Ray 2D" />
                    <GameListing date="11/17" title="YAPYAP" />
                    <GameListing date="11/18" title="Zero-K / Zenless Zone Zero" />

                </div>
            </Main>
        </>
    );
}