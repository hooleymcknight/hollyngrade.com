export default function ParkingMapSvg () {
    return (
        <svg className="map" viewBox="0 0 680 515" role="img" xmlns="http://www.w3.org/2000/svg">
            <title>Parking map for the barbecue at 1012 E 53rd St</title>
            <desc>Two steps: first pull into the driveway on 53rd between J St and K St to drop off food and passengers, then park on I St, one block west by the school, either side. J St, K St and the 53rd and 54th curbs are neighbors only. The alley behind the house is residents only. A star marks the house.</desc>

            {/*  White plate. Keeps the map legible as an SVG and gives it a
                printed-insert look against the cream sheet. */}
            <rect x="0" y="0" width="680" height="515" fill="#FFFFFF"/>

            {/*  = street grid = */}
            <g fill="#EFE6D2" stroke="#D9CDB4" strokeWidth="0.6">
            <rect x="60" y="82" width="520" height="16" rx="3"/>
            <rect x="142" y="222" width="438" height="16" rx="3"/>
            <rect x="60" y="362" width="520" height="16" rx="3"/>
            <rect x="142" y="82" width="16" height="296" rx="3"/>
            <rect x="352" y="222" width="16" height="156" rx="3"/>
            <rect x="552" y="82" width="16" height="296" rx="3"/>
            </g>

            {/*  = please avoid: J St, K St, and the 53rd / 54th curbs = */}
            <g fill="#EFC9C6" stroke="#C9938E" strokeWidth="0.6">
            <rect x="352" y="238" width="16" height="124" rx="3"/>
            <rect x="552" y="82" width="16" height="280" rx="3"/>
            <rect x="158" y="222" width="394" height="16" rx="3"/>
            <rect x="158" y="362" width="394" height="16" rx="3"/>
            </g>

            {/*  = park here: I St, both sides = */}
            <rect x="142" y="82" width="16" height="280" rx="3" fill="#F6C544" stroke="#B58600" strokeWidth="0.9"/>

            {/*  = drop-off: the driveway = */}
            <rect x="423" y="238" width="14" height="20" rx="2" fill="#2E6E8E" stroke="#1F4E66" strokeWidth="0.6"/>

            {/*  = school = */}
            <rect x="64" y="100" width="70" height="260" rx="6" fill="none" stroke="#B8AC94" strokeWidth="0.7" strokeDasharray="4 4"/>
            <text className="tiny" x="99" y="230" textAnchor="middle" dominantBaseline="central">SCHOOL</text>

            {/*  = alley = */}
            <line x1="372" y1="294" x2="548" y2="294" stroke="#6E5B49" strokeWidth="2" strokeDasharray="5 5"/>
            <text className="tiny" x="460" y="308" textAnchor="middle" dominantBaseline="central">ALLEY &#183; RESIDENTS ONLY</text>

            {/*  = the house = */}
            <text className="script" x="430" y="272" textAnchor="middle" dominantBaseline="central" fontSize="22">&#9733;</text>
            <text className="script" x="448" y="272" dominantBaseline="central">my house</text>

            {/*  = numbered steps: 1 drop off, then 2 park = */}
            <circle cx="398" cy="250" r="13" fill="#2E6E8E" stroke="#FBF4E6" strokeWidth="2"/>
            <text className="num" x="398" y="250" fill="#FFF9EE" textAnchor="middle" dominantBaseline="central">1</text>

            <circle cx="150" cy="160" r="13" fill="#F6C544" stroke="#9C1721" strokeWidth="1.2"/>
            <text className="num" x="150" y="160" fill="#9C1721" textAnchor="middle" dominantBaseline="central">2</text>

            {/*  = street names = */}
            <text className="st" x="150" y="70" textAnchor="middle">I ST</text>
            <text className="st" x="360" y="212" textAnchor="middle">J ST</text>
            <text className="st" x="560" y="70" textAnchor="middle">K ST</text>
            <text className="cross" x="588" y="90" dominantBaseline="central">52ND</text>
            <text className="cross" x="588" y="230" dominantBaseline="central">53RD</text>
            <text className="cross" x="588" y="370" dominantBaseline="central">54TH</text>

            {/*  = dashed rule, matching the invite = */}
            <line x1="60" y1="402" x2="278" y2="402" stroke="#9C1721" strokeOpacity="0.45" strokeWidth="2" strokeDasharray="6 6"/>
            <text className="rulelabel" x="340" y="402" textAnchor="middle" dominantBaseline="central">HOW TO PARK</text>
            <line x1="402" y1="402" x2="620" y2="402" stroke="#9C1721" strokeOpacity="0.45" strokeWidth="2" strokeDasharray="6 6"/>

            {/*  = legend = */}
            <rect x="66" y="424" width="16" height="16" rx="3" fill="#2E6E8E" stroke="#1F4E66" strokeWidth="0.6"/>
            <text className="lg" x="92" y="432" dominantBaseline="central"><tspan className="b">1 &#183; Pull up and drop off:</tspan> dish, people, pool bag</text>

            <rect x="66" y="452" width="16" height="16" rx="3" fill="#F6C544" stroke="#B58600" strokeWidth="0.6"/>
            <text className="lg" x="92" y="460" dominantBaseline="central"><tspan className="b">2 &#183; Then park on I St</tspan> &#8212; either side, one block over</text>

            <rect x="66" y="480" width="16" height="16" rx="3" fill="#EFC9C6" stroke="#C9938E" strokeWidth="0.6"/>
            <text className="lg" x="92" y="488" dominantBaseline="central">Please avoid &#8212; J St, K St, and the 53rd &amp; 54th curbs</text>

            <line x1="428" y1="432" x2="444" y2="432" stroke="#6E5B49" strokeWidth="2" strokeDasharray="5 5"/>
            <text className="lg" x="454" y="432" dominantBaseline="central">Alley &#8212; residents only</text>

            <text className="script" x="436" y="460" textAnchor="middle" dominantBaseline="central" fontSize="20">&#9733;</text>
            <text className="lg" x="454" y="460" dominantBaseline="central">My house</text>
        </svg>
    )
}