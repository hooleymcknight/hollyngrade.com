import { chatList, cleanName, say } from "@/lib/chatList";

export const dynamic = "force-dynamic"; // never cache this route

const subRaidMsg = 'hollyngDish hollyngDish Incoming raid transmission from: HOLLYN hollyngDish hollyngDish';
const folRaidMsg = 'twitchRaid twitchRaid Incoming raid transmission from: HOLLYN twitchRaid twitchRaid';

export async function GET(req: Request) {
    const p = new URL(req.url).searchParams;
    if (p.get("key") !== process.env.QUEUE_KEY) return say("Not allowed.");

    const action = p.get("action");

    if (action === "subRaid") {
        setTimeout(() => {
            return say(folRaidMsg);
        }, 1000);
        return say(subRaidMsg);
    }
}
