// app/bracelets/page.js
// Self-contained bracelet how-to page, styled to match /bbq. All styling is
// scoped under #bracelets so the site's global styles don't apply here, and
// this page's styles don't leak elsewhere. This is a good target for the QR
// code on the printed how-to card ("scan for photo guides & everything in one
// place"). Edit the spots marked  << EDIT >>.

export default function BraceletsPage() {
  return (
    <>
      <style>{css}</style>

      <div id="bracelets">
        <div className="sheet">
          <div className="frame" />

          {/* ---------- header ---------- */}
          <p className="eyebrow">At the bracelet table</p>
          <h1 className="title">Wear Their<br />Colors</h1>
          <p className="sub">a spiral bracelet for <span className="koda">Koda</span> &amp; <span className="chasm">Chasm</span></p>
          <p className="meta">Four strands &middot; one simple knot &middot; about 20 minutes</p>

          <Spiral />

          <div className="divider" />

          {/* ---------- what you'll need ---------- */}
          <h2 className="shead">What you&rsquo;ll need</h2>
          <ul className="need">
            <li>Embroidery floss in <span className="dog-red">red</span> &amp; <span className="dog-blue">blue</span> (or whatever color, really) &mdash; two strands of each</li>
            <li>Scissors</li>
            <li>Tape</li>
          </ul>
          <p className="accnote">(Hopefully scissors and tape are provided...)</p>

          <div className="divider" />

          {/* ---------- how to make it ---------- */}
          <h2 className="shead">How to make it</h2>
          <ol className="steps">
            <li className="step">
              <span className="badge b-chasm">1</span>
              <div className="step-body">
                <h3>Cut &amp; tie</h3>
                <p>Cut <b>4 strands</b> about an arm&rsquo;s length each (fingertip to shoulder, twice over) &mdash; two red, two blue. Line them up and tie one knot near the top, leaving a small loop.</p>
              </div>
            </li>
            <li className="step">
              <span className="badge b-koda">2</span>
              <div className="step-body">
                <h3>Anchor it</h3>
                <p>Tape the knot to the table, or clip it to a clipboard, so the strands stay straight and still while you work.</p>
              </div>
            </li>
            <li className="step">
              <span className="badge b-chasm">3</span>
              <div className="step-body">
                <h3>Knot, again &amp; again</h3>
                <p>Pick one color. Hold the other three straight as a &ldquo;core.&rdquo; Cross your color over them in a shape like the number <b>4</b>, tuck the end under and up through the loop, and pull the knot snug to the top. Repeat &mdash; it spirals on its own.</p>
              </div>
            </li>
            <li className="step">
              <span className="badge b-koda">4</span>
              <div className="step-body">
                <h3>Switch &amp; finish</h3>
                <p>After about <b>10&ndash;15 knots</b>, switch to the other color and keep going. When it wraps around a wrist, tie a knot and trim the ends. Done.</p>
              </div>
            </li>
          </ol>

          <div className="divider" />

          {/* ---------- photo guides (the sources) ---------- */}
          <h2 className="shead">Photo guides</h2>
          <p className="ssub" style={{ marginTop: -10 }}>step-by-step, with pictures</p>
          <ul className="guides">
            <li>
              <a href="https://abeautifulmess.com/how-to-make-friendship-bracelets/" target="_blank" rel="noopener noreferrer">
                <span className="g-name">A Beautiful Mess &mdash; friendship bracelets</span> <span className="g-src">abeautifulmess.com</span>
                <span className="g-note">The Chinese staircase (this card&rsquo;s method), plus two more patterns if anyone wants to try this on hard mode.</span>
              </a>
            </li>
            <li>
              <a href="https://sarahmaker.com/how-to-make-friendship-bracelets/" target="_blank" rel="noopener noreferrer">
                <span className="g-name">Sarah Maker &mdash; how to make friendship bracelets</span> <span className="g-src">sarahmaker.com</span>
                <span className="g-note">Lots of photos &mdash; walks through all four basic knots with a picture at every step.</span>
              </a>
            </li>
          </ul>

          {/* Want your OWN step photos here instead? Drop them in and uncomment:
          <div className="shots">
            <img src="https://hollyngrade.com/photos/bracelets/step-1.jpg" alt="Cutting and tying the strands" />
            <img src="https://hollyngrade.com/photos/bracelets/step-2.jpg" alt="Anchoring the knot to the table" />
            <img src="https://hollyngrade.com/photos/bracelets/step-3.jpg" alt="Making the number-4 knot" />
            <img src="https://hollyngrade.com/photos/bracelets/step-4.jpg" alt="Switching colors" />
          </div>
          */}

          {/* <p className="accnote">New to this? It&rsquo;s genuinely easy &mdash; and if you get stuck, <a href="sms:+19364251225?&body=Hi Hollyn, bracelet help:">text me</a> and I&rsquo;ll walk you through it.</p> */}
          <p className="accnote">Having trouble? Just holler "<span className="matt">Maaaaaattt</span>" (with lots of A's and a few extra T's), and he&rsquo;ll come over.</p>

          <div className="divider" />
          <div className="colors">
            <span><span className="dot d-chasm" />red for Chasm</span>
            <span><span className="dot d-koda" />blue for Koda</span>
          </div>
          {/* <p className="signoff">for Chasm &amp; Koda &mdash; go slow, don&rsquo;t sweat mistakes</p> */}
        </div>
      </div>
    </>
  );
}

