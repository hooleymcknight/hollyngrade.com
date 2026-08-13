'use client';

// app/bbq/Rack.js
// The recipe rack. Styling lives in the `css` string in page.js so the whole
// route keeps one stylesheet scoped under #bbq.
//
// Card states:
//   open    -- nobody's claimed it
//   taken   -- one claim. Greyed. Still challengeable.
//   duel    -- two claims. Loudest thing on the board.
//   pantry  -- claim_cap null. Unlimited, never greys, never duels.
//   mine    -- you're one of the claimers; you get a way back out.

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const GROUPS = [
  { key: 'main',   label: 'Mains' },
  { key: 'side',   label: 'Sides' },
  { key: 'sweet',  label: 'Something sweet' },
  { key: 'drink',  label: 'To drink' },
  { key: 'pantry', label: 'Always in stock' },
];

const EFFORT = { easy: 'Easy', medium: 'Some doing', project: 'A project' };

export default function Rack({ recipes, guest, token }) {
  const router = useRouter();
  const [pending, setPending] = useState(null);   // recipe id mid-request
  const [error, setError] = useState('');
  const [challenge, setChallenge] = useState(null); // recipe awaiting confirm

  const signedIn = Boolean(guest);

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

  const groups = GROUPS
    .map((g) => ({ ...g, items: recipes.filter((r) => r.category === g.key) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="rack-wrap">
      {signedIn ? (
        <p className="rack-hello">
          Hey {guest.name} &mdash; take one off the rack and it&rsquo;s yours.
        </p>
      ) : (
        <p className="rack-hello rack-hello-anon">
          You&rsquo;re just browsing &mdash; text me and I&rsquo;ll send you your own link so you can claim one.
        </p>
      )}

      {error && <p className="rack-error">{error}</p>}

      {groups.map((g) => (
        <section key={g.key} className="rack-group">
          <p className="rack-group-head">{g.label}</p>
          <div className="rack-grid">
            {g.items.map((r) => (
              <Card
                key={r.id}
                recipe={r}
                guest={guest}
                signedIn={signedIn}
                busy={pending === r.id}
                onClaim={() => send('claim', r.id)}
                onRelease={() => send('unclaim', r.id)}
                onChallenge={() => setChallenge(r)}
              />
            ))}
          </div>
        </section>
      ))}

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

function Card({ recipe, guest, signedIn, busy, onClaim, onRelease, onChallenge }) {
  const unlimited = recipe.claim_cap === null;
  const claims = recipe.claims || [];
  const mine = guest ? claims.some((c) => c.guestId === guest.id) : false;
  const others = guest ? claims.filter((c) => c.guestId !== guest.id) : claims;

  const full = !unlimited && claims.length >= recipe.claim_cap;
  const duel = !unlimited && claims.length >= 2;
  const taken = !unlimited && claims.length === 1;

  const cls = [
    'rcard',
    unlimited ? 'pantry' : '',
    duel ? 'duel' : '',
    taken && !mine ? 'taken' : '',
    mine ? 'mine' : '',
  ].filter(Boolean).join(' ');

  return (
    <article className={cls}>
      {duel && <span className="duel-flag">Head to head</span>}
      {mine && !duel && <span className="mine-flag">Yours</span>}

      <h3 className="rcard-title">{recipe.title}</h3>
      {recipe.blurb && <p className="rcard-blurb">{recipe.blurb}</p>}

      <p className="rcard-meta">
        <span className="effort">{EFFORT[recipe.effort]}</span>
        {recipe.recipe_url && (
          <>
            <span className="dot">&middot;</span>
            <a href={recipe.recipe_url} target="_blank" rel="noopener noreferrer">
              the recipe
            </a>
          </>
        )}
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
          <span className="rcard-locked">
            {full ? 'Spoken for' : 'Text me for your link'}
          </span>
        ) : mine ? (
          <button className="rbtn ghost" onClick={onRelease} disabled={busy}>
            {busy ? '…' : 'Never mind, put it back'}
          </button>
        ) : unlimited || claims.length === 0 ? (
          <button className="rbtn" onClick={onClaim} disabled={busy}>
            {busy ? '…' : unlimited ? "I'll bring this" : 'Take it off the rack'}
          </button>
        ) : duel ? (
          <span className="rcard-locked">This duel&rsquo;s full</span>
        ) : (
          <button className="rbtn challenge" onClick={onChallenge} disabled={busy}>
            {busy ? '…' : `Challenge ${others[0]?.name || 'them'}`}
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
            {busy ? '…' : "Let's go"}
          </button>
        </div>
      </div>
    </div>
  );
}
