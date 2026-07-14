// app/bbq/page.js
// Self-contained BBQ details page. All styling is scoped under #bbq so the
// site's global styles (from layout.js) don't apply here, and this page's
// styles don't leak elsewhere. The `body` reset only affects this route while
// it's mounted. Drop real content into the spots marked  << EDIT >>.

export default function BbqPage() {
  return (
    <>
      <style>{css}</style>

      <div id="bbq">
        <div className="sheet">
          <div className="frame" />

          {/* ---------- header ---------- */}
          <p className="eyebrow">You&rsquo;re invited &middot; Tacoma</p>
          <h1 className="title">A Barbecue for<br />Chasm &amp; <span className="koda">Koda</span></h1>
          <p className="sub">two good dogs, well loved &mdash; come celebrate &rsquo;em, Texas style</p>
          <p className="meta">Saturday, July 25 &nbsp;&middot;&nbsp; 2pm &rsquo;til late</p>

          <a className="btn" href="sms:+19364251225&body=I'll be there!">Text me &mdash; &ldquo;I&rsquo;ll be there!&rdquo;</a>

          <div className="divider" />

          {/* ---------- parking ---------- */}
          <h2 className="shead">Parking</h2>
          <img className="map" src="https://hollyngrade.com/photos/bbq-info/parking-map.jpg" alt="Parking map for the block" />
          {/* <ul className="notes">
            <li><b>Best:</b> J St, right by the house &mdash; both sides open.</li>
            <li><b>Also great:</b> K St &mdash; both sides, a few more steps.</li>
            <li><b>Plenty of room:</b> I St by the school (one block over) &mdash; a slightly longer walk.</li>
            <li>Please don&rsquo;t park along the 53rd or 54th curbs &mdash; those are the neighbors&rsquo; spots.</li>
            <li>The alley is hosts-only &mdash; you&rsquo;ll see it, but please leave it clear.</li>
          </ul> */}

          <div className="divider" />

          {/* ---------- activities ---------- */}
          <h2 className="shead">Activities</h2>

          <p className="ssub">In honor of the boys</p>
          <ul className="act">
            <li>
              <span className="act-name">Rock painting.</span> A table for painting rocks for the
              boys&rsquo; graves &mdash; rocks, paints, and brushes provided. Feel free to bring your own if you'd like.
            </li>
            <li>
              <span className="act-name">Bracelet making.</span> Make a bracelet in the dogs&rsquo;
              colors: <span className="dog-red">red for Chasm</span> and <span className="dog-blue">blue for Koda</span>.
            </li>
          </ul>

          <p className="ssub">Summertime</p>
          <ul className="act">
            <li><span className="act-name">Pool on site.</span> It&rsquo;s right there in the yard &mdash; bring something to swim in if you&rsquo;d like to take a dip.</li>
            <li><span className="act-name">Cornhole.</span></li>
            <li>
              <span className="act-name">Firepit, after dark.</span> Evening folks, come by after work, you won&rsquo;t have missed a thing.
              I wouldn&rsquo;t protest s&rsquo;mores stuff; I&rsquo;ve got a few roasting sticks.
            </li>
          </ul>

          <div className="divider" />

          {/* ---------- food ---------- */}
          <h2 className="shead">Food</h2>
          <p className="ssub" style={{ marginTop: 0 }}>Texas barbecue &mdash; much of it the boys&rsquo; own favorites</p>

          <p className="course">Off the smoker &amp; grill</p>
          <ul className="menu">
            <li><span className="name">Brisket</span></li>
            <li><span className="name">BBQ chicken</span></li>
            <li><span className="name">Burgers</span> <span className="mnote">&mdash; beef &amp; Beyond</span><Badge kind="vegan" label="vegan option" /></li>
            <li><span className="name">Veggie kebabs</span><Badge kind="vegan" label="vegan" /></li>
          </ul>

          <p className="course">On the side</p>
          <ul className="menu">
            <li><span className="name">Jalape&ntilde;o poppers</span> <span className="mnote">&mdash; bacon-wrapped</span></li>
            <li><span className="name">Green bean casserole</span><Badge kind="veg" label="vegetarian" /></li>
          </ul>

          <p className="course">Something sweet</p>
          <ul className="menu">
            <li><span className="name">Banana pudding</span><Badge kind="veg" label="vegetarian" /></li>
            <li><span className="name">Peanut butter cookies</span><Badge kind="veg" label="vegetarian" /></li>
          </ul>

          <p className="course">To drink</p>
          <ul className="menu">
            <li><span className="name">Water &amp; sweet tea</span> <span className="mnote">&mdash; or bring your own</span></li>
          </ul>

          <p className="foodnote">Food&rsquo;s out all afternoon and the grill&rsquo;s on call for fresh burgers anytime. Just come hungry.</p>

          <div className="key">
            <span className="k"><Leaf className="sw-vegan" /> vegan</span>
            <span className="k"><Leaf className="sw-veg" /> vegetarian</span>
            <span className="k"><b>vegan option</b>&nbsp;= also made without meat</span>
          </div>

          <p className="accnote">Got a food allergy or need any other accommodation? <a href="sms:+19364251225&body=Hi Hollyn, a heads-up:">Text me</a> and I&rsquo;ll take care of it.</p>

          <div className="divider" />
          <p className="signoff">for Chasm &amp; Koda &mdash; good dogs, good barbecue</p>
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
  --paper:#E8CDA9; --paper-2:#E1C39B;
  --ink:#2A2320; --ink-soft:#6A5541;
  --chasm:#B0342A; --koda:#2E6E8E;
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

#bbq .sheet{
  position:relative; max-width:680px; margin:0 auto;
  padding:44px 44px 36px;
  background-color:var(--paper);
  background-image:
    radial-gradient(circle at 14% 8%, rgba(255,255,255,.28), rgba(255,255,255,0) 26%),
    radial-gradient(circle at 86% 96%, rgba(120,80,40,.14), rgba(120,80,40,0) 30%),
    repeating-linear-gradient(96deg, var(--paper) 0 3px, var(--paper-2) 3px 6px);
  border-radius:8px;
  box-shadow:0 30px 70px rgba(0,0,0,.55), 0 2px 0 rgba(255,255,255,.15) inset;
}
#bbq .frame{position:absolute; inset:16px; border:1.5px solid rgba(42,35,32,.3); border-radius:4px; pointer-events:none;}

#bbq .eyebrow{
  text-align:center; margin:0 0 4px; font-weight:500; font-size:11px;
  letter-spacing:.34em; text-transform:uppercase; color:var(--ink-soft); padding-left:.34em;
}
#bbq .title{
  text-align:center; margin:0;
  font-family:'Ultra','Rockwell Nova','Rockwell',Georgia,serif; font-weight:400;
  font-size:42px; line-height:.94; color:var(--ink); text-shadow:0 1px 0 rgba(255,255,255,.25);
}
#bbq .title .koda{color:var(--koda);}
#bbq .sub{
  text-align:center; margin:8px 0 0;
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
  font-size:24px; color:var(--ink-soft); line-height:1.1;
}
#bbq .meta{
  text-align:center; margin:12px 0 0; font-weight:500; font-size:15px;
  letter-spacing:.16em; text-transform:uppercase; color:var(--ink);
}

