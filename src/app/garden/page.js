'use client'
import Main from "@/app/components/mainWrapper";
import GardenJournalFeed from "./components/GardenJournalFeed";
import BackButton from '@/app/components/backButton';

export default function Garden() {

    return (
        <Main>
            <>
                <BackButton target="/account" />
                
                <GardenJournalFeed />
                
            </>
        </Main>
    );
}