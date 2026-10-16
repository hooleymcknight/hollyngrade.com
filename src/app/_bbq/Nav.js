'use client';

// app/bbq/Nav.js
// Sticky section nav. Tapping a pill scrolls to that section -- no routing,
// no hash in the URL, just a scroll.
//
// The Recipes pill has one extra job: the rack is collapsed by default, so
// scrolling to it would land you on a closed door. It fires an event the Rack
// listens for. An event rather than lifted state because page.js is a server
// component and these two are siblings -- this keeps them decoupled without
// dragging in a provider for one boolean.

import { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { id: 'recipes', label: 'Recipe rack' },
  { id: 'parking', label: 'Parking' },
  { id: 'pool',    label: 'The pool' },
  { id: 'doings',  label: 'Other doings' },
  { id: 'food',    label: 'Food' },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState(null);
  const sentinel = useRef(null);

  // Compact the lid once the top of the page scrolls away. A sentinel plus
  // IntersectionObserver rather than a scroll listener -- no work on every
  // frame, and no layout thrash from reading offsets mid-scroll.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Highlight whichever section fills the most of the screen.
  //
  // The obvious rule -- "the last heading I scrolled past" -- assumes one
  // section roughly fills the viewport. On a tall monitor the final two are
  // both entirely on screen at once, so that rule skips whichever one is
  // shorter. Measuring visible area instead scales to any window height and
  // needs no special case for the top or bottom of the page.
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;

      const tops = SECTIONS.map((s) => {
        const el = document.getElementById(`sec-${s.id}`);
        return el ? el.getBoundingClientRect().top : null;
      });

      // Visible band, excluding the area hidden behind the sticky bar.
      const bandTop = 110;
      const bandBottom = window.innerHeight;

      let best = null;
      let bestArea = 0;

      SECTIONS.forEach((sec, i) => {
        if (tops[i] === null) return;

        // A section runs from its own heading to the next one that exists.
        let nextTop = Infinity;
        for (let j = i + 1; j < tops.length; j++) {
          if (tops[j] !== null) { nextTop = tops[j]; break; }
        }

        const overlap =
          Math.min(nextTop, bandBottom) - Math.max(tops[i], bandTop);

        if (overlap > bestArea) { bestArea = overlap; best = sec.id; }
      });

      setActive(best);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  function go(e, id) {
    e.preventDefault();
    if (id === 'recipes') {
      window.dispatchEvent(new CustomEvent('bbq:open-rack'));
    }
    const el = document.getElementById(`sec-${id}`);
    if (!el) return;
    // Let the rack finish expanding before measuring where to scroll.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  return (
    <>
      <div ref={sentinel} className="sticky-sentinel" aria-hidden="true" />

      <div className={`stickybar${stuck ? ' stuck' : ''}`}>
        {/* ---------- the lid ---------- */}
        <div className="banner">
          <div className="lid-full">
            <div className="kicker">
              <span>Sat 8/22 only</span>
              <span>Tacoma, WA</span>
            </div>
            <div className="line">Y&rsquo;all are invited</div>
          </div>

          <div className="lid-compact">
            <span className="lc-side lc-left">Sat 8/22 &middot; 2 pm &rsquo;til late</span>
            <span className="lc-title">Backyard BBQ</span>
            <span className="lc-side lc-right">Tacoma, WA</span>
          </div>
        </div>

        {/* ---------- section nav ---------- */}
        <nav className="secnav" aria-label="Sections of this page">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#sec-${s.id}`}
                  className={active === s.id ? 'on' : ''}
                  onClick={(e) => go(e, s.id)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
