// app/bbq/page.js
// Self-contained BBQ details page. All styling is scoped under #bbq so the
// site's global styles (from layout.js) don't apply here, and this page's
// styles don't leak elsewhere.
//
// Magic links are /bbq?k=TOKEN. No token still renders the whole page and the
// whole rack, read-only -- except the street address and the parking map,
// which are held back. The URL on the invite card has no token on it, so the
// tokenless view is the one most people hit first and it needs to be good.

import { getRack, guestByToken } from '@/lib/db';
import Rack from './Rack';
import Nav from './Nav';
import ParkingMap from './ParkingMap';
import Signoff from './Signoff';

export const dynamic = 'force-dynamic'; // claims change; never cache this

export default async function BbqPage({ searchParams }) {
  const sp = await searchParams;
  const token = typeof sp?.k === 'string' ? sp.k : null;

  // The guest has to resolve before the rack query, since reserved recipes are
  // filtered by guest id in SQL.
  const guest = await guestByToken(token);
  const recipes = await getRack(guest?.id ?? null);

  return (
    <>
      <style>{css}</style>

      <div id="bbq">
        <div className="sheet">

          {/* lid + section nav, both sticky, both in here */}
          <Nav />

          <div className="body">

            {/* ---------- header ---------- */}
            <p className="eyebrow">Here, everything&rsquo;s better in the backyard</p>
            <h1 className="title">Backyard <span className="red">BBQ</span></h1>

            <p className="when">Saturday, Aug 22<small>2 pm &rsquo;til late</small></p>

            {/* Address only for people holding a link. */}
            {guest ? (
              <p className="where">1012 E 53rd Street &middot; Tacoma, Washington</p>
            ) : (
              <p className="where where-soft">
                Tacoma, Washington &mdash; the address is on your invite
              </p>
            )}

            <div className="premise">
              <p className="lead">I&rsquo;ll bring brisket. Take a recipe off the rack<br />and let&rsquo;s fill the table together.</p>
              <p className="stakes">Ribbons on the line &mdash; bragging rights only</p>
            </div>

            <a className="btn" href="sms:+19364251225?&body=I%27ll%20be%20there%21">Text me &mdash; &ldquo;I&rsquo;ll be there!&rdquo;</a>

            <div className="logistics">
              <span>Park on I St</span>
              <span>Pool on site</span>
              <span>Kids welcome</span>
            </div>

            {/* ---------- recipe rack ---------- */}
            <div id="sec-recipes" className="rule">The recipe rack</div>

            <div className="rack-intro">
              <p className="rack-lead">Take a recipe off the rack and bring that dish.</p>
              <p className="rack-note">
                Claimed recipes gray out so you can see what&rsquo;s already spoken for. Changed your
                mind? Put it back, no hard feelings. And if somebody already took the one you wanted,
                you can always challenge them for it.
              </p>
              <div className="burst">
                <div className="text-content">
                  <div className="b1">Take</div>
                  <div className="b2">ONE</div>
                  <div className="b3">off the rack</div>
                </div>
              </div>
            </div>

            <Rack recipes={recipes} guest={guest} token={token} />

            {/* ---------- parking ---------- */}
            <div id="sec-parking" className="rule">Parking</div>

            <p className="ssub">Drop off first, then park</p>
            <ul className="notes">
              <li><b>Pull up to the house</b> and unload &mdash; your dish, your people, the pool bag. The driveway stays clear all day for exactly this.</li>
              <li><b>Then park on I St</b>, one block over by the school. Plenty of room, and an easy walk back with your hands empty.</li>
              <li>Please skip J St and K St &mdash; those are the neighbors&rsquo; spots (even if they&rsquo;re empty).</li>
              <li>The alley is residents-only. You&rsquo;ll see it, but please leave it clear.</li>
            </ul>

            {/* The map names the streets and stars the driveway, so it's the
                address by other means -- same gate as the address itself. */}
            {guest ? (
              <ParkingMap />
            ) : (
              <p className="map-hold">The map comes with your link.</p>
            )}

            {/* ---------- pool ---------- */}
            <div id="sec-pool" className="rule">The pool</div>

            <p className="pool-lead">
              The pool&rsquo;s open in blocks throughout the afternoon, not all day. Between blocks the
              ladder comes off and gets locked. Bring ya swim stuff and a towel.
            </p>

            <ul className="sched">
              <li className="closed"><span className="t">2:00</span><span className="s">Closed</span><span className="w">getting set up</span></li>
              <li className="open"><span className="t">3:00</span><span className="s">Open</span><span className="w">first block</span></li>
              <li className="closed"><span className="t">4:00</span><span className="s">Closed</span><span className="w">eat something</span></li>
              <li className="open"><span className="t">5:00</span><span className="s">Open</span><span className="w">second block</span></li>
              <li className="closed"><span className="t">6:00</span><span className="s">Closed</span><span className="w">eat something</span></li>
              <li className="open"><span className="t">7:00</span><span className="s">Open</span><span className="w">last block</span></li>
              <li className="closed"><span className="t">8:00</span><span className="s">Closed</span><span className="w">ladder&rsquo;s off for the night</span></li>
            </ul>

            <p className="ssub">Pool rules for kids</p>
            <ul className="rules">
              <li>
                <b>Somebody&rsquo;s always watching.</b> Whoever&rsquo;s wearing the ridiculous hat is
                the water watcher. They&rsquo;re on duty, not socializing &mdash; don&rsquo;t take it
                personally if they don&rsquo;t chat.
              </li>
              <li>
                <b>Kids get a bracelet upon arrival.</b> I&rsquo;ll ask how well your kid can swim and
                tie on a color to match.{' '}
                {/* << EDIT: swap colors for whatever gimp you actually have >> */}
                <span className="band bd-green">Green</span> swims on their own,{' '}
                <span className="band bd-yellow">yellow</span> is in the water with a parent
                or not at all, and <span className="band bd-red">red</span> is not in the pool at all this time, please.
              </li>
              <li><b>No diving, no breath-holding games.</b></li>
              <li><b>Can&rsquo;t find a kid? Say so out loud and check the pool first.</b></li>
            </ul>

            {/* ---------- other doings ---------- */}
            <div id="sec-doings" className="rule">Other doings</div>

            <ul className="act">
              <li>
                <span className="act-name">Ribbons.</span> County fair rules &mdash; there are
                ribbons on the line for the dishes that come off the rack. Bragging rights only.
              </li>
              <li><span className="act-name">Cornhole.</span> Set up in the yard.</li>
              <li>
                <span className="act-name">Firepit, after dark.</span> Evening-time friends, come by after
                work &mdash; you won&rsquo;t have missed anything. Feel free to bring some s&rsquo;mores stuff; I&rsquo;ve got a few roasting sticks.
              </li>
            </ul>

            {/* ---------- food ---------- */}
            <div id="sec-food" className="rule">Food</div>

            <p className="course">Off the grill</p>
            <ul className="menu">
              <li><span className="name">Brisket</span> <span className="mnote">&mdash; that part&rsquo;s on me</span></li>
              <li><span className="name">Burgers</span> <span className="mnote">&mdash; beef or Beyond</span><Badge kind="vegan" label="vegan option" /></li>
            </ul>

            <p className="course">To drink</p>
            <ul className="menu">
              <li><span className="name">Water &amp; sweet tea</span></li>
            </ul>
            <p className="menunote"><Cup /> Anything else you&rsquo;d like to drink, bring it along.</p>

            <div className="key">
              <span className="k"><Leaf className="sw-vegan" /> vegan</span>
              <span className="k"><Leaf className="sw-veg" /> vegetarian</span>
            </div>

            <p className="accnote">
              Got a food allergy or need any other accommodation?{' '}
              <a href="sms:+19364251225?&body=Hi Hollyn, a heads-up:">Text me</a> and I&rsquo;ll take care of it.
            </p>

            <div className="rule">&nbsp;&middot;&nbsp;</div>
            <Signoff />

          </div>
        </div>
      </div>
    </>
  );
}

