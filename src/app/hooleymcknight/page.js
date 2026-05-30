'use client';
import Main from "../components/mainWrapper";

import Link from "next/link";

export default function HooleyMcKnight() {

    return (
        <Main>
            <>
                <h1>HooleyMcKnight.com no longer exists.</h1>
                <p>
                    Did you come here looking for my developer portfolio?
                    <br/><br/>
                    If so, here is my new dev site: <Link href="htts://hollymphillips.com/" alt="Holly M. Phillips dev site">hollymphillips.com</Link>.
                    <br/><br/>
                    <br/><br/>
                    If you were looking for anything relating to my Twitch streaming, or other fun things, you're in the right place.
                    <br/><br/>
                    Check out this site's <Link href="/" alt="hollyngrade.com">main page</Link>.
                </p>
            </>
        </Main>
    );
}
