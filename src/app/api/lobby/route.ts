import { chatList, cleanName, say } from "@/lib/chatList";

export const dynamic = "force-dynamic"; // never cache this route

const minLobbyCt = 4;
const maxLobbyCt = 8;
const lobbyTitle = "Jackbox";

const store = chatList("lobby");

export async function GET(req: Request) {
    const p = new URL(req.url).searchParams;
    if (p.get("key") !== process.env.QUEUE_KEY) return say("Not allowed.");

    const action = p.get("action");
    const user = cleanName(p.get("user"));
    const target = cleanName(p.get("target"));
    const isMod = p.get("mod") === "1";
    if ((action === "remove" || action === "clear") && !isMod) {
        return say("Mods only hollyngSmileybutt");
    }

    const lobby = await store.load();
    const i = lobby.indexOf(user);
    const count = () => `${lobby.length}/${maxLobbyCt}`;

    switch (action) {
        case "join": {
            if (!user) return say("Missing name videovPAlN");
            if (i !== -1) return say(`@${user} you're already in the ${lobbyTitle} lobby. If you need to bail: !lobby leave`);
            if (lobby.length >= maxLobbyCt) {
                return say(`@${user} the ${lobbyTitle} lobby is full (${count()}).`);
            }
            lobby.push(user);
            await store.save(lobby);
            if (lobby.length === minLobbyCt) {
                return say(`@${user} joined (${count()}). We have enough players to play ${lobbyTitle}! Not around? Type !lobby leave`);
            }
            if (lobby.length < minLobbyCt) {
                return say(`@${user} joined the ${lobbyTitle} lobby (${count()}). Need ${minLobbyCt - lobby.length} more to start. If anyone needs to bail: !lobby leave`);
            }
            return say(`@${user} joined the ${lobbyTitle} lobby (${count()}). If you need to bail: !lobby leave`);
        }

        case "leave":
            if (i === -1) return say(`@${user} you're not in the lobby.`);
            lobby.splice(i, 1);
            await store.save(lobby);
            return say(`@${user} left the lobby (${count()}).`);

        case "remove": {
            const ti = lobby.indexOf(target);
            if (ti === -1) return say(`${target || "That person"} isn't in the lobby.`);
            lobby.splice(ti, 1);
            await store.save(lobby);
            return say(`Removed ${target} (${count()}).`);
        }

        case "list":
            if (!lobby.length) return say(`The ${lobbyTitle} lobby is empty.`);
            return say(`${lobbyTitle} lobby (${count()}): ${lobby.join(", ")}`);

        case "game":
            return say(`The current lobby is for ${lobbyTitle}. Join by typing: !lobby join`);

        case "clear":
            await store.save([]);
            return say("Lobby cleared.");

        default:
            return say("Unknown action.");
    }
}
