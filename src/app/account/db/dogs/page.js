'use client';
import { useState } from "react";
import { useSession } from "@/app/SessionProvider";
import Main from "@/app/components/mainWrapper";

import Link from "next/link";
import Database from "../components/dbDisplay";
import BackButton from "@/app/components/backButton";


export default function DogsDB() {
    const sessionData = useSession().sessionData;


    return (
        <>
        {
            sessionData?.user
            ?
            <Main classes="" id="dogs-db">
                <>
                    <BackButton target="/account" />
                    <h1>Dogs Database</h1>

                    <Database db="dogs" filters={['alt', 'title', 'description', 'data_tags']}
                        selects={['src', 'alt', 'title', 'description', 'data_tags', 'active']}
                        whereNulls={['alt', 'title', 'description', 'data_tags']}
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