function Leaf({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5" />
    </svg>
  );
}

// Fountain drink -- tapered cup, domed lid, straw. Deliberately not a can or
// a bottle, both of which read as beer at this size.
function Cup() {
  return (
    <svg className="cup" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.6 6.4 L17.2 1.4" strokeWidth="1.9" strokeLinecap="round" fill="none" />
      <rect x="4.6" y="5.9" width="14.8" height="3.1" rx="1.2" />
      <path d="M6.4 10.4 L17.6 10.4 L16.1 21.6 Q16 22.6 15 22.6 L9 22.6 Q8 22.6 7.9 21.6 Z" />
    </svg>
  );
}

function Badge({ kind, label }) {
  return (
    <span className={`badge b-${kind}`}>
      <Leaf />
      {label}
    </span>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Ultra&family=Oswald:wght@300;400;500;600;700&family=Caveat:wght@600;700&display=swap');

/* neutralize the site's body styling for this route only */
body { margin:0; padding:0; background:#1b1613; }

/* The site footer lives outside #bbq, so it needs its own tokens and its own
   unscoped selector. Like the body reset above, this only applies while this
   route is mounted. The footer p rule hides the byline -- it's the smallest
   thing on the page and the name already appears in the sticker. */
footer {
  --paper:#FBF4E6;
  --paper-2:#F5EAD6;
  --ink:#1E1A17;
  --ink-soft:#6E5B49;
  max-width:660px;
  color:var(--ink-soft);
  font-family:'Oswald','Arial Narrow',sans-serif;
  border-radius:6px;
  background-color:var(--paper);
  background-image:
    radial-gradient(circle at 15% 6%, rgba(255,255,255,.5), rgba(255,255,255,0) 38%),
    radial-gradient(circle at 85% 94%, rgba(150,110,60,.13), rgba(150,110,60,0) 40%),
    repeating-linear-gradient(90deg, var(--paper) 0 4px, var(--paper-2) 4px 8px);
  background-blend-mode:normal,normal,soft-light;
  box-shadow:0 26px 60px rgba(0,0,0,.55);
}
footer a { color:var(--ink); }
footer p { display:none; }

/* The extra Texas stops on the closing graphic (San Antonio, Denton, Waco,
   Dallardsville). Set display:none to leave just Austin and simplify it. */
#bbq .tx-stars { display: inline; }

#bbq{
  /* tokens are the invite's, verbatim */
  --paper:#FBF4E6;
  --paper-2:#F5EAD6;
  --ink:#1E1A17;
  --ink-soft:#6E5B49;
  --red:#D22630;
  --red-deep:#9C1721;
  --tag:#F6C544;
  --ribbon:#2E6E8E;
  --veg-bg:#EAF3DE; --veg-fg:#4E7A12;
  --vegan-bg:#D9F0E7; --vegan-fg:#0F6E56;
  --stickyH:104px;   /* lid + nav when stuck; used for scroll offsets */

  width: 100%;
  min-height:100vh;
  background:#221c19;
  background-image:radial-gradient(circle at 50% 0%, #342c26 0%, #1b1613 70%);
  padding:40px 16px 64px;
  font-family:'Oswald','Arial Narrow',sans-serif;
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
}
#bbq *{box-sizing:border-box;}
#bbq p, #bbq h1, #bbq h2, #bbq h3, #bbq ul{margin:0; padding:0;}

/* NOTE: no overflow:hidden here -- it would break position:sticky on the lid.
   The banner carries its own top radius instead so the corners still clip. */
#bbq .sheet{
  position:relative; max-width:660px; margin:0 auto;
  border-radius:6px;
  background-color:var(--paper);
  background-image:
    radial-gradient(circle at 15% 6%, rgba(255,255,255,.5), rgba(255,255,255,0) 38%),
    radial-gradient(circle at 85% 94%, rgba(150,110,60,.13), rgba(150,110,60,0) 40%),
    repeating-linear-gradient(90deg, var(--paper) 0 4px, var(--paper-2) 4px 8px);
  background-blend-mode:normal,normal,soft-light;
  box-shadow:0 26px 60px rgba(0,0,0,.55);
}

/* ---------- sticky bar: lid + nav travel together ---------- */
#bbq .sticky-sentinel{position:absolute; top:0; height:1px; width:100%;}
#bbq .stickybar{position:sticky; top:0; z-index:40;}

/* ---------- ribbed screw-top lid ---------- */
#bbq .banner{
  position:relative;
  border-radius:6px 6px 0 0;
  background-color:var(--red);
  background-image:
    linear-gradient(180deg, rgba(113,38,38,.34) 0%, rgba(255,255,255,.10) 26%,
                            rgba(255,255,255,0) 46%, rgba(0,0,0,.14) 100%),
    repeating-linear-gradient(90deg,
      rgba(255,255,255,.15) 0 1.5px,
      rgba(0,0,0,0) 1.5px 3px,
      rgba(0,0,0,.17) 3px 4.5px,
      rgba(0,0,0,0) 4.5px 6px);
  background-size:100% 100%, 6px 100%;
  background-repeat:no-repeat, repeat-x;
  color:#fff; padding:15px 28px 18px;
  box-shadow:0 4px 9px rgba(0,0,0,.20);
  transition:padding .18s ease;
}
#bbq .banner .kicker{
  display:flex; justify-content:space-between; align-items:baseline;
  font-weight:500; font-size:10px; letter-spacing:.2em; text-transform:uppercase; opacity:.93;
}
#bbq .banner .line{
  text-align:center; font-weight:600; font-size:21px; letter-spacing:.30em;
  text-transform:uppercase; margin-top:3px; padding-left:.30em;
}
#bbq .banner::after{
  content:""; position:absolute; left:0; right:0; bottom:0; height:8px;
  background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.10) 45%, rgba(0,0,0,.32) 100%);
}

