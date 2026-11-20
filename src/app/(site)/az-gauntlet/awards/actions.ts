'use server';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import awards from "@/data/az/az_awards_2026.json";
import { db } from "@/lib/db";

type CastVoteResult = { ok: boolean; error?: string };

export async function castVote(award: string, game: string): Promise<CastVoteResult> {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return { ok: false, error: "Not signed in" };

    const loadTime = new Date();
    const deadlineDate = new Date('2026-11-23T23:59:00-08:00');
    if (loadTime.getTime() > deadlineDate.getTime()) return { ok: false, error: "Deadline passed" };

    const found = awards.find(x => x.award === award);
    if (!found || !found.games.includes(game)) return { ok: false, error: "Invalid vote" };

    await db.execute(
        `INSERT INTO az_votes (twitch_id, award, game) VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE game = VALUES(game)`,
        [session.user.id, award, game]
    );
    return { ok: true };
}