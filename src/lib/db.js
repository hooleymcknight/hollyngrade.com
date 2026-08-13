// lib/db.js
// Shared mysql2 pool. Cached on globalThis so Next's dev-mode hot reload
// doesn't open a new pool on every file save and exhaust your connections.

import mysql from 'mysql2/promise';

function makePool() {
  return mysql.createPool({
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    charset: 'utf8mb4',
  });
}

const g = globalThis;
export const pool = g.__bbqPool || (g.__bbqPool = makePool());

/** Look up a guest by their magic-link token. Returns null if there's no match. */
export async function guestByToken(token) {
  if (!token || typeof token !== 'string') return null;
  const [rows] = await pool.query(
    'SELECT id, name FROM bbq_guest WHERE token = ? LIMIT 1',
    [token]
  );
  return rows[0] || null;
}

/**
 * Every recipe with its claims attached.
 * One query for recipes, one for claims, stitched in JS -- simpler to read
 * than a join you then have to un-flatten, and it's two round trips total.
 */
export async function getRack() {
  const [recipes] = await pool.query(
    `SELECT id, slug, title, blurb, category, effort, recipe_url, claim_cap
       FROM bbq_recipe
      ORDER BY sort_order, title`
  );

  const [claims] = await pool.query(
    `SELECT c.recipe_id, c.guest_id, g.name
       FROM bbq_claim c
       JOIN bbq_guest g ON g.id = c.guest_id
      ORDER BY c.created_at`
  );

  const byRecipe = new Map();
  for (const c of claims) {
    if (!byRecipe.has(c.recipe_id)) byRecipe.set(c.recipe_id, []);
    byRecipe.get(c.recipe_id).push({ guestId: c.guest_id, name: c.name });
  }

  return recipes.map((r) => ({
    ...r,
    claims: byRecipe.get(r.id) || [],
  }));
}