/* two lid states: full at rest, one compact row once you scroll */
#bbq .lid-compact{display:none;}
#bbq .stuck .banner{padding:10px 20px 12px; border-radius:0;}
#bbq .stuck .lid-full{display:none;}
#bbq .stuck .lid-compact{
  display:flex; align-items:baseline; justify-content:space-between; gap:10px;
}
#bbq .lid-compact .lc-title{
  font-family:'Ultra',Georgia,serif; font-size:17px; line-height:1; white-space:nowrap;
}
#bbq .lid-compact .lc-side{
  font-weight:500; font-size:9.5px; letter-spacing:.15em; text-transform:uppercase;
  opacity:.9; white-space:nowrap; flex:1;
}
#bbq .lid-compact .lc-right{text-align:right;}

/* ---------- section nav ---------- */
#bbq .secnav{
  background:rgba(251,244,230,.97);
  border-bottom:2px dashed rgba(156,23,33,.4);
  box-shadow:0 6px 12px rgba(30,26,23,.07);
  overflow-x: hidden;
}
#bbq .secnav ul{
  list-style:none; display:flex; gap:8px; padding:10px 14px;
  overflow-x:auto; scrollbar-width:none; -webkit-overflow-scrolling:touch;
  width: min-content; margin: 0 auto; max-width: 100%;
}
#bbq .secnav ul::-webkit-scrollbar{display:none;}
#bbq .secnav li{flex:none;}
#bbq .secnav a{
  display:block; text-decoration:none; white-space:nowrap;
  padding:6px 14px; border-radius:999px;
  border:1.5px dashed var(--red); color:var(--red-deep); background:transparent;
  font-weight:600; font-size:10.5px; letter-spacing:.14em; text-transform:uppercase;
  transition:background .12s ease, color .12s ease;
}
#bbq .secnav a:hover{background:rgba(210,38,48,.09);}
#bbq .secnav a.on{background:var(--red); border-style:solid; color:#FFF9EE;}

