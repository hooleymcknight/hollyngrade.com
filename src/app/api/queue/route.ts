import { chatList, cleanName, say } from "@/lib/chatList";

export const dynamic = "force-dynamic"; // never cache this route

const store = chatList("queue");

export async function GET(req: Request) {
    const p = new URL(req.url).searchParams;
    if (p.get("key") !== process.env.QUEUE_KEY) return say("Not allowed.");

    const action = p.get("action");
    const user = cleanName(p.get("user"));
    const q = await store.load();
    const i = q.indexOf(user);

    switch (action) {
        case "join":
            if (!user) return say("Missing name.");
            if (i !== -1) return say(`@${user} you're already in the queue.`);
            q.push(user);
            await store.save(q);
            return say(`@${user} you're in! ${q.length === 1 ? "You're first." : `${q.length - 1} ahead of you.`}`);

        case "leave":
            if (i === -1) return say(`@${user} you're not in the queue.`);
            q.splice(i, 1);
            await store.save(q);
            return say(`@${user} you've left the queue.`);

        case "position":
            if (i === -1) return say(`@${user} you're not in the queue.`);
            return say(i === 0 ? `@${user} you're next up!` : `@${user} ${i} ahead of you.`);

        case "list": {
            if (!q.length) return say("The queue is empty.");
            const shown = q.slice(0, 15).map((n, k) => `${k + 1}. ${n}`).join(" | ");
            return say(q.length > 15 ? `${shown} (+${q.length - 15} more)` : shown);
        }

        case "next": {
            const who = q.shift();
            if (!who) return say("The queue is empty.");
            await store.save(q);
            return say(`Up next: @${who}`);
        }

        case "remove":
            if (i === -1) return say(`${user || "That person"} isn't in the queue.`);
            q.splice(i, 1);
            await store.save(q);
            return say(`Removed ${user}.`);

        case "clear":
            await store.save([]);
            return say("Queue cleared.");

        default:
            return say("Unknown action.");
    }
}
