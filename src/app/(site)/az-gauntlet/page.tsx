'use client';
import { MouseEvent, useState } from "react";
import Image from "next/image";
import BentoBoxCompartment from "@/app/(site)/components/bentoBoxCompartment";

import AzLogo from "./components/a-z";
import DetailCard from "./components/detailCard";
import LetterBoxes from "./components/letterBoxes";
import WatchOnTwitch from "./components/watchOnTwitch";

import data from '@/data/az/az_2026.json';
import TwitchPlayer from "../components/twitch/twitchPlayer";

import '@/app/(site)/styles/az.css';

type AzDataType = {
    type: string;
    label: string;
    start: string;
    games: string[];
    backup_games?: string[];
    games_played: string[];
    vod: string;
    post_summary: string;
}
const azData: AzDataType[] = data.days;

const today = new Date();

const startDay = new Date('2026-10-23T00:00:00-07:00');
const offDay = new Date('2026-10-30T00:00:00-07:00');

const dayKeys = azData.map(x => x.label);

// calendar date in Pacific - "2026-10-23"
const pacificDate = (d: Date) => d.toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
// const dayIndexOf = (d: Date) => dayKeys.findIndex((val, k) => pacificDate(new Date(azData[k].start)) === pacificDate(d));
const dayIndexOf = (d: Date) => azData.findIndex(x => pacificDate(new Date(x.start)) === pacificDate(d))

export default function AzGauntlet() {
    const [twitchLive, setTwitchLive] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState(today < startDay ? startDay : today);

    // today's place in the schedule (0 = not started yet)
    const todayIndex = dayIndexOf(today);
    const daysPassed = today < startDay ? 0 : todayIndex === -1 ? dayKeys.length : todayIndex + 1;
    const todayLetter = dayKeys[daysPassed - 1];

    // selected day's letter (falls back to the first day if nothing matches)
    const sdLetter = dayKeys[Math.max(dayIndexOf(selectedDay), 0)];
    const sdDataObj = azData.find(x => x.label === sdLetter);

    const switchHandler = (e: MouseEvent<HTMLElement>) => {
        if ((e.target instanceof Element)) {
            const start = e.target.closest('button')?.dataset?.start;
            if (!start || !start.length) return;
            const newSelectedDay = new Date(start);
            // scroll up to letter on smaller screens
            if (window.innerWidth <= 700) {
                document?.querySelector('#current-letter')?.scrollIntoView();
            }
            setSelectedDay(newSelectedDay);
        }
    }

    return (
        <main data-page="az" className="relative az-block grid grid-cols-[1fr] sm:grid-cols-[repeat(4,minmax(0,1fr))] auto-rows-[minmax(200px,auto)] w-[95%] max-w-[var(--max-page-width)] mx-auto px-0 pb-48 sm:pb-32 gap-4">

            <BentoBoxCompartment startCol={1} endCol={3} startRow={1} endRow={3}>
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:text-left">
                    <AzLogo width="calc(90% - 320px)" minWidth="220px" color="#fff" />
                    <h1 style={{ fontSize: 40 }} className={"az-accent max-w-xs font-semibold leading-10 tracking-tight"}>
                        Stream Gauntlet
                    </h1>

                    <div className="flex flex-col flex-nowrap">
                        <p className=" text-[18px] leading-7 my-0 mt-4 md:block">
                            Each day, I'll play a game whose title starts with the next letter of the alphabet. Experience the gauntlet with&nbsp;me!
                        </p>
                    </div>
                    <div className="ml-0 w-full">
                        <WatchOnTwitch />
                    </div>

                    <div className={'az-progress-bar flex flex-col w-full'}>
                        <div className="flex justify-between w-full">
                            <span className="uppercase font-semibold tracking-wide text-sm">
                                {daysPassed ? `Day ${today < offDay ? daysPassed : daysPassed - 1}` : 'Starting Oct 23'}
                            </span>
                            <span className="uppercase font-semibold tracking-wide text-sm">
                                26 Letters
                            </span>
                        </div>
                        <div style={{ background: 'rgba(255, 255, 255, 0.4)' }} className="h-[5px] w-full rounded-[8px] mt-2">
                            <div className="w-0 bg-[var(--az-accent)] h-[5px] rounded-[8px]" style={{ width: `${(daysPassed / 26) * 100}%` }} ></div>
                        </div>
                    </div>
                </div>
            </BentoBoxCompartment>

            <BentoBoxCompartment startCol={3} endCol={5} startRow={1} endRow={twitchLive ? 4 : 1}>
                <div className="flex flex-row flex-wrap justify-start items-center w-full gap-6 text-center sm:text-left">

                    <DetailCard 
                        letter={sdLetter}
                        games={sdDataObj?.games || []}
                        start={sdDataObj?.start}
                        day={selectedDay}
                        today={today}
                    />

                    <TwitchPlayer reportLive={(status) => { setTwitchLive(status); }} />
                </div>
            </BentoBoxCompartment>

            <BentoBoxCompartment startCol={twitchLive ? 1 : 3} endCol={twitchLive ? 3 : 5} startRow={twitchLive ? 3 : 2} endRow={twitchLive ? 5 : 4}
                // style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', borderRadius: 0, padding: '10px 0px' }}
                classes="upcoming-letters"
            >
                <div id="all-letters" className={'flex flex-row flex-wrap justify-start all-letters'}>
                    <LetterBoxes
                        data={azData}
                        sdLetter={sdLetter}
                        todayLetter={todayLetter}
                        switchHandler={switchHandler}
                    />
                </div>
            </BentoBoxCompartment>

        </main>
    );
}