#bbq .body{padding:30px 34px 32px;}

/* ---------- header ---------- */
#bbq .eyebrow{
  text-align:center; font-weight:400; font-size:10.5px; letter-spacing:.22em;
  text-transform:uppercase; color:var(--ink-soft); padding-left:.22em;
}
#bbq .title{
  text-align:center; font-family:'Ultra',Georgia,serif; font-weight:400;
  font-size:52px; line-height:.94; letter-spacing:-.01em; margin-top:8px;
  text-shadow:2px 2px 0 rgba(210,38,48,.18);
}
#bbq .title .red{color:var(--red);}

#bbq .when{
  text-align:center; font-family:'Ultra',Georgia,serif; font-size:30px; line-height:1;
  margin-top:20px;
}
#bbq .when small{
  display:block; font-family:'Oswald',sans-serif; font-weight:500; font-size:12px;
  letter-spacing:.26em; text-transform:uppercase; color:var(--red);
  margin-top:12px; padding-left:.26em;
}
#bbq .where{
  text-align:center; font-weight:400; font-size:15px; letter-spacing:.03em;
  line-height:1.4; margin-top:12px;
}
#bbq .where-soft{font-weight:300; font-size:13.5px; color:var(--ink-soft);}

#bbq .premise{margin-top:22px; text-align:center;}
#bbq .premise .lead{
  font-family:'Caveat',cursive; font-weight:700; font-size:24px;
  color:var(--ink-soft); line-height:1.2;
}
#bbq .premise .stakes{
  margin-top:9px; font-weight:500; font-size:11px; letter-spacing:.15em;
  text-transform:uppercase; color:var(--ribbon); line-height:1.5;
}

#bbq .btn{
  display:block; width:max-content; max-width:100%; margin:22px auto 0;
  background:var(--red); color:#FFF9EE; text-decoration:none;
  font-weight:600; font-size:14px; letter-spacing:.08em;
  padding:12px 26px; border-radius:999px;
  box-shadow:0 6px 16px rgba(156,23,33,.32);
  transition:transform .08s ease, box-shadow .12s ease;
}
#bbq .btn:hover{transform:translateY(-1px); box-shadow:0 8px 20px rgba(156,23,33,.4);}
#bbq .btn:active{transform:translateY(0);}
#bbq a:focus-visible, #bbq button:focus-visible{outline:2.5px solid var(--ribbon); outline-offset:3px;}

#bbq .logistics{
  display:flex; justify-content:center; flex-wrap:wrap; margin-top:16px;
  font-weight:400; font-size:10px; letter-spacing:.09em; text-transform:uppercase;
}
#bbq .logistics span{padding:0 9px;}
#bbq .logistics span + span{border-left:1px solid rgba(30,26,23,.3);}

/* ---------- the aisle marker: dashed rule doubles as section header ---------- */
#bbq .rule{
  display:flex; align-items:center; gap:12px; margin:38px 0 18px;
  font-weight:500; font-size:10.5px; letter-spacing:.24em; text-transform:uppercase;
  color:var(--red-deep); white-space:nowrap;
  scroll-margin-top:var(--stickyH);   /* so the nav doesn't cover the heading */
}
#bbq .rule::before, #bbq .rule::after{
  content:""; flex:1; border-top:2px dashed rgba(156,23,33,.45);
}

#bbq .ssub{
  text-align:center; margin:22px 0 12px;
  font-family:'Caveat',cursive; font-weight:700; font-size:22px; color:var(--ink-soft);
}

/* ---------- rack intro ---------- */
#bbq .rack-intro{
  position:relative; max-width:520px; margin:0 auto;
  border:2px dashed rgba(156,23,33,.4); border-radius:5px;
  padding:24px 128px 22px 24px;   /* right gutter parks the burst */
  min-height:132px; display:flex; flex-direction:column; justify-content:center;
  background:rgba(255,255,255,.4);
}
#bbq .rack-lead{
  font-family:'Caveat',cursive; font-weight:700; font-size:23px;
  color:var(--ink); line-height:1.15; margin-bottom:8px;
}
#bbq .rack-note{font-size:14px; line-height:1.6; color:var(--ink);}

#bbq .burst{
  position:absolute; right:-6px; top:50%;
  width:112px; height:112px; transform:translateY(-50%) rotate(5deg);
  display:flex; align-items:center; justify-content:center;
  color:var(--red-deep); text-align:center; background:var(--tag);
  filter:drop-shadow(0 4px 8px rgba(0,0,0,.26));
  clip-path:polygon(
    50% 0%, 59% 9%, 71% 4%, 76% 16%, 89% 15%, 89% 28%, 100% 33%, 94% 44%,
    100% 56%, 89% 63%, 91% 76%, 78% 78%, 74% 90%, 62% 87%, 52% 97%, 42% 87%,
    30% 92%, 25% 80%, 12% 80%, 12% 67%, 2% 60%, 8% 48%, 0% 36%, 11% 30%,
    9% 17%, 22% 16%, 27% 4%, 39% 9%);
}
#bbq .burst .text-content{transform:rotate(-19deg);}
#bbq .burst .b1{font-weight:500; font-size:8.5px; letter-spacing:.16em; text-transform:uppercase;}
#bbq .burst .b2{font-family:'Ultra',Georgia,serif; font-size:20px; line-height:1; margin:2px 0;}
#bbq .burst .b3{font-weight:500; font-size:8px; letter-spacing:.1em; text-transform:uppercase; line-height:1.3;}

