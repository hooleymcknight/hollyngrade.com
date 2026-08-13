#!/usr/bin/env node
// scripts/bbq-guests.mjs
//
// Adds guests and prints their magic links so you can paste them into texts.
//
//   node scripts/bbq-guests.mjs add "Ari" "Matt" "Jess"
//   node scripts/bbq-guests.mjs list
//   node scripts/bbq-guests.mjs claims
//
// Reads the same MYSQL_* env vars as the app. If you keep them in .env.local,
// run it as:  node --env-file=.env.local scripts/bbq-guests.mjs list

import mysql from 'mysql2/promise';
import { randomBytes } from 'node:crypto';

const SITE = process.env.BBQ_SITE_URL || 'https://hollyngrade.com';

// 24 url-safe chars. Unguessable at this scale without being precious about it.
const makeToken = () =>
  randomBytes(18).toString('base64').replace(/[+/=]/g, '').slice(0, 24);

const db = await mysql.createConnection({
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const [cmd, ...args] = process.argv.slice(2);

try {
  if (cmd === 'add') {
    if (!args.length) {
      console.error('Give me at least one name.');
      process.exit(1);
    }
    for (const name of args) {
      const token = makeToken();
      await db.query('INSERT INTO bbq_guest (name, token) VALUES (?, ?)', [name, token]);
      console.log(`${name}\n  ${SITE}/bbq?k=${token}\n`);
    }

  } else if (cmd === 'list') {
    const [rows] = await db.query('SELECT name, token FROM bbq_guest ORDER BY name');
    for (const r of rows) console.log(`${r.name}\n  ${SITE}/bbq?k=${r.token}\n`);
    console.log(`${rows.length} guest(s).`);

  } else if (cmd === 'claims') {
    const [rows] = await db.query(
      `SELECT r.title, r.category, GROUP_CONCAT(g.name ORDER BY c.created_at SEPARATOR ', ') AS who
         FROM bbq_recipe r
         LEFT JOIN bbq_claim c ON c.recipe_id = r.id
         LEFT JOIN bbq_guest g ON g.id = c.guest_id
        GROUP BY r.id
        ORDER BY r.sort_order`
    );
    for (const r of rows) {
      console.log(`${r.who ? '●' : '○'} ${r.title.padEnd(24)} ${r.who || '(open)'}`);
    }

  } else {
    console.log('Commands: add "Name" ... | list | claims');
  }
} finally {
  await db.end();
}
