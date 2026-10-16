'use client';

// app/bbq/ParkingMap.js
// The map, plus the two things people actually want from it: a bigger look,
// and turn-by-turn that matches the drop-off-then-park instruction.
//
// The directions link is a Google Maps route with a waypoint, so it reads as
// you -> the house -> the parking spot. Omitting `origin` is deliberate: the
// api=1 URL scheme has no supported value for "wherever I am right now," but
// leaving it out makes Maps default to the user's location, which is what we
// want. Don't add origin=Current+Location -- it isn't a real parameter.

import { useEffect, useRef, useState } from 'react';
import ParkingMapSvg from './ParkingMapSvg';

const HOUSE = '1012 E 53rd St, Tacoma, WA 98404';

// << EDIT >> The good parking spot on I St. In Google Maps, right-click the
// exact curb you mean -> the lat/lng at the top of the menu copies on click.
// Paste it here as "lat,lng". Coordinates rather than an address so the pin
// lands on the stretch you mean instead of a house number.
const PARKING_PIN = '47.209318,-122.419093';



const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1' +
  `&waypoints=${encodeURIComponent(HOUSE)}` +
  `&destination=${encodeURIComponent(PARKING_PIN)}` +
  '&travelmode=driving';

export default function ParkingMap() {
  const [big, setBig] = useState(false);
  const closeRef = useRef(null);

  // Esc closes, the close button takes focus so keyboard users aren't stranded
  // behind the overlay, and the page underneath stops scrolling. Without the
  // lock, a swipe on the overlay scrolls the article behind it instead.
  useEffect(() => {
    if (!big) return;
    const onKey = (e) => { if (e.key === 'Escape') setBig(false); };
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [big]);

  return (
    <>
      <figure className="mapfig">
        <button
          type="button"
          className="map-btn"
          onClick={() => setBig(true)}
          aria-label="Enlarge the parking map"
        >
          <ParkingMapSvg />
          <span className="map-zoom" aria-hidden="true">Tap to enlarge</span>
        </button>

        <figcaption className="map-cap">
          <a
            className="map-dir"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions &mdash; house, then parking
          </a>
          <span className="map-dir-note">
            Routes you to the driveway first, then over to I St.
          </span>
        </figcaption>
      </figure>

      {big && (
        <div
          className="map-scrim"
          role="dialog"
          aria-modal="true"
          aria-label="Parking map"
          onClick={() => setBig(false)}
        >
          {/* stopPropagation so tapping the map itself doesn't close it */}
          <div className="map-big" onClick={(e) => e.stopPropagation()}>
            <ParkingMapSvg />
            <button
              ref={closeRef}
              type="button"
              className="rbtn map-close"
              onClick={() => setBig(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