/* ---------- the rack ---------- */
#bbq .rack-wrap{margin-top:20px;}
#bbq .rack-hello{
  text-align:center; margin-bottom:14px;
  font-family:'Caveat',cursive; font-weight:700; font-size:20px; color:var(--ink-soft);
}
#bbq .rack-anon{
  max-width:460px; margin:0 auto 16px; text-align:center;
  padding:16px 18px; border-radius:5px;
  background:rgba(46,110,142,.08); border:1px solid rgba(46,110,142,.28);
}
#bbq .rack-anon-lead{
  font-family:'Caveat',cursive; font-weight:700; font-size:20px; color:var(--ink);
}
#bbq .rack-anon-note{
  margin-top:6px; font-size:13.5px; line-height:1.55; color:var(--ink-soft);
}
#bbq .rack-anon .rbtn{
  display:inline-block; width:auto; margin-top:12px; text-decoration:none;
}

/* Your list -- sits above the gate so a returning guest can see what they
   claimed without opening the rack. */
#bbq .mylist{
  max-width:460px; margin:0 auto 14px; padding:12px 16px 14px;
  border-radius:5px; text-align:center;
  background:rgba(46,110,142,.09); border:1px solid rgba(46,110,142,.3);
}
#bbq .mylist-head{
  font-weight:600; font-size:10px; letter-spacing:.2em; text-transform:uppercase;
  color:var(--ribbon);
}
#bbq .mylist-items{
  list-style:none; display:flex; flex-wrap:wrap; gap:7px; justify-content:center;
  margin-top:9px;
}
#bbq .mylist-items li{
  display:inline-flex; align-items:center; gap:5px;
  padding:4px 6px 4px 11px; border-radius:999px;
  background:var(--paper); border:1px solid rgba(46,110,142,.35);
}
#bbq .ml-name{font-size:13px; color:var(--ink);}
#bbq .ml-drop{
  cursor:pointer; font-family:inherit; line-height:1;
  width:17px; height:17px; padding:0; border-radius:50%;
  background:rgba(30,26,23,.08); border:none; color:var(--ink-soft); font-size:13px;
}
#bbq .ml-drop:hover:not(:disabled){background:rgba(210,38,48,.16); color:var(--red-deep);}
#bbq .ml-drop:disabled{opacity:.5; cursor:default;}

/* The add-on. Reads as an upsell, so it's deliberately quieter than a real
   button -- underlined text, no fill. Only appears once you own the card. */
#bbq .addon{
  display:block; width:100%; margin-top:7px; padding:4px 0;
  cursor:pointer; font-family:inherit; background:none; border:none;
  font-size:11px; font-weight:600; letter-spacing:.08em; text-transform:uppercase;
  color:var(--ribbon); text-decoration:underline; text-underline-offset:3px;
}
#bbq .addon:hover{color:var(--red);}
#bbq .addon-done{
  display:block; margin-top:7px; padding:4px 0; text-align:center;
  font-size:10px; font-weight:500; letter-spacing:.12em; text-transform:uppercase;
  color:var(--ink-soft);
}

/* the door */
#bbq .rack-gate{
  display:flex; align-items:center; gap:12px; width:100%; cursor:pointer;
  font-family:inherit; text-align:left;
  padding:14px 18px; border-radius:5px;
  background:var(--tag); border:2px solid var(--red-deep);
  color:var(--red-deep);
  box-shadow:0 4px 12px rgba(156,23,33,.16);
}
#bbq .rack-gate .gate-label{
  font-family:'Ultra',Georgia,serif; font-size:16px; line-height:1; flex:none;
}
#bbq .rack-gate .gate-count{
  flex:1; font-weight:500; font-size:10.5px; letter-spacing:.1em; text-transform:uppercase;
  opacity:.85; text-align:right;
}
#bbq .rack-gate .gate-chev{flex:none; font-size:10px;}
#bbq .rack-gate.is-open{background:transparent; box-shadow:none;}

#bbq .rack-error{
  max-width:460px; margin:14px auto 0; padding:9px 14px; border-radius:4px;
  background:rgba(210,38,48,.1); border:1px solid rgba(156,23,33,.35);
  color:var(--red-deep); font-size:13.5px; text-align:center;
}

#bbq .rack-group{margin-top:26px;}
#bbq .rack-group-head{
  text-align:center; margin-bottom:12px;
  font-weight:600; font-size:11.5px; letter-spacing:.28em; text-transform:uppercase;
  color:var(--red-deep);
}
/* Saved-for-you group. Tinted and boxed so it reads as addressed to you
   rather than as just another category heading. */
#bbq .rack-group.is-reserved{
  padding:16px 14px 18px; border-radius:6px;
  background:rgba(246,197,68,.2); border:2px dashed rgba(156,23,33,.4);
}
#bbq .rack-group.is-reserved .rack-group-head{color:var(--red-deep);}