#bbq .btn{
  display:block; width:max-content; max-width:100%; margin:22px auto 0;
  background:var(--chasm); color:#FBF1E6; text-decoration:none;
  font-weight:600; font-size:15px; letter-spacing:.06em;
  padding:12px 26px; border-radius:999px;
  box-shadow:0 6px 16px rgba(120,30,20,.35);
  transition:transform .08s ease, box-shadow .12s ease;
}
#bbq .btn:hover{transform:translateY(-1px); box-shadow:0 8px 20px rgba(120,30,20,.42);}
#bbq .btn:active{transform:translateY(0);}

#bbq .divider{height:1.5px; background:rgba(42,35,32,.3); margin:30px 8px;}

#bbq .shead{
  text-align:center; margin:0 0 14px;
  font-family:'Ultra','Rockwell Nova','Rockwell',Georgia,serif; font-weight:400;
  font-size:24px; color:var(--ink);
}
#bbq .ssub{
  text-align:center; margin:25px 0 10px;
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
  font-size:21px; color:var(--ink-soft);
}

#bbq .map{
  display:block; width:100%; height:auto; margin:0 auto 14px;
  border-radius:6px; background:#fff; padding:8px;
  box-shadow:0 6px 16px rgba(0,0,0,.2);
}

#bbq .notes{list-style:none; margin:0 auto; padding:0; max-width:520px;}
#bbq .notes li{
  position:relative; padding:4px 0 4px 20px; font-size:14.5px; line-height:1.5; color:var(--ink);
}
#bbq .notes li::before{content:"•"; position:absolute; left:4px; color:var(--chasm); font-weight:700;}
#bbq .notes b{font-weight:600;}

#bbq .act{list-style:none; margin:0 auto 8px; padding:0; max-width:560px;}
#bbq .act li{
  padding:8px 0; font-size:15.5px; line-height:1.55; color:var(--ink);
  border-bottom:1px solid rgba(42,35,32,.12);
}
#bbq .act li:last-child{border-bottom:none;}
#bbq .act-name{font-weight:600;}
#bbq .dog-red{color:var(--chasm); font-weight:600;}
#bbq .dog-blue{color:var(--koda); font-weight:600;}

#bbq .course{
  text-align:center; margin:20px 0 8px; font-weight:600; letter-spacing:.28em;
  text-transform:uppercase; font-size:12px; color:var(--ink-soft);
}
#bbq .menu{list-style:none; margin:0; padding:0;}
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
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
  font-size:19px; color:var(--ink-soft); line-height:1.2;
}

#bbq .key{
  margin:18px auto 0; max-width:520px; padding-top:14px;
  border-top:1px solid rgba(42,35,32,.22);
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
#bbq .accnote a{color:var(--chasm); font-weight:600; text-decoration:underline; text-underline-offset:2px;}

#bbq .signoff{
  text-align:center; margin:0;
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
  font-size:20px; color:var(--ink-soft);
}

@media (max-width:560px){
  #bbq{padding:24px 10px 48px;}
  #bbq .sheet{padding:30px 22px 28px;}
  #bbq .frame{inset:10px;}
  #bbq .title{font-size:34px;}
  #bbq .shead{font-size:21px;}
}
`;