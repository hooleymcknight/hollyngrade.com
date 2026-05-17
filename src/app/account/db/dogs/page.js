'use client';
import { useState } from "react";
import { useSession } from "@/app/SessionProvider";
import Main from "@/app/components/mainWrapper";

import Link from "next/link";
import Database from "../components/dbDisplay";


export default function DogsDB() {
    const sessionData = useSession().sessionData;


    return (
        <>
        {
            sessionData?.user
            ?
            <Main mainClasses="account" divClasses={[]} contentId="account" children={
                <>
                    <h1>Dogs Database</h1>

                    <Database db="dogs" filters={['alt', 'title', 'description', 'data_tags']} />
                    
                </>
            } />
            :
            
            <Main children={[
                <>
                    <p>Unauthorized user.</p>
                </>
            ]} />
        }
        </>
    );
}