#bbq .rack-grid{
  display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:12px;
}

#bbq .rcard{
  position:relative; display:flex; flex-direction:column;
  padding:16px 16px 14px; border-radius:5px;
  background:rgba(255,255,255,.55);
  border:1.5px solid rgba(30,26,23,.18);
}
#bbq .rcard-title{
  font-family:'Ultra',Georgia,serif; font-weight:400; font-size:17px; line-height:1.12;
}
#bbq .rcard-blurb{margin-top:6px; font-size:13px; line-height:1.5; color:var(--ink-soft);}
/* Host note -- script face and a red rule so it reads as Hollyn talking,
   not as more of the dish description above it. */
#bbq .rcard-note{
  margin-top:8px; padding-left:9px;
  border-left:2px solid rgba(210,38,48,.5);
  font-family:'Caveat',cursive; font-weight:700; font-size:16px; line-height:1.25;
  color:var(--ink);
}
#bbq .rcard.taken .rcard-note{opacity:.6;}

#bbq .rcard-meta{
  margin-top:8px; font-size:10px; font-weight:500; letter-spacing:.14em; text-transform:uppercase;
  color:var(--ink-soft);
}
#bbq .rcard-meta .dot{padding:0 6px;}
#bbq .rcard-meta a{color:var(--red); text-decoration:underline; text-underline-offset:2px;}
#bbq .rcard-who{
  margin-top:10px; font-family:'Caveat',cursive; font-weight:700; font-size:17px;
  line-height:1.2; color:var(--ink);
}
#bbq .rcard-action{margin-top:auto; padding-top:12px;}

/* status chip -- what browsers without a link see */
#bbq .rcard-status{
  display:inline-block; padding:4px 11px; border-radius:999px;
  font-size:9.5px; font-weight:600; letter-spacing:.16em; text-transform:uppercase;
}
#bbq .st-open{background:rgba(63,125,46,.14); color:#3F7D2E; border:1px solid rgba(63,125,46,.4);}
#bbq .st-claimed{background:rgba(30,26,23,.07); color:var(--ink-soft); border:1px solid rgba(30,26,23,.2);}
#bbq .st-head-to-head{background:var(--red); color:#FFF9EE; border:1px solid var(--red-deep);}
#bbq .st-always-open{background:rgba(46,110,142,.12); color:var(--ribbon); border:1px solid rgba(46,110,142,.4);}

/* state: one claim. Greyed, but still challengeable. */
#bbq .rcard.taken{background:rgba(120,110,95,.11); border-color:rgba(30,26,23,.12);}
#bbq .rcard.taken .rcard-title{color:#7A7161;}
#bbq .rcard.taken .rcard-blurb, #bbq .rcard.taken .rcard-meta{opacity:.6;}
#bbq .rcard.taken .rcard-who{color:var(--ink-soft);}

/* state: yours */
#bbq .rcard.mine{border-color:var(--ribbon); box-shadow:0 0 0 2px rgba(46,110,142,.16) inset;}

/* state: head to head. Loudest thing on the board. */
#bbq .rcard.duel{
  background:rgba(246,197,68,.26); border:2px solid var(--red);
  box-shadow:0 4px 14px rgba(156,23,33,.16);
}
#bbq .rcard.duel .rcard-who{
  font-family:'Ultra',Georgia,serif; font-size:15px; color:var(--red-deep); line-height:1.25;
}

/* state: pantry. Never greys. */
#bbq .rcard.pantry{background:rgba(255,255,255,.35); border-style:dashed;}

#bbq .duel-flag, #bbq .mine-flag{
  position:absolute; top:-9px; left:12px; padding:2px 9px; border-radius:999px;
  font-size:9px; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:#FFF9EE;
}
#bbq .duel-flag{background:var(--red);}
#bbq .mine-flag{background:var(--ribbon);}

#bbq .rbtn{
  width:100%; cursor:pointer; font-family:inherit;
  background:var(--red); color:#FFF9EE; border:1.5px solid var(--red);
  font-weight:600; font-size:11.5px; letter-spacing:.1em; text-transform:uppercase;
  padding:9px 12px; border-radius:999px;
  transition:transform .08s ease, opacity .12s ease;
}
#bbq .rbtn:hover:not(:disabled){transform:translateY(-1px);}
#bbq .rbtn:disabled{opacity:.5; cursor:default;}
#bbq .rbtn.ghost{
  background:transparent; color:var(--ink-soft); border-color:rgba(30,26,23,.3);
}
#bbq .rbtn.challenge{background:var(--tag); color:var(--red-deep); border-color:var(--red-deep);}

/* ---------- challenge modal ---------- */
#bbq .modal-scrim{
  position:fixed; inset:0; z-index:60; padding:20px;
  background:rgba(20,14,12,.68);
  display:flex; align-items:center; justify-content:center;
}
#bbq .modal{
  width:100%; max-width:380px; text-align:center;
  background:var(--paper); border-radius:6px; padding:28px 24px 22px;
  border:2px solid var(--red);
  box-shadow:0 24px 50px rgba(0,0,0,.5);
}
#bbq .modal-kicker{
  font-weight:600; font-size:10.5px; letter-spacing:.2em; text-transform:uppercase;
  color:var(--red-deep);
}
#bbq .modal-dish{
  margin-top:14px; font-family:'Ultra',Georgia,serif; font-size:26px; line-height:1.05;
}
#bbq .modal-vs{
  margin-top:12px; font-family:'Ultra',Georgia,serif; font-size:20px; color:var(--red);
  line-height:1.1;
}
#bbq .modal-vs span{
  display:block; font-family:'Caveat',cursive; font-size:18px; color:var(--ink-soft); margin:2px 0;
}
#bbq .modal-fine{
  margin-top:14px; font-size:13px; line-height:1.55; color:var(--ink-soft);
}
#bbq .modal-actions{display:flex; gap:10px; margin-top:20px;}

