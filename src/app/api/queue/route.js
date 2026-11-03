import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic'; // never cache this route

const FILE = path.join(process.cwd(), 'data', 'queue.json');
const say = (msg) =>
  new Response(msg, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

async function load() {
  try { return JSON.parse(await fs.readFile(FILE, 'utf8')); }
  catch { return []; }
}
async function save(q) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(q));
}

export async function GET(req) {
    const p = new URL(req.url).searchParams;
    if (p.get('key') !== process.env.QUEUE_KEY) return say('Not allowed.');

    const action = p.get('action');
    const user = (p.get('user') || '').trim().replace(/^@/, '').toLowerCase();
    const q = await load();
    const i = q.indexOf(user);

    switch (action) {
        case 'join':
            if (!user) return say('Missing name.');
            if (i !== -1) return say(`@${user} you're already in the queue.`);
            q.push(user);
            await save(q);
            return say(`@${user} you're in! ${q.length === 1 ? "You're first." : `${q.length - 1} ahead of you.`}`);

        case 'leave':
            if (i === -1) return say(`@${user} you're not in the queue.`);
            q.splice(i, 1);
            await save(q);
            return say(`@${user} you've left the queue.`);

        case 'position':
            if (i === -1) return say(`@${user} you're not in the queue.`);
            return say(i === 0 ? `@${user} you're next up!` : `@${user} ${i} ahead of you.`);

        case 'list': {
            if (!q.length) return say('The queue is empty.');
            const shown = q.slice(0, 15).map((n, k) => `${k + 1}. ${n}`).join(' | ');
            return say(q.length > 15 ? `${shown} (+${q.length - 15} more)` : shown);
        }

        case 'next': {
            const who = q.shift();
            if (!who) return say('The queue is empty.');
            await save(q);
            return say(`Up next: @${who}`);
        }

        case 'remove':
            if (i === -1) return say(`${user || 'That person'} isn't in the queue.`);
            q.splice(i, 1);
            await save(q);
            return say(`Removed ${user}.`);

        case 'clear':
            await save([]);
            return say('Queue cleared.');

        default:
            return say('Unknown action.');
    }
}