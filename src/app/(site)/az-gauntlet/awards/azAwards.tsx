'use client';
import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import BentoBoxCompartment from "@/app/(site)/components/bentoBoxCompartment";
import awards from '@/data/az/az_awards_2026.json';
import { castVote } from "./actions";

import '@/app/(site)/styles/az.css';

type Vote = {
    award: string;
    votee: string;
}

type AwardData = {
    award: string;
    description: string;
    games: string[];
    winner: string;
    chats_choice: string;
}

type AzAwardsProps = {
    initialVotes: Vote[];
    signedIn: boolean;
    userName: string | null;
}

const awardsUrl: string = "/az-gauntlet/awards";
const voteDeadlineStr: string = '2026-11-23T23:59:00-08:00';

export default function AzAwards({ initialVotes, signedIn, userName }: AzAwardsProps) {
    const [votingCategory, setVotingCategory] = useState<string|null>(null);
    const [selectedVote, setSelectedVote] = useState<string|null>(null);
    const [votesSubmitted, setVotesSubmitted] = useState<Vote[]>(initialVotes);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [voteDeadline, setVoteDeadline] = useState<string>('');

    const submitVote = async (award: string): Promise<void> => {
        const choice: string|null = selectedVote;
        const before: Vote|undefined = votesSubmitted.find(x => x.award === award);

        setSelectedVote(null);
        setVotingCategory(null);
        document.documentElement.classList.remove('no-scroll');
        if (!choice) return;

        // show the new vote right away, then confirm with the server
        setVotesSubmitted(prev => [...prev.filter(x => x.award !== award), { award: award, votee: choice }]);

        const result = await castVote(award, choice);
        if (result.ok) {
            setErrorMessage(null);
        } else {
            // put the old vote back for this award
            setVotesSubmitted(prev => [...prev.filter(x => x.award !== award), ...(before ? [before] : [])]);
            setErrorMessage(result.error ?? "Couldn't save that vote. Try again.");
        }
    }

    const openAward = (award: string) => {
        if (!signedIn) {
            signIn("twitch", { callbackUrl: awardsUrl });
            return;
        }
        document.documentElement.classList.add('no-scroll');
        setVotingCategory(award);
    }

    const savedVote: string|undefined = votingCategory
        ? votesSubmitted.find(x => x.award === votingCategory)?.votee
        : undefined;

    const currentAward: AwardData|undefined = votingCategory
        ? awards.find(x => x.award === votingCategory)
        : undefined;

    useEffect(() => {
        setVoteDeadline((new Date(voteDeadlineStr)).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short'}));
    });

    return (
        <main data-page="az" className="relative az-block grid grid-cols-[1fr] sm:grid-cols-[repeat(4,minmax(0,1fr))] auto-rows-[minmax(200px,auto)] w-[95%] max-w-[var(--max-page-width)] mx-auto px-0 pb-48 sm:pb-32 gap-4">

            <BentoBoxCompartment startCol={1} endCol={5} startRow={1} endRow={4}>
                <h2>A-Z Awards</h2>

                <div className="flex flex-col sm:flex-row w-full justify-center items-center sm:justify-between mt-3 gap-1">
                    <p className="flex items-start flex-col" style={{ fontSize: '18px' }}>
                        Awards you have voted for: {votesSubmitted.length} of {awards.length}
                        <span className="mt-2 uppercase font-bold tracking-[2px] text-sm" style={{ color: 'var(--dark-cream)' }}>
                            Voting ends on {voteDeadline}
                        </span>
                    </p>

                    {signedIn ? (
                        <p className="mb-2 sm:mb-0">
                            Signed in as <b>{userName}</b> ·{" "}
                            <button className="underline" onClick={() => { signOut({ callbackUrl: awardsUrl }); }}>Sign out</button>
                        </p>
                    ) : (
                        <button className="twitch-btn twitch-signin mb-4 sm:mb-0" onClick={() => { signIn("twitch", { callbackUrl: awardsUrl }); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2" width="22" height="22" viewBox="0 0 640 640">
                                {/* Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
                                <path d="M455.4 167.5L416.8 167.5L416.8 277.2L455.4 277.2L455.4 167.5zM349.2 167L310.6 167L310.6 276.8L349.2 276.8L349.2 167zM185 64L88.5 155.4L88.5 484.6L204.3 484.6L204.3 576L300.8 484.6L378.1 484.6L551.9 320L551.9 64L185 64zM513.3 301.8L436.1 374.9L358.9 374.9L291.3 438.9L291.3 374.9L204.4 374.9L204.4 100.6L513.3 100.6L513.3 301.8z"/>
                            </svg>
                            Sign in with Twitch to vote
                        </button>
                    )}
                </div>
                
                {errorMessage ? <p role="alert" className="mb-4">{errorMessage}</p> : null}

                <div className="awards-box grid grid-cols-2 sm:grid-cols-4 auto-rows-[minmax(150px,auto)] sm:auto-rows-[minmax(200px,auto)] gap-4 mt-8">
                    {awards.map(x => 
                        <button key={x.award}
                            aria-roledescription="click to open voting modal"
                            onClick={() => { openAward(x.award); }}
                            className={ (votesSubmitted.find(y => y.award === x.award) ? 'voted ' : '')
                                + "award-tile text-center flex flex-col w-full items-center justify-between rounded-[8px] py-4 px-3 sm:py-8 sm:px-6"
                            }
                        >
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6EDE6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12.5l4.5 4.5L19 7.5"/>
                            </svg>
                            
                            <div className="flex flex-col mt-2">
                                <span className="award-name">{x.award}</span>
                                <span className="award-desc text-balance">{x.description}</span>
                            </div>

                            {votesSubmitted.find(y => y.award === x.award) ?
                                <span className="mt-4">{votesSubmitted.find(y => y.award === x.award)?.votee}</span>
                            :
                                <span className="mt-4 needs-vote">Click to vote</span>
                            }

                        </button>
                    )}
                </div>

            </BentoBoxCompartment>

            {votingCategory ? 
                // ================ MODAL ================

                <div className="voting-modal fixed top-0 left-0 w-full h-full flex justify-center items-center z-[100]">
                    <div className="overlay absolute w-full h-full" onClick={() => { submitVote(votingCategory); }}></div>
                    <div className="voting-modal-inner w-[95%] max-w-[800px] p-5 sm:p-[40px] sm:mt-[100px] overflow-hidden flex flex-col">
                        <div className="shrink-0">
                            <span className="voting-eyebrow mb-2">Voting for:</span>
                            <span className="voting-modal-title">{votingCategory}</span>
                            <p className="description text-lg sm:text-xl mt-2 mb-2">{currentAward?.description}</p>
                            {currentAward && currentAward.games.length > 10 ?
                                <p className="mb-4 italic text-sm">({currentAward.games.length} games, scroll to see them all)</p>
                            : null}
                        </div>

                        <div className="voting-tiles grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 min-h-0 flex-1" data-award={votingCategory}>
                            {currentAward?.games.map(game =>
                                <button key={game}
                                    className={
                                        (selectedVote === game || (savedVote === game && !selectedVote) ? 'selected ' : '')
                                        + (savedVote === game && selectedVote && selectedVote !== game ? 'previous ' : '')
                                        + "px-3 sm:px-[20px] py-[8px] border-solid border-[1px] rounded-[8px] text-base sm:text-lg text-center bg-[var(--glass)]"}
                                    onClick={() => { setSelectedVote(game); }}
                                    data-game={game}
                                >
                                    {game}
                                </button>
                            )}
                        </div>

                        <div className="shrink-0 pt-4">
                            <button className="submit-vote" onClick={() => { submitVote(votingCategory); }}>Submit</button>
                            <p className="block mx-auto text-center mt-3">
                                Selected: <b>{selectedVote || savedVote}</b>
                            </p>
                        </div>
                    </div>
                </div>
                    
            : null }

        </main>
    );
}