// app/bbq/page.js
// Self-contained BBQ details page. All styling is scoped under #bbq so the
// site's global styles (from layout.js) don't apply here, and this page's
// styles don't leak elsewhere. The `body` reset only affects this route while
// it's mounted.
//
// Design tokens, the ribbed lid banner, the dashed section rules and the
// starburst are lifted straight from bbq-invite-aug22-v11 so the card and the
// page read as the same piece of print. Spots marked << EDIT >> are the ones
// most likely to change.

export default function BbqPage() {
  return (
    <>
      <style>{css}</style>

      <div id="bbq">
        <div className="sheet">

          {/* ---------- the lid ---------- */}
          <div className="banner">
            <div className="kicker">
              <span>Sat 8/22 only</span>
              <span>Tacoma, WA</span>
            </div>
            <div className="line">Y&rsquo;all are invited</div>
          </div>

          <div className="body">

            {/* ---------- header ---------- */}
            <p className="eyebrow">Here, everything&rsquo;s better in the backyard</p>
            <h1 className="title">Backyard <span className="red">BBQ</span></h1>

            <p className="when">Saturday, Aug 22<small>2 pm &rsquo;til late</small></p>

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

            {/* ---------- recipe rack  << EDIT: swap for the real rack >> ---------- */}
            <div className="rule">The recipe rack</div>

            <div className="rack">
              <p className="rack-lead">Take a recipe off the rack and bring that&nbsp;dish.</p>
              <p className="rack-note">
                Recipes go up here soon &mdash; I&rsquo;ll text you a link when they do. Pick one,
                print it, bring it. Claimed recipes gray out, so you can always see what&rsquo;s
                already spoken for.
              </p>
              <div className="burst">
                <div className="text-content">
                  <div className="b1">Recipes</div>
                  <div className="b2">SOON</div>
                  <div className="b3">check back<br />this week</div>
                </div>
              </div>
            </div>
            <p className="rack-fine">Not into cooking? A case of A&amp;W root beer counts and always will.</p>

            {/* ---------- parking ---------- */}
            <div className="rule">Parking</div>

            <p className="ssub">Drop off first, then park</p>
            <ul className="notes">
              <li><b>Pull up to the house</b> and unload &mdash; your dish, your people, the pool bag. The driveway stays clear all day for exactly this.</li>
              <li><b>Then park on I St</b>, one block over by the school. Plenty of room, and an easy walk back with your hands empty.</li>
              <li>Please skip J St and K St &mdash; those are the neighbors&rsquo; spots (even if they&rsquo;re empty).</li>
              <li>The alley is residents-only. You&rsquo;ll see it, but please leave it clear.</li>
            </ul>

            <img className="map" src="https://hollyngrade.com/bbq/parking-map_8-2026.jpg" alt="Parking map for the block" />

            {/* ---------- pool ---------- */}
            <div className="rule">The pool</div>

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
            <div className="rule">Other doings</div>

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
            <div className="rule">Food</div>

            <p className="course">Off the grill</p>
            <ul className="menu">
              <li><span className="name">Brisket</span> <span className="mnote">&mdash; that part&rsquo;s on me</span></li>
              <li><span className="name">Burgers</span> <span className="mnote">&mdash; beef &amp; Beyond</span><Badge kind="vegan" label="vegan option" /></li>
            </ul>

            <p className="course">To drink</p>
            <ul className="menu">
              <li><span className="name">Water &amp; sweet tea</span> <span className="mnote">&mdash; or bring your own</span></li>
            </ul>

            <div className="key">
              <span className="k"><Leaf className="sw-vegan" /> vegan</span>
              <span className="k"><Leaf className="sw-veg" /> vegetarian</span>
              <span className="k"><b>vegan option</b>&nbsp;= also made without meat</span>
            </div>

            <p className="accnote">
              Got a food allergy or need any other accommodation?{' '}
              <a href="sms:+19364251225?&body=Hi Hollyn, a heads-up:">Text me</a> and I&rsquo;ll take care of it.
            </p>

            {/* <div className="rule">&nbsp;&middot;&nbsp;</div>
            <p className="signoff">come hungry, park on I St, don&rsquo;t run by the pool</p> */}

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

  min-height:100vh;
  background:#221c19;
  background-image:radial-gradient(circle at 50% 0%, #342c26 0%, #1b1613 70%);
  padding:40px 16px 64px;
  font-family:'Oswald','Arial Narrow',sans-serif;
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
}
#bbq *{box-sizing:border-box;}
#bbq p, #bbq h1, #bbq h2, #bbq ul{margin:0; padding:0;}

#bbq .sheet{
  position:relative; max-width:660px; margin:0 auto; overflow:hidden;
  border-radius:6px;
  background-color:var(--paper);
  background-image:
    radial-gradient(circle at 15% 6%, rgba(255,255,255,.5), rgba(255,255,255,0) 38%),
    radial-gradient(circle at 85% 94%, rgba(150,110,60,.13), rgba(150,110,60,0) 40%),
    repeating-linear-gradient(90deg, var(--paper) 0 4px, var(--paper-2) 4px 8px);
  background-blend-mode:normal,normal,soft-light;
  box-shadow:0 26px 60px rgba(0,0,0,.55);
}

/* ---------- ribbed screw-top lid ---------- */
#bbq .banner{
  position:relative;
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
#bbq a:focus-visible{outline:2.5px solid var(--ribbon); outline-offset:3px;}

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
}
#bbq .rule::before, #bbq .rule::after{
  content:""; flex:1; border-top:2px dashed rgba(156,23,33,.45);
}

