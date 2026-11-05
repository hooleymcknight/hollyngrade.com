'use client';
import Image from "next/image";
import BentoBoxCompartment from "./components/bentoBoxCompartment";
import React, { useState } from "react";
import TwitchPlayer from "./components/twitch/twitchPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function Home() {
    const [twitchLive, setTwitchLive] = useState<boolean>(false);

    return (
        <main data-page="index" className="grid grid-cols-[repeat(4,minmax(0,1fr))] auto-rows-[minmax(200px,auto)] w-[95%] max-w-[1360px] mx-auto py-32 px-16 gap-4">
            <BentoBoxCompartment startCol={1} endCol={3} startRow={1} endRow={twitchLive ? 1 : 3} vAlign="bottom">
                <span className="bento-eyebrow">Hi, I'm</span>
                <h1>Hollyn.</h1>
                <p className="text-[length:var(--fontHeight)] text-[color:var(--faded-white)] mt-0" style={{ '--fontHeight': '20px' } as React.CSSProperties}>
                    <FontAwesomeIcon icon={faWaveSquare} className="inline-block mr-3 w-auto h-[var(--fontHeight)]" />
                    <i className="flex-inline items-start"><span>hah-lin</span></i>
                    {/* <Image src="/party-parrot.gif" alt="party parrot" width="30" height="30" className="inline w-auto h-[var(--fontHeight)] ml-1" /> */}
                </p>
                <p className="text-[length:var(--fontHeight)] text-[color:var(--faded-white)] font-(family-name:--font-literata) mt-6 max-w-[30ch]" style={{ '--fontHeight': '24px' } as React.CSSProperties}>
                    I build things, grow things, and stream things. This is the hub where everything ends up.
                </p>
            </BentoBoxCompartment>

            <BentoBoxCompartment startCol={3} endCol={5} startRow={1} endRow={1}>
                <span className="bento-eyebrow">Twitch</span>
                <div id="twitch-offline">
                    <h2 className="text-[color:var(--faded-white)] mt-4">Offline right now</h2>
                </div>
                <TwitchPlayer reportLive={(status) => {setTwitchLive(status)}} />
                <Link href="https://twitch.tv/hollyngrade"
                    className={"text-[color:var(--faded-white)] font-[family-name:var(--font-bricolage)] font-bold " +
                        "rounded-4xl border border-[var(--faded-white)] border-1px " + 
                        "py-[12px] px-[18px] w-fit block mt-6 " + 
                        "hover:bg-[var(--faded-white)] hover:text-[color:var(--off-black)]"
                    }
                >
                    Follow hollyngrade
                </Link>
            </BentoBoxCompartment>

            <BentoBoxCompartment startCol={1} endCol={3} startRow={twitchLive ? 2 : 3} endRow={3}>
                <div className="flex justify-between items-center">
                    <h2>A-Z Stream Gauntlet</h2>
                    <p>Oct 23 - Nov 18</p>
                </div>

                <div id="letters-simple" className="flex flex-wrap gap-4">
                    <div className="az-tiles">
                        A
                    </div>
                    <div className="az-tiles">
                        B
                    </div>
                </div>

            </BentoBoxCompartment>
        </main>
    );
}
