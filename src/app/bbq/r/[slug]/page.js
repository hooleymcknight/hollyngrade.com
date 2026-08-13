// app/bbq/r/[slug]/page.js
// Print page for the family recipes -- the five that have no H-E-B URL to link
// out to, so their text lives in the `body` column instead.
//
// TOKEN REQUIRED, on purpose. These are Hollyn's family recipes. Without a gate
// they'd sit on the open internet permanently and get indexed, which is a much
// bigger act of sharing than putting them in front of twenty guests. The rack
// passes the token through in the link, so nobody holding an invite notices.
//
// robots noindex as a second layer, in case a link ever gets shared.

import { notFound } from 'next/navigation';
import { getRecipeBody, guestByToken } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function RecipePage({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const token = typeof sp?.k === 'string' ? sp.k : null;

  const guest = await guestByToken(token);
  const recipe = guest ? await getRecipeBody(slug) : null;

  if (!guest) {
    return (
      <>
        <style>{css}</style>
        <div id="recipe">
          <div className="sheet locked">
            <p className="eyebrow">Family recipe</p>
            <h1 className="title">Just a sec</h1>
            <p className="lockmsg">
              These ones aren&rsquo;t posted publicly. Open this from the link I texted you
              and it&rsquo;ll be right here.
            </p>
            <a className="btn" href="sms:+19364251225?&body=Can%20I%20get%20my%20recipe%20link%3F">
              Text me for my link
            </a>
          </div>
        </div>
      </>
    );
  }

  if (!recipe) notFound();

  return (
    <>
      <style>{css}</style>

      <div id="recipe">
        <div className="sheet">
          <p className="eyebrow">From the family</p>
          <h1 className="title">{recipe.title}</h1>
          {recipe.blurb && <p className="blurb">{recipe.blurb}</p>}

          {recipe.host_note && (
            <p className="note">{recipe.host_note}</p>
          )}

          <div className="rule" />

          {/* body is plain text with meaningful line breaks, so it needs
              pre-wrap -- not a parser. */}
          <div className="body">{recipe.body}</div>

          <div className="rule" />

          <p className="foot">
            Backyard BBQ &middot; Saturday, Aug 22 &middot; 2 pm &rsquo;til late
          </p>

          <a className="back" href={`/bbq?k=${encodeURIComponent(token)}`}>
            &larr; back to the rack
          </a>
        </div>
      </div>
    </>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Ultra&family=Oswald:wght@300;400;500;600&family=Caveat:wght@700&display=swap');

body { margin:0; padding:0; background:#1b1613; }

#recipe{
  --paper:#FBF4E6;
  --paper-2:#F5EAD6;
  --ink:#1E1A17;
  --ink-soft:#6E5B49;
  --red:#D22630;
  --red-deep:#9C1721;
  --tag:#F6C544;

  min-height:100vh;
  background:#221c19;
  background-image:radial-gradient(circle at 50% 0%, #342c26 0%, #1b1613 70%);
  padding:40px 16px 64px;
  font-family:'Oswald','Arial Narrow',sans-serif;
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
}
#recipe *{box-sizing:border-box;}
#recipe p, #recipe h1{margin:0; padding:0;}

#recipe .sheet{
  position:relative; max-width:600px; margin:0 auto;
  padding:40px 44px 34px; border-radius:6px;
  background-color:var(--paper);
  background-image:
    radial-gradient(circle at 15% 6%, rgba(255,255,255,.5), rgba(255,255,255,0) 38%),
    repeating-linear-gradient(90deg, var(--paper) 0 4px, var(--paper-2) 4px 8px);
  background-blend-mode:normal, soft-light;
  box-shadow:0 26px 60px rgba(0,0,0,.55);
}

#recipe .eyebrow{
  text-align:center; font-weight:500; font-size:10px; letter-spacing:.24em;
  text-transform:uppercase; color:var(--red-deep); padding-left:.24em;
}
#recipe .title{
  text-align:center; margin-top:10px;
  font-family:'Ultra',Georgia,serif; font-weight:400;
  font-size:34px; line-height:1.02;
  text-shadow:2px 2px 0 rgba(210,38,48,.16);
}
#recipe .blurb{
  text-align:center; margin-top:12px;
  font-family:'Caveat',cursive; font-weight:700; font-size:21px; color:var(--ink-soft);
}
#recipe .note{
  margin:18px auto 0; max-width:440px; padding-left:11px;
  border-left:2px solid rgba(210,38,48,.5);
  font-family:'Caveat',cursive; font-weight:700; font-size:17px; line-height:1.3;
}

#recipe .rule{
  height:2px; margin:26px 0;
  background-image:repeating-linear-gradient(90deg,
    rgba(156,23,33,.45) 0 8px, rgba(156,23,33,0) 8px 15px);
}

/* The recipe text itself. pre-wrap keeps the line breaks that are already in
   the column without needing to parse anything. */
#recipe .body{
  white-space:pre-wrap;
  font-size:15.5px; line-height:1.65; color:var(--ink);
}

#recipe .foot{
  text-align:center; font-weight:400; font-size:10px; letter-spacing:.18em;
  text-transform:uppercase; color:var(--ink-soft);
}

#recipe .back{
  display:block; text-align:center; margin-top:22px;
  font-size:12px; letter-spacing:.1em; text-transform:uppercase;
  color:var(--red); text-decoration:none;
}
#recipe .back:hover{text-decoration:underline;}

/* ---------- locked state ---------- */
#recipe .locked{text-align:center;}
#recipe .lockmsg{
  max-width:400px; margin:16px auto 0;
  font-size:14.5px; line-height:1.6; color:var(--ink);
}
#recipe .btn{
  display:inline-block; margin-top:20px;
  background:var(--red); color:#FFF9EE; text-decoration:none;
  font-weight:600; font-size:13px; letter-spacing:.08em;
  padding:11px 24px; border-radius:999px;
}

/* ---------- print ----------
   Strip the dark page, the paper texture and the shadow. Drop the back link,
   which is useless on paper. Keep the dashed rules -- they survive fine in
   black and they're the only thing that says which party this came from. */
@media print{
  body{background:#fff;}
  #recipe{
    background:none; min-height:0; padding:0; color:#000;
  }
  #recipe .sheet{
    max-width:none; margin:0; padding:0;
    background:#fff; box-shadow:none; border-radius:0;
  }
  #recipe .title{text-shadow:none;}
  #recipe .back{display:none;}
  #recipe .rule{
    background-image:repeating-linear-gradient(90deg,
      rgba(0,0,0,.5) 0 8px, rgba(0,0,0,0) 8px 15px);
  }
  #recipe .note{border-left-color:rgba(0,0,0,.4);}
  #recipe .body{font-size:12pt;}
}

@media (max-width:560px){
  #recipe{padding:0 0 40px;}
  #recipe .sheet{border-radius:0; padding:30px 20px 26px;}
  #recipe .title{font-size:27px;}
}
`;
