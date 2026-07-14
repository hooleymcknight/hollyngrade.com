'use client'

export default function ParkingMap() {

    return (
        <>
            <svg width="680" height="515" viewBox="0 0 680 515" role="img" xmlns="http://www.w3.org/2000/svg">
                <title>Parking map for the barbecue at 1012 E 53rd St</title>
                <desc>J St and K St are the best parking, both sides; I St by the school has lots of room, both sides, with a short walk; the 53rd and 54th curbs are neighbors-only; the alley behind the house is shown but host-only. A star marks the house a third of the way down the block from J St.</desc>
                <style>{
                    `text {
                        font-family: "Helvetica Neue",Arial,sans-serif;
                    }
                    .t{
                        font-size: 14px;
                    }
                    .th {
                        font-size:14px;
                        font-weight:500;
                    }
                    .ts {
                        font-size:12px;
                    }`
                }</style>

                <rect x="60" y="82" width="520" height="16" rx="3" fill="#ECEAE2" stroke="#C9C7BD" stroke-width="0.5"/>
                <rect x="142" y="222" width="438" height="16" rx="3" fill="#ECEAE2" stroke="#C9C7BD" stroke-width="0.5"/>
                <rect x="60" y="362" width="520" height="16" rx="3" fill="#ECEAE2" stroke="#C9C7BD" stroke-width="0.5"/>
                <rect x="142" y="82" width="16" height="296" rx="3" fill="#ECEAE2" stroke="#C9C7BD" stroke-width="0.5"/>
                <rect x="352" y="222" width="16" height="156" rx="3" fill="#ECEAE2" stroke="#C9C7BD" stroke-width="0.5"/>
                <rect x="552" y="82" width="16" height="296" rx="3" fill="#ECEAE2" stroke="#C9C7BD" stroke-width="0.5"/>

                <rect x="142" y="82" width="16" height="280" rx="3" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.5"/>
                <rect x="552" y="82" width="16" height="280" rx="3" fill="#9FE1CB" stroke="#0F6E56" stroke-width="0.5"/>
                <rect x="352" y="238" width="16" height="124" rx="3" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.5"/>
                <rect x="158" y="222" width="394" height="16" rx="3" fill="#F7C1C1" stroke="#A32D2D" stroke-width="0.5"/>
                <rect x="158" y="362" width="394" height="16" rx="3" fill="#F7C1C1" stroke="#A32D2D" stroke-width="0.5"/>

                <line x1="372" y1="312" x2="548" y2="312" stroke="#BA7517" stroke-width="2" stroke-dasharray="5 5"/>

                <rect x="64" y="100" width="70" height="260" rx="6" fill="none" stroke="#8A8880" stroke-width="0.5" stroke-dasharray="4 4"/>
                <text class="ts" x="99" y="230" fill="#4A463F" text-anchor="middle" dominant-baseline="central">School</text>

                <text class="th" x="430" y="252" fill="#2A2320" text-anchor="middle" dominant-baseline="central">&#9733;</text>
                <text class="ts" x="430" y="270" fill="#4A463F" text-anchor="middle" dominant-baseline="central">My house</text>

                <circle cx="150" cy="160" r="12" fill="#FFFFFF" stroke="#185FA5" stroke-width="1"/>
                <text class="th" x="150" y="160" fill="#042C53" text-anchor="middle" dominant-baseline="central">3</text>
                <circle cx="560" cy="160" r="12" fill="#FFFFFF" stroke="#0F6E56" stroke-width="1"/>
                <text class="th" x="560" y="160" fill="#04342C" text-anchor="middle" dominant-baseline="central">2</text>
                <circle cx="360" cy="270" r="12" fill="#FFFFFF" stroke="#3B6D11" stroke-width="1"/>
                <text class="th" x="360" y="270" fill="#173404" text-anchor="middle" dominant-baseline="central">1</text>
                <circle cx="460" cy="312" r="11" fill="#FFFFFF" stroke="#854F0B" stroke-width="1"/>
                <text class="th" x="460" y="312" fill="#412402" text-anchor="middle" dominant-baseline="central">4</text>

                <text class="th" x="150" y="72" fill="#2A2320" text-anchor="middle">I St</text>
                <text class="th" x="360" y="210" fill="#2A2320" text-anchor="middle">J St</text>
                <text class="th" x="560" y="72" fill="#2A2320" text-anchor="middle">K St</text>
                <text class="ts" x="586" y="90" fill="#4A463F" dominant-baseline="central">52nd</text>
                <text class="ts" x="586" y="230" fill="#4A463F" dominant-baseline="central">53rd</text>
                <text class="ts" x="586" y="370" fill="#4A463F" dominant-baseline="central">54th</text>

                <rect x="66" y="422" width="16" height="16" rx="3" fill="#97C459" stroke="#3B6D11" stroke-width="0.5"/>
                <text class="ts" x="90" y="430" fill="#3D3D3A" dominant-baseline="central">1 &#183; Best &#8212; J St, both sides</text>
                <rect x="66" y="450" width="16" height="16" rx="3" fill="#5DCAA5" stroke="#0F6E56" stroke-width="0.5"/>
                <text class="ts" x="90" y="458" fill="#3D3D3A" dominant-baseline="central">2 &#183; Also great &#8212; K St, both sides</text>
                <rect x="66" y="478" width="16" height="16" rx="3" fill="#85B7EB" stroke="#185FA5" stroke-width="0.5"/>
                <text class="ts" x="90" y="486" fill="#3D3D3A" dominant-baseline="central">3 &#183; Roomy &#8212; I St, both sides, short walk</text>

                <rect x="372" y="422" width="16" height="16" rx="3" fill="#FAC775" stroke="#854F0B" stroke-width="0.5"/>
                <text class="ts" x="396" y="430" fill="#3D3D3A" dominant-baseline="central">4 &#183; Alley &#8212; hosts only</text>
                <rect x="372" y="450" width="16" height="16" rx="3" fill="#F09595" stroke="#A32D2D" stroke-width="0.5"/>
                <text class="ts" x="396" y="458" fill="#3D3D3A" dominant-baseline="central">Please avoid &#8212; 53rd &amp; 54th curbs</text>
                <rect x="372" y="478" width="16" height="16" rx="3" fill="#B4B2A9" stroke="#5F5E5A" stroke-width="0.5"/>
                <text class="ts" x="396" y="486" fill="#3D3D3A" dominant-baseline="central">&#9733; My house</text>
            </svg>
        </>
    );
}


/*




*/