// Shared helpers for the chat bot endpoints (/api/queue, /api/lobby).
// Each list is a JSON array of lowercase usernames in data/<name>.json,
// which lives on the server and isn't in git.
import { promises as fs } from "node:fs";
import path from "node:path";

export const say = (msg: string) =>
    new Response(msg, { headers: { "Content-Type": "text/plain; charset=utf-8" } });

export const cleanName = (raw: string | null) =>
    (raw || "").trim().replace(/^@/, "").toLowerCase();

export function chatList(name: string) {
    const file = path.join(process.cwd(), "data", `${name}.json`);
    return {
        async load(): Promise<string[]> {
            try { return JSON.parse(await fs.readFile(file, "utf8")); }
            catch { return []; }
        },
        async save(list: string[]) {
            await fs.mkdir(path.dirname(file), { recursive: true });
            await fs.writeFile(file, JSON.stringify(list));
        },
    };
}