/* ---------- parking ---------- */
#bbq .notes{list-style:none; margin:0 auto; max-width:540px;}
#bbq .notes li{
  position:relative; padding:5px 0 5px 20px; font-size:14.5px; line-height:1.55; color:var(--ink);
}
#bbq .notes li::before{content:"\\2022"; position:absolute; left:4px; color:var(--red); font-weight:700;}
#bbq .notes b{font-weight:600;}

#bbq .mapfig{margin:18px 0 0;}
#bbq .map-btn{
  display:block; width:100%; padding:0; border:none; background:none;
  cursor:zoom-in; position:relative; font-family:inherit;
}
#bbq .map{
  display:block; width:100%; height:auto;
  border-radius:5px; box-shadow:0 6px 16px rgba(0,0,0,.14);
}
#bbq .map-zoom{
  position:absolute; right:10px; bottom:10px;
  background:rgba(30,26,23,.72); color:#FFF9EE;
  padding:4px 10px; border-radius:999px;
  font-size:9px; font-weight:600; letter-spacing:.16em; text-transform:uppercase;
}
#bbq .map-cap{
  display:flex; flex-direction:column; align-items:center; gap:5px;
  margin-top:14px; text-align:center;
}
#bbq .map-dir{
  display:inline-block; text-decoration:none;
  background:var(--ribbon); color:#FFF9EE;
  padding:9px 20px; border-radius:999px;
  font-weight:600; font-size:11px; letter-spacing:.12em; text-transform:uppercase;
}
#bbq .map-dir-note{font-size:12px; color:var(--ink-soft); line-height:1.4;}

/* enlarged */
#bbq .map-scrim{
  position:fixed; inset:0; z-index:70; padding:16px;
  background:rgba(20,14,12,.86);
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px;
  overflow-y:auto; overscroll-behavior:contain;
}
#bbq .map-big{
  width:100%; max-width:900px;
  display:flex; flex-direction:column; align-items:center; gap:14px;
}
/* Targets .map on the inline <svg>, not an <img>. preserveAspectRatio
   letterboxes inside the box, so max-height can't squash it. */
#bbq .map-big .map{
  width:100%; height:auto; max-height:76vh;
  border-radius:6px; box-shadow:0 20px 44px rgba(0,0,0,.5);
}
/* .rbtn.map-close, not .map-close -- it has to out-specify .rbtn.ghost */
#bbq .rbtn.map-close{
  width:auto; flex:none; padding:10px 30px;
  background:var(--paper); color:var(--ink); border-color:var(--paper);
}
#bbq .map-hold{
  max-width:460px; margin:18px auto 0; padding:18px; text-align:center;
  border:2px dashed rgba(30,26,23,.22); border-radius:5px;
  font-size:12px; font-weight:500; letter-spacing:.14em; text-transform:uppercase;
  color:var(--ink-soft);
}

/* ---------- pool ---------- */
#bbq .pool-lead{
  text-align:center; max-width:520px; margin:0 auto 18px;
  font-size:14.5px; line-height:1.6; color:var(--ink);
}
#bbq .sched{list-style:none; margin:0 auto; max-width:440px;}
#bbq .sched li{
  display:flex; align-items:baseline; gap:12px;
  padding:8px 12px; border-radius:3px; font-size:15px; line-height:1.3;
  border-bottom:1px solid rgba(30,26,23,.11);
}
#bbq .sched li:last-child{border-bottom:none;}
#bbq .sched .t{flex:none; width:54px; font-weight:600; letter-spacing:.05em; font-variant-numeric:tabular-nums;}
#bbq .sched .s{flex:none; width:70px; font-weight:600; font-size:11.5px; letter-spacing:.16em; text-transform:uppercase;}
#bbq .sched .w{flex:1; font-size:13px; color:var(--ink-soft);}
#bbq .sched .open{background:rgba(46,110,142,.11);}
#bbq .sched .open .s{color:var(--ribbon);}
#bbq .sched .closed .t{opacity:.6;}
#bbq .sched .closed .s{color:var(--ink-soft); opacity:.75;}

#bbq .rules{list-style:none; margin:0 auto; max-width:540px;}
#bbq .rules li{
  position:relative; padding:9px 0 9px 22px; font-size:14.5px; line-height:1.6; color:var(--ink);
  border-bottom:1px solid rgba(30,26,23,.11);
}
#bbq .rules li:last-child{border-bottom:none;}
#bbq .rules li::before{
  content:"\\2713"; position:absolute; left:2px; top:9px;
  color:var(--red); font-weight:700; font-size:13px;
}
#bbq .rules b{font-weight:600;}

