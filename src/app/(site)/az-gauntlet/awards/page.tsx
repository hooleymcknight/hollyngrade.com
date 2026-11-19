import { getServerSession } from "next-auth";
import type { RowDataPacket } from "mysql2";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import AzAwards from "./azAwards";

type Vote = { award: string; votee: string };
type VoteRow = RowDataPacket & { award: string; game: string };

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

    return <AzAwards initialVotes={initialVotes} signedIn={!!session} userName={session?.user?.name ?? null} />;
}