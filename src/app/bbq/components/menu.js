'use client'

export default function Menu() {

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Ultra&family=Oswald:wght@300;400;500;600;700&family=Caveat:wght@600;700&display=swap');

                .bbq-menu{
                --paper:#E8CDA9; --paper-2:#E1C39B;
                --ink:#2A2320; --ink-soft:#6A5541;
                --veg-bg:#EAF3DE; --veg-fg:#4E7A12;
                --vegan-bg:#D9F0E7; --vegan-fg:#0F6E56;
                max-width:640px; margin:0 auto; padding:40px 36px 34px;
                position:relative; box-sizing:border-box;
                font-family:'Oswald','Arial Narrow',sans-serif; color:var(--ink);
                background-color:var(--paper);
                background-image:
                    radial-gradient(circle at 14% 12%, rgba(255,255,255,.28), rgba(255,255,255,0) 30%),
                    radial-gradient(circle at 86% 88%, rgba(120,80,40,.14), rgba(120,80,40,0) 34%),
                    repeating-linear-gradient(96deg, var(--paper) 0 3px, var(--paper-2) 3px 6px);
                border-radius:6px;
                box-shadow:0 10px 30px rgba(0,0,0,.18);
                }
                .bbq-menu *{box-sizing:border-box;}
                .bbq-menu .frame{position:absolute; inset:14px; border:1.5px solid rgba(42,35,32,.3); border-radius:3px; pointer-events:none;}

                .bbq-menu .m-title{
                text-align:center; font-family:'Ultra','Rockwell Nova','Rockwell',Georgia,serif;
                font-size:40px; line-height:.95; color:var(--ink); text-shadow:0 1px 0 rgba(255,255,255,.25);
                }
                .bbq-menu .m-sub{
                text-align:center; font-family:'Caveat','Segoe Script','Brush Script MT',cursive; font-weight:700;
                font-size:22px; color:var(--ink-soft); margin-top:4px;
                }
                .bbq-menu .m-divider{height:1.5px; background:rgba(42,35,32,.3); margin:20px 40px;}

                .bbq-menu .course{
                text-align:center; font-weight:600; letter-spacing:.28em; text-transform:uppercase;
                font-size:12px; color:var(--ink-soft); margin:22px 0 12px;
                }
                .bbq-menu .course:first-of-type{margin-top:4px;}

                .bbq-menu ul{list-style:none; margin:0; padding:0;}
                .bbq-menu li{
                text-align:center; font-size:18px; line-height:1.35; color:var(--ink);
                padding:5px 0;
                }
                .bbq-menu li .name{font-weight:500;}
                .bbq-menu li .note{color:var(--ink-soft); font-size:14px;}

                .bbq-menu .badge{
                display:inline-flex; align-items:center; gap:4px; vertical-align:middle;
                font-size:10.5px; font-weight:600; letter-spacing:.09em; text-transform:uppercase;
                padding:2px 8px 2px 6px; border-radius:999px; margin-left:8px; position:relative; top:-1px;
                }
                .bbq-menu .badge svg{width:12px; height:12px; fill:currentColor; flex:none;}
                .bbq-menu .b-veg{background:var(--veg-bg); color:var(--veg-fg);}
                .bbq-menu .b-vegan{background:var(--vegan-bg); color:var(--vegan-fg);}

                .bbq-menu .key{
                margin:22px 40px 0; padding-top:14px; border-top:1px solid rgba(42,35,32,.22);
                display:flex; flex-wrap:wrap; justify-content:center; gap:8px 18px;
                font-size:12.5px; color:var(--ink-soft); letter-spacing:.02em;
                }
                .bbq-menu .key .k{display:inline-flex; align-items:center; gap:6px;}
                .bbq-menu .key svg{width:13px; height:13px;}
                .bbq-menu .key .sw-veg{fill:var(--veg-fg);}
                .bbq-menu .key .sw-vegan{fill:var(--vegan-fg);}
                `}</style>

                <div className="bbq-menu">
                <div className="frame"></div>

                <div className="m-title">The Menu</div>
                <div className="m-sub">Texas barbecue — much of it the boys' own favorites</div>

                <div className="m-divider"></div>

                <div className="course">Off the smoker &amp; grill</div>
                <ul>
                    <li><span className="name">Brisket</span></li>
                    <li><span className="name">BBQ chicken</span></li>
                    <li><span className="name">Burgers</span> <span className="note">— beef &amp; Beyond</span>
                    <span className="badge b-vegan"><svg viewBox="0 0 24 24"><path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5"/></svg>vegan option</span>
                    </li>
                    <li><span className="name">Veggie kebabs</span>
                    <span className="badge b-vegan"><svg viewBox="0 0 24 24"><path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5"/></svg>vegan</span>
                    </li>
                </ul>

                <div className="course">On the side</div>
                <ul>
                    <li><span className="name">Jalapeño poppers</span> <span className="note">— bacon-wrapped</span></li>
                    <li><span className="name">Green bean casserole</span>
                    <span className="badge b-veg"><svg viewBox="0 0 24 24"><path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5"/></svg>vegetarian</span>
                    </li>
                </ul>

                <div className="course">Something sweet</div>
                <ul>
                    <li><span className="name">Banana pudding</span>
                    <span className="badge b-veg"><svg viewBox="0 0 24 24"><path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5"/></svg>vegetarian</span>
                    </li>
                    <li><span className="name">Peanut butter cookies</span>
                    <span className="badge b-veg"><svg viewBox="0 0 24 24"><path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5"/></svg>vegetarian</span>
                    </li>
                </ul>

                <div className="key">
                    <span className="k"><svg className="sw-vegan" viewBox="0 0 24 24"><path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5"/></svg>vegan</span>
                    <span className="k"><svg className="sw-veg" viewBox="0 0 24 24"><path d="M5 21C5 12 12 4 20 4c0 9-7 17-15 17zM8.5 17.5C12 14 15.5 9 17.5 6.5"/></svg>vegetarian</span>
                    <span className="k"><b style="font-weight:600;">vegan option</b>&nbsp;= also made without meat</span>
                </div>
                </div>
        </>
    );
}