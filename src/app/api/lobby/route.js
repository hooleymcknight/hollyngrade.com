import { promises as fs } from 'fs';
import path from 'path';

const minLobbyCt = 4;
const maxLobbyCt = 8;
const lobbyTitle = "Jackbox";

export const dynamic = 'force-dynamic';

const FILE = path.join(process.cwd(), 'data', 'lobby.json');
const say = (msg) =>
    new Response(msg, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

async function load() {
    try { return JSON.parse(await fs.readFile(FILE, 'utf8')); }
    catch { return []; }
}
async function save(l) {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(l));
}

export async function GET(req) {
    const p = new URL(req.url).searchParams;
    if (p.get('key') !== process.env.QUEUE_KEY) return say('Not allowed.');

    const action = p.get('action');
    const user = (p.get('user') || '').trim().replace(/^@/, '').toLowerCase();
    const lobby = await load();
    const i = lobby.indexOf(user);
    const target = (p.get('target') || '').trim().replace(/^@/, '').toLowerCase();
    const isMod = p.get('mod') === '1';
    if ((action === 'remove' || action === 'clear') && !isMod) {
        return say('Mods only hollyngSmileybutt');
    }
    const count = () => `${lobby.length}/${maxLobbyCt}`;

    switch (action) {
        case 'join': {
            if (!user) return say('Missing name videovPAlN');
            if (i !== -1) return say(`@${user} you're already in the ${lobbyTitle} lobby. If you need to bail: !lobby leave`);
            if (lobby.length >= maxLobbyCt) {
                return say(`@${user} the ${lobbyTitle} lobby is full (${count()}).`);
            }
            lobby.push(user);
            await save(lobby);
            if (lobby.length === minLobbyCt) {
                return say(`@${user} joined (${count()}). We have enough players to play ${lobbyTitle}! Not around? Type !lobby leave`);
            }
            if (lobby.length < minLobbyCt) {
                return say(`@${user} joined the ${lobbyTitle} lobby (${count()}). Need ${minLobbyCt - lobby.length} more to start. If anyone needs to bail: !lobby leave`);
            }
            return say(`@${user} joined the ${lobbyTitle} lobby (${count()}). If you need to bail: !lobby leave`);
        }

        case 'leave':
            if (i === -1) return say(`@${user} you're not in the lobby.`);
            lobby.splice(i, 1);
            await save(lobby);
            return say(`@${user} left the lobby (${count()}).`);

        case 'remove': {
            const ti = lobby.indexOf(target);
            if (ti === -1) return say(`${target || 'That person'} isn't in the lobby.`);
            lobby.splice(ti, 1);
            await save(lobby);
            return say(`Removed ${target} (${count()}).`);
        }

        case 'list':
            if (!lobby.length) return say(`The ${lobbyTitle} lobby is empty.`);
            return say(`${lobbyTitle} lobby (${count()}): ${lobby.join(', ')}`);

        case 'game':
            return say(`The current lobby is for ${lobbyTitle}. Join by typing: !lobby join`);

        case 'clear':
            await save([]);
            return say('Lobby cleared.');

        default:
            return say('Unknown action.');
    }
}