function Spiral() {
  return (
    <svg className="spiral-motif" width="86" height="108" viewBox="0 0 96 120" aria-hidden="true">
      <path d="M48 8 a10 10 0 1 1 -0.1 0" fill="none" stroke="#2A2320" strokeWidth="2.4" opacity="0.55" />
      <g strokeLinecap="round">
        <line x1="34" y1="30" x2="62" y2="38" stroke="#B0342A" strokeWidth="7" />
        <line x1="34" y1="40" x2="62" y2="48" stroke="#2E6E8E" strokeWidth="7" />
        <line x1="34" y1="50" x2="62" y2="58" stroke="#B0342A" strokeWidth="7" />
        <line x1="34" y1="60" x2="62" y2="68" stroke="#2E6E8E" strokeWidth="7" />
        <line x1="34" y1="70" x2="62" y2="78" stroke="#B0342A" strokeWidth="7" />
        <line x1="34" y1="80" x2="62" y2="88" stroke="#2E6E8E" strokeWidth="7" />
        <line x1="34" y1="90" x2="62" y2="98" stroke="#B0342A" strokeWidth="7" />
      </g>
      <path d="M40 100 q-4 10 -8 14" fill="none" stroke="#B0342A" strokeWidth="2.4" />
      <path d="M56 100 q4 10 8 14" fill="none" stroke="#2E6E8E" strokeWidth="2.4" />
    </svg>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Ultra&family=Oswald:wght@300;400;500;600;700&family=Caveat:wght@600;700&display=swap');

/* neutralize the site's body styling for this route only */
body { margin:0; padding:0; background:#1b1613; }

#bracelets{
  --paper:#E8CDA9; --paper-2:#E1C39B;
  --ink:#2A2320; --ink-soft:#6A5541;
  --chasm:#B0342A; --koda:#2E6E8E;
  min-height:100vh;
  background:#221c19;
  background-image:radial-gradient(circle at 50% 0%, #342c26 0%, #1b1613 70%);
  padding:40px 16px 64px;
  font-family:'Oswald','Arial Narrow',sans-serif;
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
}
#bracelets *{box-sizing:border-box;}

#bracelets .sheet{
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
#bracelets .frame{position:absolute; inset:16px; border:1.5px solid rgba(42,35,32,.3); border-radius:4px; pointer-events:none;}

#bracelets .eyebrow{
  text-align:center; margin:0 0 4px; font-weight:500; font-size:11px;
  letter-spacing:.34em; text-transform:uppercase; color:var(--ink-soft); padding-left:.34em;
}
#bracelets .title{
  text-align:center; margin:0;
  font-family:'Ultra','Rockwell Nova','Rockwell',Georgia,serif; font-weight:400;
  font-size:42px; line-height:.94; color:var(--ink); text-shadow:0 1px 0 rgba(255,255,255,.25);
}
#bracelets .title .koda{color:var(--koda);}
#bracelets .title .chasm, #bracelets .matt{color:var(--chasm);}
#bracelets .sub{
  text-align:center; margin:8px 0 0;
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
  font-size:24px; color:var(--ink-soft); line-height:1.1;
}
#bracelets .sub .chasm{color:var(--chasm);}
#bracelets .sub .koda{color:var(--koda);}
#bracelets .meta{
  text-align:center; margin:12px 0 0; font-weight:500; font-size:14px;
  letter-spacing:.14em; text-transform:uppercase; color:var(--ink);
}
#bracelets .spiral-motif{display:block; margin:16px auto 0;}

