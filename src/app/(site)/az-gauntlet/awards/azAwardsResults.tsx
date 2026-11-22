'use client';
import { useMemo } from "react";
import awards from '@/data/az/az_awards_2026.json';
import '@/app/(site)/styles/az.css';

type Vote = {
    twitchId?: string;
    award: string;
    votee: string;
}

type AzAwardsResultsProps = {
    allVotes: Vote[];
    signedIn?: boolean;
    userName?: string | null;
}

const voteDeadlineStr: string = '2026-11-23T23:59:00-08:00';
const hollynTwitchId = '1386739188';

function mode<T>(arr: T[]): T[] {
    const counts: Map<T, number> = new Map();
    let maxCount: number = 0;

    for (const el of arr) {
        const count: number = (counts.get(el) ?? 0) + 1;
        counts.set(el, count);
        if (count > maxCount) maxCount = count;
    }

    const modes: T[] = [];
    for (const [el, count] of counts) {
        if (count === maxCount) modes.push(el);
    }
    return modes;
}

const getHollynsPicks = (allVotes: Vote[]) => {
    const winners: Array<{award: string, winner: string[]}> = [];
    const hollynVotes = allVotes.filter(x => x.twitchId === hollynTwitchId);
    for (const award of hollynVotes.map(x => x.award)) {
        !winners.find(win => win.award === award) ? winners.push({
            award: award,
            winner: mode(hollynVotes.filter(y => y.award === award).map(z => z.votee))
        }) : null;
    }
    return winners;
}

const getChatsWinners = (allVotes: Vote[]) => {
    const winners: Array<{award: string, winner: string[]}> = [];
    const chatVotes = allVotes.filter(x => x.twitchId !== hollynTwitchId);
    for (const award of chatVotes.map(x => x.award)) {
        !winners.find(win => win.award === award) ? winners.push({
            award: award,
            winner: mode(chatVotes.filter(y => y.award === award).map(z => z.votee))
        }) : null;
    }
    return winners;
}

export default function AzAwardsResults({ allVotes }: AzAwardsResultsProps) {
    const chatWinnersByAward = useMemo(() => getChatsWinners(allVotes), [allVotes]);
    const hollynsPicksByAward = useMemo(() => getHollynsPicks(allVotes), [allVotes]);

    return (
        <>
            <div className="awards-box grid grid-cols-2 sm:grid-cols-4 auto-rows-[minmax(150px,auto)] sm:auto-rows-[minmax(200px,auto)] gap-4 mt-8">
                { awards.map(x => 
                    <div key={x.award}
                        className={
                            "award-tile text-center flex flex-col w-full items-center justify-between rounded-[8px] py-4 px-3 sm:py-8 sm:px-6"
                        }
                    >
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6EDE6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12.5l4.5 4.5L19 7.5"/>
                        </svg>
                        
                        <div className="flex flex-col mt-2">
                            <span className="award-name">{x.award}</span>
                            <span className="award-desc text-balance">{x.description}</span>
                        </div>

                        <div className="results flex flex-col w-full mt-10">
                            <div className="flex flex-row items-center justify-between w-full gap-2">
                                <span className="text-left grow">Hollyn's&nbsp;Pick:</span>
                                <span className="needs-vote text-right text-balance shrink">
                                    {hollynsPicksByAward.find(y => y.award === x.award)?.winner[0]}&nbsp;
                                </span>
                            </div>

                            <hr />

                            <div className="flex flex-row items-center justify-between w-full gap-2">
                                <span className="text-left">Chat's&nbsp;Choice:</span>
                                <span className="needs-vote text-right text-balance flex flex-col gap-1">
                                    { 
                                        chatWinnersByAward.find(y => y.award === x.award)?.winner.map(z =>
                                            <span key={z}>{z}</span>
                                        )
                                            ||
                                        <i style={{ opacity: 0.7, color: 'var(--cream-color)', }}>(no winner)</i>
                                    }
                                </span>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}