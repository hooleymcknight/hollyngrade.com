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
    const [deadlinePassed, setDeadlinePassed] = useState<boolean>(false);

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
        const loadTime = new Date();
        const deadlineDate = new Date(voteDeadlineStr);
        setDeadlinePassed(loadTime.getTime() > deadlineDate.getTime());
        setVoteDeadline((new Date(voteDeadlineStr)).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short'}));
    });

    return (
        <>
            <p className="text-center mt-8 text-2xl">The deadline has passed.<br/>Check back soon for the results.</p>
        </>
    );
}