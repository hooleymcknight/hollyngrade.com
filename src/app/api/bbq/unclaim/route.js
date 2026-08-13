// app/api/bbq/unclaim/route.js
// POST { token, recipeId } -> removes this guest's claim.
//
// No transaction needed. The DELETE is scoped to (recipe_id, guest_id), which
// is a unique key, so it's a single-row operation that either matches or
// doesn't. Nobody can un-claim anyone else's dish, because the guest id comes
// from the token rather than from the request body.

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

  try {
    await pool.query(
      'DELETE FROM bbq_claim WHERE recipe_id = ? AND guest_id = ?',
      [id, guest.id]
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[bbq/unclaim]', err);
    return NextResponse.json({ error: 'Something broke. Try again?' }, { status: 500 });
  }
}
