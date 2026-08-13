'use client';

// app/bbq/Rack.js
// The recipe rack. Styling lives in the `css` string in page.js so the whole
// route keeps one stylesheet scoped under #bbq.
//
// Collapsed by default, on purpose: the rack is the loudest thing on the page,
// and open by default means people claim before they've read anything else.
// The closed state still reports what's inside (how many open, how many duels)
// so it reads as a door rather than a hidden section.
//
// Card states:
//   open    -- nobody's claimed it
//   taken   -- one claim. Greyed. Still challengeable.
//   duel    -- two claims. Loudest thing on the board.
//   pantry  -- claim_cap null. Unlimited, never greys, never duels.
//   mine    -- you're one of the claimers; you get a way back out.

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Order is how somebody actually eats, not alphabetical and not by count.
// Labels are separate from the database values on purpose -- `meat_side` is a
// precise column value and a terrible thing to show a guest.
const GROUPS = [
  { key: 'appetizer',    label: 'To start' },
  { key: 'meat_dish',    label: 'More meat' },
  { key: 'meat_side',    label: "Sides with meat in 'em" },
  { key: 'starchy_side', label: 'Bread & starchy sides' },
  { key: 'veggie_side',  label: 'Veggie sides' },
  { key: 'salad',        label: 'Salads' },
  { key: 'dessert',      label: 'Desserts' },
  { key: 'pantry',       label: 'Always in stock' },
];

const EFFORT = { easy: 'Easy', medium: 'Some doing', project: 'A project' };

