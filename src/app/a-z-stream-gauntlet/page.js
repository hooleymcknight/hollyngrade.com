'use client'

import Image from "next/image";
import areYouLive from '../api/twitch';
import TwitchEmbed from '../components/TwitchEmbed/twitchEmbed';
import DonationButtons from "../components/TwitchEmbed/donationButtons";
import Link from "next/link";
import Main from '../components/mainWrapper';

import AzLogo from "./components/a-z";
import GameListing from "./components/gameListing";
import DetailCard from "./components/detailCard";
import styles from "./az.module.css";
import data from './az_data.json';
import { useEffect, useState } from "react";

const today = new Date('10/24/2026');

const startDay = new Date('10/23/2026');
const offDay = new Date('10/30/2026');
const endDay = new Date('11/18/2026');

// .toLocaleDateString('en-US', {timezone: 'America/Los_Angeles', 'month': 'numeric', 'day': '2-digit' });

export default function AzGauntlet() {
    const [selectedDay, setSelectedDay] = useState(today);
    
    const daysUntilBreak = Math.round((offDay - today) / 1000 / 60 / 60 / 24);
    const daysPassed = today < offDay ? Math.round((today - startDay) / 1000 / 60 / 60 / 24) + 1
        : 26 - (Math.round((endDay - today) / 1000 / 60 / 60 / 24));

    const todayDataObj = data[Object.keys(data)[daysPassed - 1]];
    const todayLetter = Object.keys(data)[Object.values(data).indexOf(todayDataObj)];

    let sdDaysPassed = selectedDay < offDay ? Math.round((selectedDay - startDay) / 1000 / 60 / 60 / 24) + 1
            : 26 - (Math.round((endDay - selectedDay) / 1000 / 60 / 60 / 24));
    let sdDataObj = data[Object.keys(data)[sdDaysPassed - 1]];
    console.log('first:', sdDataObj)
    let sdLetter;

    const switchHandler = (e) => {
        console.log('e', e.target.querySelector('.block-date'))
        let newSelectedDay = new Date(`${e.target.dataset.value}, 2026`);
        console.log(newSelectedDay);
        setSelectedDay(newSelectedDay);
    }

    useEffect(() => {
        // sd = selected day
        sdDaysPassed = selectedDay < offDay ? Math.round((selectedDay - startDay) / 1000 / 60 / 60 / 24) + 1
            : 26 - (Math.round((endDay - selectedDay) / 1000 / 60 / 60 / 24));
        sdDataObj = data[Object.keys(data)[sdDaysPassed - 1]];
        console.log(sdDataObj)
        sdLetter = Object.keys(data)[Object.values(data).indexOf(sdDataObj)];
    }, [selectedDay]);

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
                <div className="flex flex-row flex-wrap justify-start items-center gap-6 text-center sm:text-left">

                    <div className={' flex gap-10'}>
                        <div className={styles.azAccent + " text-[200px]"} style={{ fontFamily: 'Saira Stencil One', lineHeight: 1, fontWeight: 'normal' }}>
                            {Object.keys(data)[daysPassed - 1]}
                        </div>
                        
                        <div className={' flex flex-col flex-start'}>
                            <p className="mb-4">
                                <span className={styles.azToday + ' uppercase font-bold tracking-[2px] text-sm mr-4'}>Today</span>
                                <span className="uppercase font-semibold tracking-[2px] text-sm">{ today.toLocaleDateString('en-US', {timezone: 'America/Los_Angeles', 'weekday': 'short', 'month': 'short', 'day': 'numeric' }) }</span>
                            </p>
                            { todayDataObj.games.map((game) => 
                                <span key={game} className={styles.azTodaysGame}>{game}</span>
                            ) }
                        </div>
                    </div>

                    {/* <p>today: {selectedDay.toLocaleDateString('en-US')}</p> */}
                    <DetailCard 
                        styles={styles}
                        letter={Object.keys(data)[sdDaysPassed - 1]}
                        games={sdDataObj?.games || []}
                        day={selectedDay}
                    />

                    <TwitchEmbed live={false} />
                </div>
            </Main>

            <Main id="upcoming-letters" classes={styles.azBlock + ' mb-8'} style={{ marginBottom: 8 }}>
                <div id="all-letters" className={'flex flex-row flex-wrap justify-start'}>
                    { Object.keys(data).map((letter) => 
                        <button key={letter} onClick={(e) => {switchHandler(e)}} data-value={data[letter].date} className={
                            styles.letterBox + ' ' +
                            (todayLetter === letter ? styles.highlighted : 
                                Object.keys(data).indexOf(todayLetter) > Object.keys(data).indexOf(letter) ? styles.passed : styles.future)
                        }>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6EDE6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12.5l4.5 4.5L19 7.5"/>
                            </svg>

                            <span className={styles.letter}>{letter}</span>
                            <span className={'block-date uppercase font-semibold tracking-wide text-xs mt-1'}>
                                { data[letter].date }
                            </span>
                        </button>
                    ) }
                </div>
            </Main>
        </>
    );
}