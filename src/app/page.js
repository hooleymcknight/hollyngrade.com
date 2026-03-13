import Image from "next/image";
import areYouLive from './api/twitch';
import TwitchEmbed from './components/TwitchEmbed/twitchEmbed';
import DonationButtons from "./components/TwitchEmbed/donationButtons";
import ChasmPhotos from "./components/pets/chasmPhotos";

let isLive = false;

export default async function Home() {
    const liveStreams = await areYouLive();
    if (liveStreams.length) {
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
                            Chasm's surgery fundraiser
                        </h2>
                        <p className="max-w-md text-lg leading-6 text-zinc-800 mt-3 mb-0">
                            <a href="#chasm-updates" alt="jump to Chasm updates" className="underline">
                                Click here to jump ahead to Chasm's status&nbsp;updates.
                            </a>
                        </p>
                    </div>
                </div>

                <DonationButtons />

                <p className="max-w-full text-lg leading-normal text-zinc-800 mt-6 font-medium">
                    Chasm has an upcoming surgery on Friday, March 27th, to remove a problematically-placed tumor, and possibly one additional&nbsp;tumor.
                    <br/><br/>
                    In total, Chasm has <b>15 known tumors</b>: 2 internal, and 13 external. Below is his most recent tumor chart. The tumors we are hoping to remove are numbers 4 and 12, <span className="text-[#72140c] font-bold">shown&nbsp;in&nbsp;red</span>.

                    <a href="/Chasm-tumor-chart-3-1.png" target="_blank" alt="open image in new tab">
                        <small className="underline mt-4 text-xs block text-center">Click image to open in new tab</small>
                    </a>
                    <a href="/Chasm-tumor-chart-3-1.png" target="_blank" alt="open image in new tab">
                        <Image
                            className="mx-auto mt-2 mb-4"
                            src="/Chasm-tumor-chart-3-1.png"
                            alt="Chasm body tumor chart"
                            width={1668}
                            height={2160}
                            priority
                            style={{ display: 'block', width: 'auto', maxHeight: '800px' }}
                            // loading="eager"
                        />
                    </a>
                    The problematically-placed tumor is #12. The tumor has a high potential for wrapping around his muscles, nerves, and veins in his elbow. His doctor, Dr. Christianson, is determined to remove this tumor as soon as&nbsp;possible.
                    <br/><br/>
                    Tumor #4 is not as urgent, but we do want to try to remove it for Chasm's comfort, as it is putting pressure on his&nbsp;genitalia.
                    <br/><br/>
                    The road to this surgery has been a long one, as Chasm has other health issues that have prevented him from being eligible for a surgery up until now. In June of 2025, Chasm had a splenectomy, after which the surgeon noted his heart rate during recovery dropped to 30 beats per minute. The lowest healthy heart rate for a dog his size is 60 bpm. Since then, he has been on a heart medication to improve his heart rate. This has been very successful for&nbsp;him.
                    <br/><br/>
                    Also leading up to this surgery, Chasm will need a PT-PTT test, an ultrasound, and a biopsy to assess his growing liver tumor and see if we need to address it during the surgery. A PT-PTT (Prothrombin Time and Partial Thromboplastin Time) test checks his blood to see how long it takes to clot, amongst other potential disorders. It is also known as a coagulation test. This will help Dr. Christianson know if it is safe to address his liver tumor during the upcoming&nbsp;surgery.
                    <br/><br/>
                    The cost for the surgery and pre-surgery procedures is shown&nbsp;below.
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
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$1700</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">Fri, Mar 27</span><span className="inline sm:hidden">3/27</span></td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2"><span className="hidden sm:inline">mass </span>surgery + dental</td>
                            <td className="border border-gray-300 bg-zinc-50 pl-2 pr-4 py-2">$2740</td>
                        </tr>
                        <tr>
                            <td style={{visibility: 'hidden'}}></td>
                            <td colSpan={1} className="font-bold border border-gray-300 bg-gray-400 pl-2 pr-6 py-2 text-left span-2">Total Cost:</td>
                            <td className="font-bold border border-gray-300 bg-gray-400 pl-2 pr-6 py-2 text-left">$4815</td>
                        </tr>
                    </tbody>
                </table>

                <p className="max-w-full text-lg leading-normal text-zinc-800 my-6 font-medium">
                    My current fundraising goal is to reach $2500 so that I can afford his surgery. If any additional funds are raised, they will go to his surgery and pre-surgery procedures, to reduce the amount of debt that I have to take for&nbsp;this.
                    <br/><br/>
                    Any amount donated is deeply, deeply appreciated. Chasm is a lovely, and delightful guy, and I just want him to be as healthy and happy as&nbsp;possible.
                </p>

                <DonationButtons />

                <div id="chasm-updates" className="mt-20">
                    <h2 className="text-2xl font-bold text-center">Status Updates</h2>
                    <br/>
                    <ul className="list-disc list-outside pl-6">
                        <li><b><u>Mar 6:</u></b>  Chasm had his PT-PTT test today. We could have results as early as tomorrow or as late as Tuesday 3/10.</li>
                        <li><b><u>Mar 10:</u></b>  Chasm's clotting panel came back normal and he is cleared for his biopsy tomorrow.</li>
                        <li><b><u>Mar 11:</u></b>  The liver mass has been biopsied; we are awaiting results on that. The ultrasound has reopened the discussion of his adrenal mass. We are now discussing if it is appropriate to remove that. It would cure Chasm of his Cushing's disease, so this removal could be very impactful for him. We just need to assess the risk involved. Dr. Christianson is consulting a colleague on Chasm's case. If we decide to go forward with the adrenal mass removal, Chasm will be referred to a specialist surgeon instead. I've scheduled a consultation with the specialist for Tuesday, Mar 17. We are gathering additional opinions, so I felt it made sense to include the potential surgeon as well.</li>
                    </ul>
                </div>

                <div id="chasm-photos" style={{ minHeight: '80vh' }}>
                    <ChasmPhotos />
                </div>

            </div>
        </main>
    );
}