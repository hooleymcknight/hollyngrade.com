// app/bbq/Signoff.js
// Closing graphic. Texas in flyer red, a star where you're from, a dashed arc
// up to Tacoma -- the premise of the whole party without a sentence of copy.
// The produce sticker carries the signoff, borrowing the form of a weighed-item
// label so it states facts instead of instructing anybody.
//
// The outline is real Census Bureau cartographic boundary data (2017 edition,
// via the us-atlas TopoJSON redistribution), simplified with Douglas-Peucker to
// 297 points. Census boundary files are a US government work and therefore
// public domain -- no attribution obligation, no share-alike.
//
// Longitude maps to x and latitude to y, with x scaled by cos(31 degrees) so the
// aspect is true to shape: 262 wide by 248 tall, about 1.06 to 1. Any Texas that
// looks "too narrow" has that ratio wrong.
//
// Self-contained: fills, fonts and sizes are attributes on the elements, so it
// doesn't depend on anything in page.js's stylesheet.

const TEXAS = 'M340.5 38.0 L400.5 38.0 L400.5 83.2 L402.0 82.8 L406.3 87.2 L408.5 87.5 L408.9 86.6 L410.1 86.6 L412.6 87.5 L412.9 85.6 L415.3 86.9 L416.7 91.2 L420.8 91.1 L425.2 93.1 L427.6 92.4 L429.1 92.9 L430.8 94.8 L432.2 94.3 L433.2 92.6 L437.1 93.6 L438.3 92.7 L438.7 96.2 L441.5 96.5 L441.1 99.0 L443.8 99.6 L447.3 96.5 L449.3 98.7 L451.3 98.5 L451.6 100.4 L453.0 100.5 L453.8 99.2 L455.4 99.4 L456.2 98.2 L457.0 100.1 L456.3 100.7 L458.0 102.8 L458.7 102.2 L458.5 100.9 L459.5 100.5 L458.7 99.7 L459.6 100.0 L460.8 98.9 L460.5 97.4 L462.0 97.2 L462.8 99.3 L464.8 99.4 L465.1 100.3 L466.3 100.1 L466.9 98.4 L468.7 98.7 L467.9 99.9 L469.8 100.4 L470.4 101.5 L471.9 101.4 L473.2 103.4 L474.0 103.4 L474.5 101.7 L476.9 101.8 L477.5 100.0 L481.6 99.5 L481.7 98.9 L483.8 100.1 L485.3 99.7 L485.3 98.8 L488.4 97.8 L489.6 99.1 L494.5 99.2 L495.8 97.2 L497.7 97.7 L499.4 99.4 L501.0 99.5 L503.0 102.2 L504.9 102.0 L506.2 103.6 L508.6 103.7 L510.0 105.2 L511.2 104.5 L511.2 105.6 L512.7 106.0 L512.5 106.7 L514.4 106.1 L515.9 106.7 L516.7 105.8 L519.5 106.7 L519.5 143.0 L523.9 148.1 L524.3 149.9 L523.5 152.2 L524.6 153.9 L525.6 154.0 L525.3 155.2 L526.8 156.9 L526.6 158.9 L527.9 159.8 L528.4 162.1 L529.7 161.9 L529.3 163.9 L530.0 165.6 L529.1 166.0 L529.9 167.8 L529.0 169.0 L529.3 170.2 L525.6 176.9 L526.4 179.2 L525.1 181.7 L526.2 182.7 L526.6 186.2 L525.7 187.6 L526.3 187.9 L521.8 194.2 L523.6 196.9 L517.7 197.7 L508.5 201.8 L505.8 204.1 L504.7 204.0 L506.9 201.6 L509.1 200.4 L510.5 200.5 L509.4 199.4 L505.6 200.5 L505.0 200.0 L506.5 196.6 L506.5 195.1 L505.3 194.5 L503.0 196.9 L502.0 197.4 L501.5 196.5 L500.3 197.4 L500.8 198.7 L500.0 199.7 L500.8 200.8 L502.2 201.2 L501.8 202.3 L502.5 202.7 L502.5 205.6 L498.4 208.7 L497.2 208.4 L497.1 210.1 L497.5 210.6 L503.9 205.6 L503.9 204.7 L505.8 205.0 L492.7 215.9 L473.6 226.3 L471.6 228.6 L466.1 232.2 L460.4 238.2 L454.5 249.4 L453.0 255.8 L453.5 264.1 L457.3 280.7 L454.8 270.0 L453.1 269.7 L454.4 269.2 L452.4 261.9 L453.2 251.1 L458.8 238.1 L460.1 237.3 L462.0 233.9 L464.6 231.6 L471.7 228.1 L472.0 226.6 L471.4 226.3 L466.8 228.7 L466.3 226.7 L465.1 226.5 L464.4 230.8 L461.8 233.2 L459.9 232.6 L459.7 231.7 L457.4 232.9 L456.2 234.3 L457.7 234.7 L459.4 233.6 L460.0 235.1 L456.7 240.0 L455.9 240.0 L455.5 238.9 L450.6 238.8 L450.1 239.5 L451.0 240.2 L452.9 239.8 L453.1 242.1 L455.4 243.1 L452.2 251.9 L450.3 252.9 L449.5 252.6 L450.5 252.2 L450.7 251.0 L450.1 250.9 L447.6 253.0 L449.6 254.0 L452.0 253.2 L450.9 263.9 L451.6 268.5 L452.2 271.4 L452.9 271.5 L454.9 276.3 L454.4 279.2 L455.0 280.6 L456.5 280.9 L456.5 281.6 L457.4 281.2 L457.5 283.7 L453.4 284.4 L453.0 286.4 L450.0 285.3 L447.5 282.1 L442.8 281.1 L436.5 281.3 L431.2 277.5 L428.8 276.7 L427.4 277.2 L424.6 274.3 L418.9 273.4 L418.2 272.5 L418.7 271.5 L417.2 270.2 L415.2 263.0 L411.6 258.8 L411.7 253.5 L409.8 252.1 L410.8 249.7 L410.9 247.9 L409.9 247.7 L410.3 246.2 L408.4 244.4 L406.4 244.1 L403.0 240.7 L401.9 236.5 L400.7 236.2 L398.9 232.7 L396.4 231.6 L394.7 229.4 L393.2 224.9 L393.8 224.4 L390.6 220.6 L389.6 216.8 L387.5 214.1 L387.1 210.4 L385.1 208.7 L384.6 207.0 L380.3 204.2 L379.4 202.1 L375.5 200.6 L375.5 198.2 L374.7 199.4 L374.4 197.8 L373.2 197.3 L372.3 195.1 L371.1 194.6 L370.1 195.1 L369.6 194.2 L366.4 195.0 L361.1 193.9 L359.6 194.5 L354.6 192.3 L353.6 192.7 L352.9 194.9 L350.4 194.5 L349.8 195.2 L347.2 195.5 L344.4 200.6 L344.1 203.4 L342.5 206.7 L343.2 207.1 L342.8 207.9 L340.8 208.5 L338.6 211.4 L338.3 213.1 L335.0 213.2 L332.1 211.8 L330.1 209.6 L326.1 208.3 L324.8 206.7 L319.9 205.3 L315.4 200.8 L313.9 200.6 L310.5 197.9 L307.1 191.2 L306.4 183.9 L303.5 180.4 L302.2 175.4 L296.3 170.8 L292.7 169.5 L292.7 168.7 L289.6 166.4 L288.6 164.2 L285.2 162.3 L281.6 157.7 L276.6 155.3 L273.1 149.1 L270.9 148.7 L268.0 146.0 L268.4 142.8 L339.3 142.8 L339.8 38.0 Z';

