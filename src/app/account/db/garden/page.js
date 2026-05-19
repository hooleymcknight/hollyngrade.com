'use client';
import { useState } from "react";
import { useSession } from "@/app/SessionProvider";
import Main from "@/app/components/mainWrapper";

import Link from "next/link";
import Database from "../components/dbDisplay";
import BackButton from "@/app/components/backButton";

const gardenFields = ['date', 'location', 'plants', 'entry', 'photos'];

export default function GardenDB() {
    const sessionData = useSession().sessionData;


    return (
        <>
        {
            sessionData?.user
            ?
            <Main classes="" id="garden-db" styles={{ maxWidth: 'unset' }}>
                <>
                    <BackButton target="/account" />
                    <h1>Garden Database</h1>

                    {/* date, location, plants, entry, photos */}
                    <Database db="garden" filters={gardenFields}
                        selects={gardenFields}
                        whereNulls={[]}
                    />
                    
                </>
            </Main>
            :
            
            <Main>
                <>
                    <p>Unauthorized user.</p>
                </>
            </Main>
        }
        </>
    );
}
