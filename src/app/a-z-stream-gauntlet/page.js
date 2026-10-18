import Image from "next/image";
import areYouLive from '../api/twitch';
import TwitchEmbed from '../components/TwitchEmbed/twitchEmbed';
import DonationButtons from "../components/TwitchEmbed/donationButtons";
import Link from "next/link";
import Main from '../components/mainWrapper';

import AzLogo from "./components/a-z";
import GameListing from "./components/gameListing";
import styles from "./az.module.css";
import data from './az_data.json';

const today = new Date('10/31/2026');

const startDay = new Date('10/23/2026');
const offDay = new Date('10/30/2026');
const endDay = new Date('11/18/2026');

const daysUntilBreak = Math.round((offDay - today) / 1000 / 60 / 60 / 24);
const daysPassed = today < offDay ? Math.round((today - startDay) / 1000 / 60 / 60 / 24) + 1
    : 26 - (Math.round((endDay - today) / 1000 / 60 / 60 / 24));

// .toLocaleDateString('en-US', {timezone: 'America/Los_Angeles', 'month': 'numeric', 'day': '2-digit' });

export default async function AzGauntlet() {
    let isLive = false;
    const liveStreams = await areYouLive();
    if (liveStreams?.length) {
        isLive = liveStreams[0].type;
    }

    return (
        <>
            <Main classes={styles.azBlock + ' flex-row flex-wrap justify-start gap-4 items-end'} id="heading">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:text-left">
                    <AzLogo width="calc(90% - 320px)" color="#fff" />
                    <h1 style={{ fontSize: 40 }} className={styles.azAccent + " max-w-xs font-semibold leading-10 tracking-tight"}>
                        Stream Gauntlet
                    </h1>

                    <div className="flex flex-col flex-nowrap">
                        <p className=" text-[18px] leading-7 my-0 mt-4 md:block">
                            Each day, I'll play a game whose title starts with the next letter of the alphabet. Experience the gauntlet with me!
                        </p>
                    </div>

                    <div className={styles.azProgressBar + ' flex flex-col w-full'}>
                        <div className="flex justify-between w-full">
                            <span className="uppercase font-semibold tracking-wide text-sm">Day {daysPassed}</span>
                            <span className="uppercase font-semibold tracking-wide text-sm">26 Letters</span>
                        </div>
                        <div style={{ background: 'rgba(255, 255, 255, 0.4)' }} className="h-[5px] w-full rounded-[8px] mt-2">
                            <div className="w-0 bg-[var(--az-accent)] h-[5px] rounded-[8px]" style={{ width: `${(daysPassed / 26) * 100}%` }} ></div>
                        </div>
                    </div>
                </div>
            </Main>

            <Main classes={styles.azBlock + ' flex-row flex-wrap justify-start gap-4 items-end'} id="current-letter">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:text-left">

                    <div className={' flex'}>
                        <div className="text-[150px]" style={{ fontFamily: 'Stencil', lineHeight: 1 }}>
                            {Object.keys(data)[daysPassed - 1]}
                        </div>
                        
                        <div className={' flex flex-col flex-start'}>
                            <p>
                                <span className={styles.azToday}>Today</span>
                                <span>{ today.toLocaleDateString('en-US', {timezone: 'America/Los_Angeles', 'weekday': 'short', 'month': 'short', 'day': 'numeric' }) }</span>
                            </p>
                        </div>
                    </div>

                    <TwitchEmbed live={isLive} />
                </div>
            </Main>

            <Main id="upcoming-letters" classes={styles.azBlock + ' mb-8'} style={{ marginBottom: 8 }}>
                <p>asdf</p>
            </Main>
        </>
    );
}