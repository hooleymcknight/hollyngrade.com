import Image from "next/image";
import areYouLive from './api/twitch';
import TwitchEmbed from './components/TwitchEmbed/twitchEmbed';
import DonationButtons from "./components/TwitchEmbed/donationButtons";
import ChasmPhotos from "./components/pets/chasmPhotos";

export default async function Home() {
    let isLive = false;
    const liveStreams = await areYouLive();
    if (liveStreams?.length) {
        isLive = liveStreams[0].type;
    }

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div id="coming-soon" className="flex max-h-screen w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}>
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
                </div>

                <TwitchEmbed live={isLive} />
            </div>

            <div id="chasm-surgery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-4 sm:py-16 sm:px-16 bg-zinc-50 sm:items-start mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}>
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:items-center sm:text-left sm:flex-nowrap">
                    <Image
                        className=""
                        src="/chasm-funnymouth.png"
                        alt="Chasm sitting and looking at the camera"
                        width={200}
                        height={200}
                        priority
                    />
                    <div className="flex flex-col flex-nowrap">
                        <h2 className="max-w-s text-3xl font-semibold leading-10 tracking-tight text-black">
                            Chasm&apos;s tribute fundraiser
                        </h2>
                        {/* <p className="max-w-md text-lg leading-6 text-zinc-800 mt-3 mb-0">
                            <a href="#chasm-updates" alt="jump to Chasm updates" className="underline">
                                Click here to jump ahead to Chasm's status&nbsp;updates.
                            </a>
                        </p> */}
                    </div>
                </div>

                <DonationButtons />

                <p className="max-w-full text-lg leading-normal text-zinc-800 mt-6 font-medium">
                    We were raising money for a major surgery for Chasm, which he had done on Wednesday, April 8th. He did very well in the surgery, and recovered nicely. 
                    On April 21st, he had his recheck with the surgeon and was cleared to return to normal activities.
                    <br/><br/>
                    Unexpectedly, he went septic two days later. We do not believe this was a complication of surgery; it seems more likely that he had an abscess that ruptured. 
                    Chasm was not able to recover, and he died in the hospital within a few hours.
                </p>

                <table className="my-6 sm:mx-auto sm:text-lg">
                    <tbody>
                        <tr>
                            <th className="border border-gray-300 bg-gray-600 text-white pl-2 pr-6 py-2 text-left">Date</th>
                            <th className="border border-gray-300 bg-gray-600 text-white pl-2 pr-6 py-2 text-left">Procedure</th>
                            <th className="border border-gray-300 bg-gray-600 text-white pl-2 pr-6 py-2 text-left">Cost</th>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Fri, Mar 6</span><span className="inline sm:hidden">3/6</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">PT-PTT test</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$375</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Wed, Mar 11</span><span className="inline sm:hidden">3/11</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">ultrasound + biopsy</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$1,565</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Tue, Mar 17</span><span className="inline sm:hidden">3/17</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">oncology <span className="hidden sm:inline">consult + </span>tests</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$1,400</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Thu, Mar 26</span><span className="inline sm:hidden">3/26</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">CT scan</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$4,200</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Wed, Apr 1</span><span className="inline sm:hidden">4/1</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">echocardiogram</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$1,350</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Thu, Apr 2</span><span className="inline sm:hidden">4/2</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">ACTH stim test + parathyroid panel</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$870</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Wed, Apr 8</span><span className="inline sm:hidden">4/8</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">surgery: adrenalectomy, parathyroidectomy, liver lobectomy</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$17,500</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Thu, Apr 23</span><span className="inline sm:hidden">4/23</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">emergency sepsis care</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$1,750</td>
                        </tr>
                        <tr>
                            <td style={{visibility: 'hidden'}}></td>
                            <td colSpan={1} className="font-bold border border-gray-300 bg-gray-400 pl-2 pr-6 py-2 text-left span-2">Total Cost:</td>
                            <td className="font-bold border border-gray-300 bg-gray-400 pl-2 pr-6 py-2 text-left">$29,010</td>
                        </tr>
                    </tbody>
                </table>

                <p className="max-w-full text-lg leading-normal text-zinc-800 my-6 font-medium">
                    The vets and I did our best for Chasm, tried to give him the best chance of a healthy, happy life. While the surgery didn&apos;t cause this, 
                    we&apos;re glad we tried for him. We&apos;re all pretty wrecked to lose Chasm. The vets have cried, friends have cried. Chasm was one of the 
                    most loved dogs I&apos;ve had the opportunity to know. I loved being his owner. It was a privilege to take care of him for his whole life.
                    <br/><br/>
                    I will be grieving Chasm for years regardless, but I will also be in debt for years as well, to pay off the procedures we had for him 
                    recently. Any help in lightening that financial load is deeply, deeply appreciated.
                    <br/><br/>
                    If you wish to donate a small rock to Chasm&apos;s grave, you may mail one to my home address (assuming that you either already have this 
                    information or are someone I know in person to give that information to). Any donated rocks will be placed on Chasm&apos;s grave.
                </p>

                <DonationButtons />

                <div id="chasm-photos" style={{ minHeight: '80vh' }}>
                    <ChasmPhotos />
                </div>

            </div>
        </main>
    );
}