'use client'

import Image from "next/image";
import TwitchEmbed from '../components/TwitchEmbed/twitchEmbed';
import DonationButtons from "../components/TwitchEmbed/donationButtons";
import Link from "next/link";
import Main from '../components/mainWrapper';

import AzLogo from "./components/a-z";
import DetailCard from "./components/detailCard";
import LetterBoxes from "./components/letterBoxes";
import styles from "./az.module.css";
import data from './az_data.json';
import { useEffect, useState } from "react";

const today = new Date();

const startDay = new Date('10/23/2026');
const offDay = new Date('10/30/2026');
const endDay = new Date('11/18/2026');

// .toLocaleDateString('en-US', {timezone: 'America/Los_Angeles', 'month': 'numeric', 'day': '2-digit' });

export default function AzGauntlet() {
    const [selectedDay, setSelectedDay] = useState(today);
    
    const daysUntilBreak = Math.round((offDay - today) / 1000 / 60 / 60 / 24);
    const daysPassed = today < startDay ? 0 : today < offDay ? Math.round((today - startDay) / 1000 / 60 / 60 / 24) + 1
        : 26 - (Math.round((endDay - today) / 1000 / 60 / 60 / 24));

    const todayDataObj = data[Object.keys(data)[daysPassed - 1]];
    const todayLetter = Object.keys(data)[Object.values(data).indexOf(todayDataObj)];

    // if earlier than start, select day 1.
    let sdDaysPassed = selectedDay < startDay ? 1 : selectedDay < offDay ? Math.round((selectedDay - startDay) / 1000 / 60 / 60 / 24) + 1
            : 26 - (Math.round((endDay - selectedDay) / 1000 / 60 / 60 / 24));
    let sdDataObj = data[Object.keys(data)[sdDaysPassed - 1]];
    let sdLetter = Object.keys(data)[Object.values(data).indexOf(sdDataObj)];

    const switchHandler = (e) => {
        let newSelectedDay = new Date(`${e.target.closest('button').dataset.value}, 2026`);
        // scroll up to letter on smaller screens
        if (window.innerWidth <= 700) {
            document.querySelector('#current-letter').scrollIntoView();
        }
        setSelectedDay(newSelectedDay);
    }

    useEffect(() => { // sd = selected day
        sdDaysPassed = selectedDay < startDay ? 1 : selectedDay < offDay ? Math.round((selectedDay - startDay) / 1000 / 60 / 60 / 24) + 1
            : 26 - (Math.round((endDay - selectedDay) / 1000 / 60 / 60 / 24));
        sdDataObj = data[Object.keys(data)[sdDaysPassed - 1]];
        sdLetter = Object.keys(data)[Object.values(data).indexOf(sdDataObj)];

        console.log(selectedDay)
    }, [selectedDay]);

    return (
        <>
            <Main classes={styles.azBlock + ' flex-row flex-wrap justify-start gap-4 items-end'} id="heading">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:text-left">
                    <AzLogo width="calc(90% - 320px)" minWidth="220px" color="#fff" />
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
                            <span className="uppercase font-semibold tracking-wide text-sm">
                                {daysPassed ? `Day ${daysPassed}` : 'Starting Oct 23'}
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
            </Main>

            <Main classes={styles.azBlock + ' flex-row flex-wrap justify-start gap-4 items-end ' + styles.currentLetter} id="current-letter">
                <div className="flex flex-row flex-wrap justify-start items-center w-full gap-6 text-center sm:text-left">

                    <DetailCard 
                        styles={styles}
                        letter={Object.keys(data)[sdDaysPassed - 1]}
                        games={sdDataObj?.games || []}
                        day={selectedDay}
                        today={today}
                    />

                    <TwitchEmbed live={false} />
                </div>
            </Main>

            <Main id="upcoming-letters" classes={styles.azBlock + ' ' + styles.upcomingLetters + ' mb-8'} style={{ marginBottom: 8 }}>
                <div id="all-letters" className={'flex flex-row flex-wrap justify-start ' + styles.allLetters}>
                    <LetterBoxes
                        data={data}
                        styles={styles}
                        sdLetter={sdLetter}
                        todayLetter={todayLetter}
                        switchHandler={switchHandler}
                    />
                </div>
            </Main>
        </>
    );
}