#bracelets .divider{height:1.5px; background:rgba(42,35,32,.3); margin:30px 8px;}

#bracelets .shead{
  text-align:center; margin:0 0 14px;
  font-family:'Ultra','Rockwell Nova','Rockwell',Georgia,serif; font-weight:400;
  font-size:24px; color:var(--ink);
}
#bracelets .ssub{
  text-align:center; margin:25px 0 14px;
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
  font-size:21px; color:var(--ink-soft);
}

#bracelets .need{list-style:none; margin:0 auto; padding:0; max-width:520px;}
#bracelets .need li{
  position:relative; padding:5px 0 5px 22px; font-size:16px; line-height:1.5; color:var(--ink);
}
#bracelets .need li::before{content:"•"; position:absolute; left:6px; color:var(--chasm); font-weight:700;}
#bracelets .dog-red{color:var(--chasm); font-weight:600;}
#bracelets .dog-blue{color:var(--koda); font-weight:600;}

#bracelets .steps{list-style:none; margin:0 auto; padding:0; max-width:560px; display:flex; flex-direction:column; gap:16px;}
#bracelets .step{display:flex; gap:14px; align-items:flex-start;}
#bracelets .badge{
  flex:none; width:32px; height:32px; border-radius:50%; color:#FBF1E6;
  font-family:'Ultra',serif; font-size:16px; line-height:1;
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 2px 5px rgba(0,0,0,.25);
}
#bracelets .b-chasm{background:var(--chasm);}
#bracelets .b-koda{background:var(--koda);}
#bracelets .step h3{font-weight:600; font-size:14px; letter-spacing:.06em; text-transform:uppercase; color:var(--ink); margin:4px 0 3px;}
#bracelets .step p{font-size:15.5px; line-height:1.5; color:var(--ink);}
#bracelets .step p b{font-weight:600;}

#bracelets .guides{list-style:none; margin:0 auto; padding:0; max-width:560px; display:flex; flex-direction:column; gap:10px;}
#bracelets .guides a{
  display:block; text-decoration:none; color:var(--ink);
  background:rgba(255,255,255,.26); border:1px solid rgba(42,35,32,.18); border-radius:8px;
  padding:12px 14px; transition:transform .08s ease, box-shadow .12s ease;
}
#bracelets .guides a:hover{transform:translateY(-1px); box-shadow:0 6px 14px rgba(0,0,0,.14);}
#bracelets .guides .g-name{font-weight:600; font-size:15.5px;}
#bracelets .guides .g-src{color:var(--koda); font-weight:600; font-size:12px; letter-spacing:.03em; margin-left:6px;}
#bracelets .guides .g-note{display:block; color:var(--ink-soft); font-size:13.5px; line-height:1.45; margin-top:3px;}

#bracelets .shots{display:grid; grid-template-columns:repeat(2,1fr); gap:10px; max-width:560px; margin:16px auto 0;}
#bracelets .shots img{width:100%; height:auto; border-radius:6px; background:#fff; padding:6px; box-shadow:0 6px 16px rgba(0,0,0,.2);}

#bracelets .accnote{
  text-align:center; max-width:520px; margin:22px auto 0;
  font-size:14.5px; line-height:1.55; color:var(--ink);
}
#bracelets .accnote a{color:var(--chasm); font-weight:600; text-decoration:underline; text-underline-offset:2px;}

#bracelets .colors{
  display:flex; align-items:center; justify-content:center; gap:22px; margin:0 0 6px;
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700; font-size:20px; color:var(--ink-soft);
}
#bracelets .dot{display:inline-block; width:12px; height:12px; border-radius:50%; vertical-align:middle; margin-right:7px;}
#bracelets .d-chasm{background:var(--chasm);}
#bracelets .d-koda{background:var(--koda);}

#bracelets .signoff{
  text-align:center; margin:0;
  font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
  font-size:20px; color:var(--ink-soft);
}

@media (max-width:560px){
  #bracelets{padding:24px 10px 48px;}
  #bracelets .sheet{padding:30px 22px 28px;}
  #bracelets .frame{inset:10px;}
  #bracelets .title{font-size:34px;}
  #bracelets .shead{font-size:21px;}
}
`;