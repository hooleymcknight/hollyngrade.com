'use client';
import { useState } from "react";
import { useSession } from "@/app/SessionProvider";

import Main from "../components/mainWrapper";

import AccountInfo from "./components/accountInfo";
// import EditEvents from "./components/editEvents";
// import Messages from "./components/messages";

import '../globals.css';
import './account.css';
import Link from "next/link";

// const userTabs = ['Account'];
// const adminTabs = ['Account', 'Events', 'Messages'];
const adminTabs = ['Edit DBs', 'Account'];
let activeTabClasses = 'border-4 border-[#a20000]';

export default function Account() {
    const [activeTab, setActiveTab] = useState(adminTabs[0]);

    const sessionData = useSession().sessionData;
    const displayName = sessionData?.user?.username;

    // let acctTabs = sessionData?.user?.type === 'admin' ? adminTabs : userTabs;
    let acctTabs = adminTabs;

    return (
        <>
        {
            sessionData?.user
            ?
            <Main mainClasses="account" divClasses={[]} contentId="account" children={
                <>
                    <h1>{sessionData?.user?.type === 'admin' ? 'Admin' : 'User'} Account Page</h1>
                    <div className="">
                        {displayName}
                    </div>

                    <div className="account-page-content">
                        <div className="account-sidebar">
                            {
                                acctTabs.map(x => 
                                    <button key={x} onClick={() => {setActiveTab(x)}} className={`acct-tab text-white ${activeTab === x ? `active-tab ${activeTabClasses}` : ''}`}>{x}</button>
                                )
                            }
                        </div>

                        <div className="acct-info-group main-content-section">
                            {
                                activeTab === 'Account' ? <AccountInfo session={sessionData} /> : ''
                            }
                            {
                                activeTab === 'Edit DBs' ? 
                                    <>
                                        <Link className="inline-block border-[2px] mx-3 py-2 px-8 hover:underline font-bold bg-[#4e4e4e4d] underline-offset-[3px]" href="/account/db/dogs">Dogs</Link>
                                        <Link className="inline-block border-[2px] mx-3 py-2 px-8 hover:underline font-bold bg-[#4e4e4e4d] underline-offset-[3px]" href="/account/db/garden">Garden</Link>
                                    </>
                                : ''
                            }
                            {/* {
                                activeTab === 'Events' ? <EditEvents session={sessionData} /> : ''
                            }
                            {
                                activeTab === 'Messages' ? <Messages session={sessionData} /> : ''
                            } */}
                        </div>
                    </div>
                </>
            } />
            :
            
            <Main children={[
                <>
                    <p>You are not logged in.</p>
                    <Link href="/api/auth/signin?callbackUrl=/account">Sign in.</Link>
                </>
            ]} />
        }
        </>
    );
}
