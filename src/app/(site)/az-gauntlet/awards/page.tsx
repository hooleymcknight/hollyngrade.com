import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import type { RowDataPacket } from "mysql2";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import AzAwards from "./azAwards";

const azTitle = "A-Z Awards | hollyngrade";
const azDesc = "Vote for the A-Z Stream Gauntlet awards. 22 categories, 44 games. Sign in with Twitch and pick the winners.";
const azAlt = "A-Z Awards: 22 awards, you pick the winners. Vote now at hollyngrade.com/az-gauntlet/awards";

type Vote = { twitchId?: string; award: string; votee: string };
type VoteRow = RowDataPacket & { award: string; game: string };

export async function generateMetadata(): Promise<Metadata> {
    const img = "/meta/az-awards-embed.png";

    return {
        title: azTitle,
        description: azDesc,
        openGraph: {
            title: azTitle,
            description: azDesc,
            url: "/az-gauntlet/awards",
            images: [{ url: img, width: 1200, height: 630, alt: azAlt }],
        },
    };
}

export default async function Page() {
    const session = await getServerSession(authOptions);
    let initialVotes: Vote[] = [];

    if (session?.user?.id) {
        const [rows] = await db.execute<VoteRow[]>(
            "SELECT award, game FROM az_votes WHERE twitch_id = ?",
            [session.user.id]
        );
        initialVotes = rows.map((r: VoteRow): Vote => ({ award: r.award, votee: r.game }));
    }

    let allVotes: Vote[] = [];
    const [allRows] = await db.execute<VoteRow[]>("SELECT twitch_id, award, game FROM az_votes");
    allVotes = allRows.map((r: VoteRow): Vote => ({ twitchId: r.twitch_id, award: r.award, votee: r.game }));

    return <AzAwards initialVotes={initialVotes} allVotes={allVotes} signedIn={!!session} userName={session?.user?.name ?? null} />;
}