export default function Rack({ recipes, guest, token }) {
  const router = useRouter();
  const [openRack, setOpenRack] = useState(false);
  const [pending, setPending] = useState(null);     // recipe id mid-request
  const [error, setError] = useState('');
  const [challenge, setChallenge] = useState(null); // recipe awaiting confirm

  const signedIn = Boolean(guest);

  // The nav's Recipes pill fires this, so it doesn't scroll you to a closed door.
  useEffect(() => {
    const open = () => setOpenRack(true);
    window.addEventListener('bbq:open-rack', open);
    return () => window.removeEventListener('bbq:open-rack', open);
  }, []);

  async function send(path, recipeId) {
    setPending(recipeId);
    setError('');
    try {
      const res = await fetch(`/api/bbq/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, recipeId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Something broke. Try again?');
      } else {
        router.refresh();
      }
    } catch {
      setError('Lost the connection. Try again?');
    } finally {
      setPending(null);
      setChallenge(null);
    }
  }

  const bySlug = new Map(recipes.map((r) => [r.slug, r]));
  const mine = guest
    ? recipes.filter((r) => (r.claims || []).some((c) => c.guestId === guest.id))
    : [];

  const capped = recipes.filter((r) => r.claim_cap !== null);
  const stillOpen = capped.filter((r) => (r.claims || []).length === 0).length;
  const duels = capped.filter((r) => (r.claims || []).length >= 2).length;

  // Reserved recipes get pulled out of their normal category and shown in one
  // group at the top. They keep their real category in the database, so
  // clearing reserved_for puts them back where they belong.
  const reserved = recipes.filter((r) => r.reserved_for);
  const open = recipes.filter((r) => !r.reserved_for);

  const groups = [
    ...(reserved.length
      ? [{ key: '__reserved', label: 'Saved for you', items: reserved }]
      : []),
    ...GROUPS
      .map((g) => ({ ...g, items: open.filter((r) => r.category === g.key) }))
      .filter((g) => g.items.length > 0),
  ];

  return (
    <div className="rack-wrap">
      {/* ---------- how the links work: said once, not on every card ---------- */}
      {signedIn ? (
        <p className="rack-hello">
          Hey {guest.name} &mdash; take one off the rack and it&rsquo;s yours.
        </p>
      ) : (
        <div className="rack-anon">
          <p className="rack-anon-lead">Have a look around &mdash; this is the whole board.</p>
          <p className="rack-anon-note">
            Everybody gets their own link so the rack knows who claimed what. Text me and
            I&rsquo;ll send you yours.
          </p>
          <a className="rbtn" href="sms:+19364251225?&body=Can%20I%20get%20my%20recipe%20link%3F">
            Text me for my link
          </a>
        </div>
      )}

      {/* ---------- what you've already got ----------
          Lives OUTSIDE the collapsed rack deliberately. The rack is closed by
          default, so without this a returning guest would have to open it and
          scan every card to remember what they signed up for. */}
      {mine.length > 0 && (
        <div className="mylist">
          <p className="mylist-head">You&rsquo;re bringing</p>
          <ul className="mylist-items">
            {mine.map((r) => (
              <li key={r.id}>
                <span className="ml-name">{r.title}</span>
                <button
                  className="ml-drop"
                  onClick={() => send('unclaim', r.id)}
                  disabled={pending === r.id}
                  aria-label={`Put ${r.title} back on the rack`}
                >
                  {pending === r.id ? '\u2026' : '\u00d7'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ---------- the door ---------- */}
      <button
        className={`rack-gate${openRack ? ' is-open' : ''}`}
        onClick={() => setOpenRack((v) => !v)}
        aria-expanded={openRack}
        aria-controls="rack-body"
      >
        <span className="gate-label">{openRack ? 'Close the rack' : 'Open the rack'}</span>
        <span className="gate-count">
          {recipes.length} recipes &middot; {stillOpen} still open
          {duels > 0 ? ` · ${duels} head to head` : ''}
        </span>
        <span className="gate-chev" aria-hidden="true">{openRack ? '\u25B2' : '\u25BC'}</span>
      </button>

      <div id="rack-body" hidden={!openRack}>
        {error && <p className="rack-error">{error}</p>}

        {groups.map((g) => (
          <section
            key={g.key}
            className={`rack-group${g.key === '__reserved' ? ' is-reserved' : ''}`}
          >
            <p className="rack-group-head">{g.label}</p>
            <div className="rack-grid">
              {g.items.map((r) => (
                <Card
                  key={r.id}
                  recipe={r}
                  guest={guest}
                  signedIn={signedIn}
                  token={token}
                  addOn={r.pairs_with ? bySlug.get(r.pairs_with) : null}
                  onAddOn={(id) => send('claim', id)}
                  busy={pending === r.id}
                  onClaim={() => send('claim', r.id)}
                  onRelease={() => send('unclaim', r.id)}
                  onChallenge={() => setChallenge(r)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {challenge && (
        <ChallengeModal
          recipe={challenge}
          guest={guest}
          busy={pending === challenge.id}
          onCancel={() => setChallenge(null)}
          onConfirm={() => send('claim', challenge.id)}
        />
      )}
    </div>
  );
}

function Card({ recipe, guest, signedIn, token, busy, addOn, onAddOn, onClaim, onRelease, onChallenge }) {
  const unlimited = recipe.claim_cap === null;
  const claims = recipe.claims || [];
  const mine = guest ? claims.some((c) => c.guestId === guest.id) : false;
  const others = guest ? claims.filter((c) => c.guestId !== guest.id) : claims;

  const duel = !unlimited && claims.length >= 2;
  const taken = !unlimited && claims.length === 1;

  const cls = [
    'rcard',
    unlimited ? 'pantry' : '',
    duel ? 'duel' : '',
    taken && !mine ? 'taken' : '',
    mine ? 'mine' : '',
  ].filter(Boolean).join(' ');

  // What a browsing (tokenless) visitor sees in the action slot -- the one
  // thing they actually want to know, which is whether it's still available.
  // H-E-B recipes link out; family recipes render at /bbq/r/[slug], which needs
  // the token passed along since that page is gated.
  const recipeHref = recipe.recipe_url
    || (recipe.has_body ? `/bbq/r/${recipe.slug}?k=${encodeURIComponent(token || '')}` : null);

  const addOnClaimed = Boolean(
    addOn && guest && (addOn.claims || []).some((c) => c.guestId === guest.id)
  );

  const status = unlimited ? 'Always open'
    : duel ? 'Head to head'
    : taken ? 'Claimed'
    : 'Open';
  const statusClass = status.toLowerCase().replace(/\s+/g, '-');

  return (
    <article className={cls}>
      {duel && <span className="duel-flag">Head to head</span>}
      {mine && !duel && <span className="mine-flag">Yours</span>}

      <h3 className="rcard-title">{recipe.title}</h3>
      {recipe.blurb && <p className="rcard-blurb">{recipe.blurb}</p>}
      {recipe.host_note && <p className="rcard-note">{recipe.host_note}</p>}

      <p className="rcard-meta">
        <span className="effort">{EFFORT[recipe.effort]}</span>
        {recipeHref && (
          <>
            <span className="dot">&middot;</span>
            <a href={recipeHref} target="_blank" rel="noopener noreferrer">
              the recipe
            </a>
          </>
        )}
        {recipe.source === 'family' && <span className="fam">family</span>}
      </p>

      {claims.length > 0 && (
        <p className="rcard-who">
          {unlimited ? 'Bringing: ' : duel ? '' : 'Claimed by '}
          {duel
            ? claims.map((c) => c.name).join('  vs.  ')
            : claims.map((c) => c.name).join(', ')}
        </p>
      )}

      <div className="rcard-action">
        {!signedIn ? (
          <span className={`rcard-status st-${statusClass}`}>{status}</span>
        ) : mine ? (
          <>
            <button className="rbtn ghost" onClick={onRelease} disabled={busy}>
              {busy ? '\u2026' : 'Never mind, put it back'}
            </button>
            {addOn && !addOnClaimed && (
              <button className="addon" onClick={() => onAddOn(addOn.id)}>
                + Add {addOn.title.toLowerCase()}
              </button>
            )}
            {addOn && addOnClaimed && (
              <span className="addon-done">{addOn.title} added</span>
            )}
          </>
        ) : unlimited || claims.length === 0 ? (
          <button className="rbtn" onClick={onClaim} disabled={busy}>
            {busy ? '\u2026' : unlimited ? "I'll bring this" : 'Take it off the rack'}
          </button>
        ) : duel ? (
          <span className="rcard-status st-head-to-head">This duel&rsquo;s full</span>
        ) : (
          <button className="rbtn challenge" onClick={onChallenge} disabled={busy}>
            {busy ? '\u2026' : `Challenge ${others[0]?.name || 'them'}`}
          </button>
        )}
      </div>
    </article>
  );
}

function ChallengeModal({ recipe, guest, busy, onCancel, onConfirm }) {
  const opponent = (recipe.claims || []).find((c) => c.guestId !== guest?.id);

  return (
    <div className="modal-scrim" role="dialog" aria-modal="true" aria-label="Confirm challenge">
      <div className="modal">
        <p className="modal-kicker">Are you ready to challenge another chef?</p>

        {/* The two facts they need to have actually read, before the fun part. */}
        <p className="modal-dish">{recipe.title}</p>
        <p className="modal-vs">
          you <span>vs.</span> {opponent?.name || 'them'}
        </p>

        <p className="modal-fine">
          You&rsquo;re both bringing it. Ribbons get handed out at the end. There is no prize
          and the stakes could not be higher.
        </p>

        <div className="modal-actions">
          <button className="rbtn ghost" onClick={onCancel} disabled={busy}>
            Back down
          </button>
          <button className="rbtn challenge" onClick={onConfirm} disabled={busy}>
            {busy ? '\u2026' : "Let's go"}
          </button>
        </div>
      </div>
    </div>
  );
}

