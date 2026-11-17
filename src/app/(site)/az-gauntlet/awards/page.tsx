'use client';
import { MouseEvent, useState } from "react";
import Image from "next/image";
import BentoBoxCompartment from "@/app/(site)/components/bentoBoxCompartment";
import awards from '@/data/az/az_awards_2026.json';

import '@/app/(site)/styles/az.css';

type Vote = {
    award: string;
    votee: string;
}

export default function AzAwards() {
    const [votingCategory, setVotingCategory] = useState<string|null>(null);
    const [prevSubmittedVote, setPrevSubmittedVote] = useState<string|null>(null);
    const [selectedVote, setSelectedVote] = useState<string|null>(null);
    const [votesSubmitted, setVotesSubmitted] = useState<Vote[]>([]);

    const submitVote = (award: string) => {
        if (selectedVote) {
            if (votesSubmitted.find(x => x.award === award)) {
                setVotesSubmitted(prev => [...prev.filter(x => x.award !== award), {award: award, votee: selectedVote}]);
            }
            setVotesSubmitted(prev => [...prev, { award: award, votee: selectedVote}]);
        }
        setSelectedVote(null);
        setVotingCategory(null);
    }

    const selectGame = (award: string, game: string, prevSel?: string) => {
        if (prevSel) setPrevSubmittedVote(prevSel);
        setSelectedVote(game);
    }

    return (
        <main data-page="az" className="relative az-block grid grid-cols-[1fr] sm:grid-cols-[repeat(4,minmax(0,1fr))] auto-rows-[minmax(200px,auto)] w-[95%] max-w-[var(--max-page-width)] mx-auto px-0 pb-48 sm:pb-32 gap-4">

            <BentoBoxCompartment startCol={1} endCol={5} startRow={1} endRow={4}>
                <h2>A-Z Awards</h2>

                <p className="mb-8">
                    Total Awards: {awards.length}
                </p>
                voting category: {votingCategory}
                
                <div className="awards-box grid grid-cols-[1fr] sm:grid-cols-[repeat(4,minmax(0,1fr))] auto-rows-[minmax(200px,auto)] gap-4">
                    {awards.map(x => 
                        <button key={x.award}
                            aria-roledescription="click to open voting modal"
                            onClick={() => {setVotingCategory(x.award);}}
                            className="award-tile text-center flex flex-col w-full items-center justify-center rounded-[8px] p-2"
                        >
                            <span className="award-name">{x.award}</span>
                            <span className="award-desc">{x.description}</span>
                        </button>
                    )}
                </div>

            </BentoBoxCompartment>

            {votingCategory ? 
                // {
                //     let thisAward = awards.filter(x => x.award === votingCategory);
                //     return 
                // }

                <div className="voting-modal fixed top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="overlay absolute w-full h-full" onClick={() => { submitVote(votingCategory); }}></div>
                    <div className="voting-modal-inner w-[95%] max-w-[800px] p-[40px] mt-[100px] overflow-hidden">
                        <span className="voting-eyebrow mb-2">Voting for:</span>
                        <span className="voting-modal-title">{votingCategory}</span>
                        <p className="description text-xl mt-2 mb-6">{awards.find(x => x.award === votingCategory)?.description}</p>

                        <input id={votingCategory} className="hidden" type="text" value='no' onChange={() => {}} />
                        <div className="voting-tiles flex flex-wrap gap-4 mb-8" data-award={votingCategory}>
                            {awards.find(x => x.award === votingCategory)?.games.map(game =>
                                <button key={game}
                                    className={
                                        (selectedVote === game || (votesSubmitted.find(x => x.award === votingCategory && x.votee === game)) ? 'selected ' : '')
                                        + (prevSubmittedVote === game ? 'previous ' : '')
                                        + "px-[20px] py-[8px] border-solid border-[1px] rounded-[8px] text-lg bg-[var(--glass)]"}
                                    onClick={() => { selectGame(votingCategory, game, votesSubmitted.find(x => x.award === votingCategory && x.votee === game)?.votee); }}
                                    data-game={game}
                                >
                                    {game}
                                </button>
                            )}
                        </div>

                        <button className="submit-vote" onClick={() => { submitVote(votingCategory); }}>Submit</button>
                        <p className="block mx-auto text-center mt-6">&nbsp;
                            Selected: <b>{selectedVote || votesSubmitted.find(x => x.award === votingCategory)?.votee}</b>
                        &nbsp;</p>
                    </div>
                </div>
                    
            : null }

        </main>
    );
}