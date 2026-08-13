// app/api/bbq/claim/route.js
// POST { token, recipeId } -> creates a claim.
//
// Two things can go wrong under concurrency, and each has its own guard:
//
//   1. Same person taps twice (double-tap, flaky signal, impatient reload).
//      Caught by the UNIQUE(recipe_id, guest_id) key -- the second insert
//      throws ER_DUP_ENTRY and we treat it as a no-op success.
//
//   2. Two different people tap the last open slot at the same moment.
//      Counting in JS would let both through, since both would read "1".
//      So we SELECT ... FOR UPDATE the recipe row first, which makes claims
//      for a given recipe line up single file. The count is then trustworthy.

import { NextResponse } from 'next/server';
import { pool, guestByToken } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 });
  }

  const { token, recipeId } = body || {};
  const id = Number(recipeId);
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 });
  }

  const guest = await guestByToken(token);
  if (!guest) {
    return NextResponse.json(
      { error: "That link doesn't look right. Text Hollyn for a fresh one." },
      { status: 401 }
    );
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // Lock the recipe row. Anyone else claiming THIS recipe now waits here.
    const [[recipe]] = await conn.query(
      'SELECT id, title, claim_cap FROM bbq_recipe WHERE id = ? FOR UPDATE',
      [id]
    );

    if (!recipe) {
      await conn.rollback();
      return NextResponse.json({ error: 'No such recipe.' }, { status: 404 });
    }

    // claim_cap NULL means unlimited -- the pantry items.
    if (recipe.claim_cap !== null) {
      const [[{ n }]] = await conn.query(
        'SELECT COUNT(*) AS n FROM bbq_claim WHERE recipe_id = ?',
        [id]
      );
      if (n >= recipe.claim_cap) {
        await conn.rollback();
        return NextResponse.json(
          { error: 'Somebody just took that slot. Pick another one!' },
          { status: 409 }
        );
      }
    }

    await conn.query(
      'INSERT INTO bbq_claim (recipe_id, guest_id) VALUES (?, ?)',
      [id, guest.id]
    );

    await conn.commit();
    return NextResponse.json({ ok: true });
  } catch (err) {
    await conn.rollback();

    // Already claimed by this same guest -- not an error worth showing.
    if (err && err.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ ok: true, already: true });
    }

    console.error('[bbq/claim]', err);
    return NextResponse.json({ error: 'Something broke. Try again?' }, { status: 500 });
  } finally {
    conn.release();
  }
}
