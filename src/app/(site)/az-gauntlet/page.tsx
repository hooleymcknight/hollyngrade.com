import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import AzGauntlet from "./azGauntlet";

const azTitle = "A-Z Stream Gauntlet | hollyngrade";
const azDesc = "Each day, I'll play a game whose title starts with the next letter of the alphabet. Join the gauntlet on Twitch!";
const azAlt = "A-Z Stream Gauntlet: a game for every letter, Oct 23 through Nov 18, on twitch.tv/hollyngrade";

// Discord/social embed: /az-gauntlet?letter=q uses /meta/az-discord-embed_q.png when that image exists.
export async function generateMetadata({ searchParams }: PageProps<"/az-gauntlet">): Promise<Metadata> {
    const { letter } = await searchParams;
    let img = "/meta/az-discord-embed.png";

    const l = typeof letter === "string" ? letter.toLowerCase() : "";
    if (/^[a-z]$/.test(l)) {
        const letterImg = `/meta/az-discord-embed_${l}.png`;
        if (fs.existsSync(path.join(process.cwd(), "public", letterImg))) img = letterImg;
    }

    return {
        title: azTitle,
        description: azDesc,
        openGraph: {
            title: azTitle,
            description: azDesc,
            url: "/az-gauntlet",
            images: [{ url: img, width: 1200, height: 630, alt: azAlt }],
        },
    };
}

export default function Page() {
    return <AzGauntlet />;
}
