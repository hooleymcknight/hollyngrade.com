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
            <Main classes={'flex-row flex-wrap justify-start gap-4 items-center'} id="coming-soon">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:text-left">
                    <Image
                        className="md:w-[150px]"
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
                        <p className="max-w-md text-[18px] leading-7 text-zinc-800 my-0 mt-4 hidden md:block">
                            Hi, I’m Hollyn <i>(yes, with the n)</i>. Whatever brought you here — a stream, a fundraiser, a backyard BBQ — this is where you’ll find the details. There are also photos of the things I build in between.
                        </p>
                    </div>
                    <p className="max-w-md text-[18px] leading-7 text-zinc-800 my-0 mt-4 block md:hidden">
                        Hi, I’m Hollyn <i>(yes, with the n)</i>. Whatever brought you here — a stream, a fundraiser, a backyard BBQ — this is where you’ll find the details. There are also photos of the things I build in between.
                    </p>

                    <TwitchEmbed live={isLive} />
                </div>
            </Main>

            <Main id="coming-up" classes={'mb-8'} style={{ marginBottom: 8 }}>
                <div className="flex flex-column flex-wrap justify-start gap-6 text-left sm:text-left sm:flex-nowrap mb-8 !max-w-[60ch]">
                    <h2 className="mb-4 ml-0 block w-full text-sm" style={{ textTransform: 'uppercase', letterSpacing: '0.75px', fontSize: 18, fontWeight: 500 }}>Coming Up</h2>

                    <h3 className="ml-0 block w-full" style={{ fontSize: 24 }}>
                        <Link href="/bbq">
                            HEB Backyard BBQ
                        </Link>
                    </h3>
                    <p className="ml-0 block w-full"><time dateTime="2026-08-22">Saturday, August 22nd</time></p>
                    <p className="mt-6 !max-w-[60ch] ml-0 mr-auto">
                        Come eat, swim, play cornhole, sing karaoke! I’ll post what to bring closer to the date. <a href="sms:+19364251225?&body=I%27ll%20be%20there%21" style={{ fontWeight: 'normal' }} className="underline decoration-1 underline-offset-4 !text-slate-800 hover:text-slate-900 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2">Text me if you’re interested</a>.{" "}
                        <br /><br />
                        The karaoke is homemade! Send me your song requests and I’ll do my best to get it turned into karaoke format for the BBQ!
                    </p>
                </div>
            </Main>
        </>
    );
}