import { say } from "@/lib/chatList";

export const dynamic = "force-dynamic"; // never cache this route

const subRaidMsg = 'hollyngDish hollyngDish Incoming raid transmission from: HOLLYN hollyngDish hollyngDish';
const folRaidMsg = 'twitchRaid twitchRaid Incoming raid transmission from: HOLLYN twitchRaid twitchRaid';

export async function GET(req: Request) {
    const p = new URL(req.url).searchParams;
    if (p.get("key") !== process.env.QUEUE_KEY) return say("Not allowed.");

    // setTimeout(() => {
    //     return say(folRaidMsg);
    // })
    return [say(subRaidMsg), say(folRaidMsg)];
}