// Five-pointed star, drawn at radius 11 and scaled from there. strokeWidth is
// divided back out by the scale so a small star doesn't get a proportionally
// fat outline -- otherwise the 6.5px ones look like blobs.
const STAR =
  'M0 -11 L3.2 -3.5 L11 -3.5 L4.8 1.6 L7.2 9.5 L0 4.8 L-7.2 9.5 L-4.8 1.6 L-11 -3.5 L-3.2 -3.5 Z';

function Star({ x, y, r = 11, fill = '#F6C544', stroke = '#9C1721', strokeWidth = 1 }) {
  return (
    <path
      d={STAR}
      transform={`translate(${x} ${y}) scale(${r / 11})`}
      fill={fill}
      stroke={stroke}
      strokeWidth={(strokeWidth * 11) / r}
    />
  );
}

export default function Signoff() {
  return (
    <svg className="signoff-art" viewBox="0 0 600 460" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Texas, an arc to Tacoma, and a barbecue price sticker</title>
      <desc>
        The state of Texas with a star marking home, a dashed arc running northwest to a
        marker labeled Tacoma, and a grocery-style weighed-item sticker reading Hollyn&rsquo;s
        Backyard, Tacoma TX population one, packed on 08.22.26, sell by same day, zero
        dollars, net weight however much brisket you can carry.
      </desc>

      {/* ===== Texas ===== */}
      <path
        d={TEXAS}
        fill="#D22630" fillOpacity="0.9" stroke="#9C1721" strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* ===== everywhere else, then home =====
           Small blue stars for the other stops, big yellow one for Austin.
           Only home gets a label -- five labels inside a 262px-wide state
           would be a thicket, and the unnamed marks read as "also here."

           << EDIT >> Positions in this SVG's coordinates:
             Austin       446, 183      Waco          458, 153
             San Antonio  431, 203      Denton        458, 115
             Houston      493, 195      Dallardsville 508, 175
           For anywhere else:
             x = 268 + (lon * 0.857167 + 91.4012) * 23.315
             y = 38  + (36.4986 - lat) * 23.315                            */}
      <g fill="#9CC3D8" stroke="#1F4E66">
        <Star x={458} y={115} r={6.5} fill="#9CC3D8" stroke="#1F4E66" strokeWidth={0.9} />
        <Star x={458} y={153} r={6.5} fill="#9CC3D8" stroke="#1F4E66" strokeWidth={0.9} />
        <Star x={508} y={175} r={6.5} fill="#9CC3D8" stroke="#1F4E66" strokeWidth={0.9} />
        <Star x={431} y={203} r={6.5} fill="#9CC3D8" stroke="#1F4E66" strokeWidth={0.9} />
      </g>

      <g transform="translate(446 183)">
        <Star x={0} y={0} r={11} />
        <text
          x="-17" y="4" textAnchor="end" fill="#FBF4E6"
          fontFamily="'Caveat',cursive" fontSize="16" fontWeight="700"
        >
          home
        </text>
      </g>

      {/* ===== the trip ===== */}
      <path
        d="M446 183 Q270 58 104 112"
        fill="none" stroke="#9C1721" strokeOpacity="0.5"
        strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round"
      />

      <circle cx="100" cy="112" r="6.5" fill="#2E6E8E" stroke="#FBF4E6" strokeWidth="2" />
      <text
        x="100" y="92" textAnchor="middle" fill="#1E1A17"
        fontFamily="'Oswald',sans-serif" fontSize="10" fontWeight="600" letterSpacing="1.6"
      >
        TACOMA
      </text>

      <text
        x="48" y="168" fill="#6E5B49"
        fontFamily="'Caveat',cursive" fontSize="18" fontWeight="700"
      >
        a long way
        <tspan x="48" dy="20">for barbecue</tspan>
      </text>

      {/* ===== the sticker ===== */}
      <g transform="rotate(-4 320 362)">
        <rect x="203" y="295" width="240" height="140" rx="2" fill="#0F0C0A" fillOpacity="0.12" />
        <rect x="200" y="292" width="240" height="140" rx="2" fill="#FFFFFF" stroke="#D8CFBC" strokeWidth="0.75" />

        <rect x="214" y="306" width="92" height="18" rx="3" fill="#1E1A17" />
        <text
          x="260" y="319" textAnchor="middle" fill="#FFFFFF"
          fontFamily="'Oswald',sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="0.9"
        >
          HOLLYN&rsquo;S
        </text>
        <text
          x="314" y="320" fill="#1E1A17"
          fontFamily="'Oswald',sans-serif" fontSize="12" fontWeight="600" letterSpacing="1"
        >
          BACKYARD
        </text>

        <text
          x="320" y="344" textAnchor="middle" fill="#1E1A17"
          fontFamily="ui-monospace,'Courier New',monospace" fontSize="10.5"
        >
          TACOMA, TX &nbsp;(POP. 1)
        </text>

        <g fontFamily="ui-monospace,'Courier New',monospace" fontSize="8" fill="#3D3730">
          <text x="214" y="364">Quantity:&nbsp; 1 party</text>
          <text x="214" y="377">Packed on: 08.22.26</text>
          <text x="214" y="390">Sell by:&nbsp;&nbsp; same day</text>
        </g>

        <text
          x="426" y="385" textAnchor="end" fill="#1E1A17"
          fontFamily="'Oswald',sans-serif" fontSize="27" fontWeight="600"
        >
          $0.00
        </text>

        <line x1="214" y1="402" x2="426" y2="402" stroke="#D8CFBC" strokeWidth="0.75" />
        <text
          x="320" y="417" textAnchor="middle" fill="#3D3730"
          fontFamily="ui-monospace,'Courier New',monospace" fontSize="7.5"
        >
          NET WT: HOWEVER MUCH BRISKET YOU CAN CARRY
        </text>
      </g>
    </svg>
  );
}