#bbq .ssub{
  text-align:center; margin:22px 0 12px;
  font-family:'Caveat',cursive; font-weight:700; font-size:22px; color:var(--ink-soft);
}

/* ---------- recipe rack ---------- */
#bbq .rack{
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
#bbq .rack-fine{
  text-align:center; max-width:520px; margin:12px auto 0;
  font-weight:300; font-size:10.5px; letter-spacing:.07em; text-transform:uppercase;
  color:var(--ink-soft);
}

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

/* ---------- parking ---------- */
#bbq .notes{list-style:none; margin:0 auto; max-width:540px;}
#bbq .notes li{
  position:relative; padding:5px 0 5px 20px; font-size:14.5px; line-height:1.55; color:var(--ink);
}
#bbq .notes li::before{content:"\\2022"; position:absolute; left:4px; color:var(--red); font-weight:700;}
#bbq .notes b{font-weight:600;}

#bbq .map{
  display:block; width:100%; height:auto; margin:18px auto 0;
  border-radius:5px; background:#fff; padding:8px;
  box-shadow:0 6px 16px rgba(0,0,0,.18);
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

#bbq .badge{
  display:inline-flex; align-items:center; gap:4px; vertical-align:middle;
  font-size:10.5px; font-weight:600; letter-spacing:.09em; text-transform:uppercase;
  padding:2px 8px 2px 6px; border-radius:999px; margin-left:8px; position:relative; top:-1px;
}
#bbq .badge svg{width:12px; height:12px; fill:currentColor; flex:none;}
#bbq .b-veg{background:var(--veg-bg); color:var(--veg-fg);}
#bbq .b-vegan{background:var(--vegan-bg); color:var(--vegan-fg);}

#bbq .foodnote{
  text-align:center; max-width:520px; margin:14px auto 0;
  font-family:'Caveat',cursive; font-weight:700; font-size:19px;
  color:var(--ink-soft); line-height:1.2;
}

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

#bbq .signoff{
  text-align:center;
  font-family:'Caveat',cursive; font-weight:700; font-size:20px; color:var(--ink-soft);
}

@media (max-width:560px){
  #bbq{padding:22px 8px 48px;}
  #bbq .body{padding:24px 20px 26px;}
  #bbq .banner{padding:12px 16px 15px;}
  #bbq .banner .kicker{font-size:9px; letter-spacing:.14em;}
  #bbq .banner .line{font-size:16px; letter-spacing:.22em; padding-left:.22em;}
  #bbq .title{font-size:38px;}
  #bbq .when{font-size:25px;}
  #bbq .rule{font-size:9.5px; letter-spacing:.18em; gap:8px; margin:32px 0 16px;}

  /* burst drops below the copy instead of squeezing the gutter */
  #bbq .rack{padding:22px 20px; min-height:0;}
  #bbq .burst{
    position:static; transform:rotate(4deg);
    width:104px; height:104px; margin:16px auto 0;
  }
  #bbq .sched li{gap:8px; padding:8px 4px;}
  #bbq .sched .t{width:46px; font-size:14px;}
  #bbq .sched .s{width:58px; font-size:10.5px; letter-spacing:.1em;}
  #bbq .sched .w{font-size:12px;}
}

@media (prefers-reduced-motion:reduce){
  #bbq .btn{transition:none;}
  #bbq .btn:hover{transform:none;}
}
`;