#bbq .band{
  display:inline-block; padding:1px 8px; border-radius:999px;
  font-size:11.5px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:#fff;
}
#bbq .bd-green{background:#3F7D2E;}
#bbq .bd-yellow{background:#B58600;}
#bbq .bd-red{background:var(--red);}

/* ---------- activities ---------- */
#bbq .act{list-style:none; margin:0 auto; max-width:540px;}
#bbq .act li{
  padding:9px 0; font-size:15px; line-height:1.55; color:var(--ink);
  border-bottom:1px solid rgba(30,26,23,.11);
}
#bbq .act li:last-child{border-bottom:none;}
#bbq .act-name{font-weight:600;}

/* ---------- food ---------- */
#bbq .course{
  text-align:center; margin:20px 0 8px; font-weight:600; letter-spacing:.28em;
  text-transform:uppercase; font-size:11.5px; color:var(--red-deep);
}
#bbq .menu{list-style:none;}
#bbq .menu li{text-align:center; font-size:18px; line-height:1.4; color:var(--ink); padding:5px 0;}
#bbq .menu .name{font-weight:500;}
#bbq .menu .mnote{color:var(--ink-soft); font-size:14px;}
#bbq .menunote{
  display:flex; align-items:center; justify-content:center; gap:6px;
  text-align:center; max-width:460px; margin:10px auto 0;
  font-size:13.5px; line-height:1.5; color:var(--ink-soft);
}
#bbq .cup{
  width:15px; height:15px; vertical-align:-2px; margin-right:2px;
  fill:currentColor; stroke:currentColor;
}

#bbq .badge{
  display:inline-flex; align-items:center; gap:4px; vertical-align:middle;
  font-size:10.5px; font-weight:600; letter-spacing:.09em; text-transform:uppercase;
  padding:2px 8px 2px 6px; border-radius:999px; margin-left:8px; position:relative; top:-1px;
}
#bbq .badge svg{width:12px; height:12px; fill:currentColor; flex:none;}
#bbq .b-veg{background:var(--veg-bg); color:var(--veg-fg);}
#bbq .b-vegan{background:var(--vegan-bg); color:var(--vegan-fg);}

#bbq .key{
  margin:18px auto 0; max-width:520px; padding-top:14px;
  border-top:1px solid rgba(30,26,23,.2);
  display:flex; flex-wrap:wrap; justify-content:center; gap:8px 18px;
  font-size:12.5px; color:var(--ink-soft);
}
#bbq .key .k{display:inline-flex; align-items:center; gap:6px;}
#bbq .key svg{width:13px; height:13px;}
#bbq .key .sw-veg{fill:var(--veg-fg);}
#bbq .key .sw-vegan{fill:var(--vegan-fg);}
#bbq .key b{font-weight:600;}

#bbq .accnote{
  text-align:center; max-width:520px; margin:24px auto 0;
  font-size:14.5px; line-height:1.55; color:var(--ink);
}
#bbq .accnote a{color:var(--red); font-weight:600; text-decoration:underline; text-underline-offset:2px;}

#bbq .signoff-art{
  display:block; width:100%; height:auto; max-width:540px; margin:6px auto 0;
}
#bbq .signoff{
  text-align:center;
  font-family:'Caveat',cursive; font-weight:700; font-size:20px; color:var(--ink-soft);
}

@media (max-width:560px){
  #bbq{padding:0 0 40px; --stickyH:92px;}
  #bbq .sheet{border-radius:0;}
  #bbq .banner{border-radius:0;}
  #bbq .body{padding:24px 18px 26px;}
  #bbq .banner{padding:12px 16px 15px;}
  #bbq .banner .kicker{font-size:9px; letter-spacing:.14em;}
  #bbq .banner .line{font-size:16px; letter-spacing:.22em; padding-left:.22em;}
  #bbq .lid-compact .lc-right{display:none;}
  #bbq .lid-compact .lc-title{font-size:15px;}
  #bbq .secnav ul{padding:8px 12px;}
  #bbq .secnav a{font-size:10px; padding:5px 12px;}
  #bbq .title{font-size:38px;}
  #bbq .when{font-size:25px;}
  #bbq .rule{font-size:9.5px; letter-spacing:.18em; gap:8px; margin:32px 0 16px;}

  /* burst drops below the copy instead of squeezing the gutter */
  #bbq .rack-intro{padding:22px 20px; min-height:0;}
  #bbq .burst{
    position:static; transform:rotate(4deg);
    width:104px; height:104px; margin:16px auto 0;
  }
  #bbq .rack-gate{flex-wrap:wrap; gap:4px 10px;}
  #bbq .rack-gate .gate-count{text-align:left; width:100%; order:3;}
  #bbq .rack-grid{grid-template-columns:1fr;}
  #bbq .sched li{gap:8px; padding:8px 4px;}
  #bbq .sched .t{width:46px; font-size:14px;}
  #bbq .sched .s{width:58px; font-size:10.5px; letter-spacing:.1em;}
  #bbq .sched .w{font-size:12px;}
}

@media (prefers-reduced-motion:reduce){
  #bbq .btn, #bbq .rbtn, #bbq .banner{transition:none;}
  #bbq .btn:hover, #bbq .rbtn:hover{transform:none;}
}
`;
