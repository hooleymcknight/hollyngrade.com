'use client'
import BackButton from "../components/backButton";
import Link from "next/link";
import Image from "next/image";
import Menu from './components/menu';

// import './components/bbq-styles.css';

const parkingMapUrl = 'https://hollyngrade.com/photos/bbq-info/parking-map.png';
const inviteUrl = 'https://hollyngrade.com/photos/bbq-info/Chasm & Koda — 5x7 Invitation.jpg';

export default function BBQ() {

    return (
        <>
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                {/* <BackButton target='./' /> */}
                <h1 className="text-4xl mt-6 mb-8 text-center block w-full tracking-tighter"
                    // style={{
                    //     height: 0,
                    //     width: 0,
                    //     visibility: 'hidden',
                    //     padding: 0,
                    //     margin: 0,
                    // }}
                >
                    A Barbecue for Chasm&nbsp;&amp;&nbsp;Koda
                </h1>

                {/* <Image src={inviteUrl} alt="parking map" width="680" height="515"
                    style={{
                        borderRadius: 8,
                        marginBottom: 28,
                    }}
                /> */}
                
                <div className="flex flex-col mx-auto">
                    <span className="mb-8">
                        <b>RSVP:</b>
                        <a href="sms:+19364251225&body=I'll be there!"
                            className="ml-2 underline"

                        >
                            Click to send me a text
                        </a>
                        {/* All info will be posted here by July 14th at 4:00pm.
                        <br/><br/>
                        If it&rsquo;s after that time, please message me and tell me to get it together.
                        <Link 
                            className="font-bold hover:underline"
                            href="/koda-and-chasm/upload" alt="Upload your photos/stories here"
                        >
                            Upload it here.
                        </Link> */}
                    </span>
                </div>

                <div className="flex flex-col mx-auto w-full">
                    <h2 className="text-2xl mb-4 text-left">Parking:</h2>
                    <Image src={parkingMapUrl} alt="parking map" width="680" height="515"
                        style={{
                            background: 'rgba(255, 255, 255, 0.6)',
                            borderRadius: 8,
                            paddingBottom: 28,
                        }}
                    />
                    <a href={parkingMapUrl} target="_blank" className="mt-4 text-sm text-center block w-full">Open image in new tab</a>
                </div>

                
                

                <div className="flex flex-col mx-auto w-full">
                    <h2 className="text-2xl mb-4 text-left">Activities:</h2>

                    <h3 className="text-xl">In honor of the dogs:</h3>
                    <ul>
                        <li>
                            <b>Rock painting:</b>
                            <span className="block my-2 ml-4">
                                There will be a table for painting rocks for the boys' graves. Rocks, paints, and brushes will all be provided, but please feel free to bring your own if you wish.
                            </span>
                        </li>
                        <li>
                            <b>Bracelet making:</b>
                            <span className="block my-2 ml-4">
                                We will have stuff for making bracelets in the dogs' signature colors: <span className="red">red for Chasm</span> + <span className="blue">blue for Koda</span>
                            </span>
                        </li>
                    </ul>

                    <h3 className="text-xl">SUMMERTIME:</h3>
                    <ul>
                        <li>
                            <b>Pool!!!</b>
                            <span className="block my-2 ml-4">
                                The pool will be set up right there in the yard, so bring something you're comfy swimming in if you wanna take a dip!
                            </span>
                        </li>
                        <li>
                            <b>Cornhole!</b>
                            <span className="block my-2 ml-4">
                            </span>
                        </li>
                        <li>
                            <b>Firepit! (after dark)</b>
                            <span className="block my-2 ml-4">
                                I wouldn't protest if someone wanted to bring smore's stuff. I've got a few marshmallow roasting metal stick things.
                            </span>
                        </li>
                    </ul>

                    
                </div>

                <div className="flex flex-col mx-auto w-full">
                    <h2 className="text-2xl mb-4 text-left">Food:</h2>

                    <h3 className="text-xl">MENU:</h3>
                    <ul>
                        <li>
                            <b>Brisket</b>
                            <span className="block my-2 ml-4">
                            </span>
                        </li>
                        <li>
                            <b>BBQ chicken</b>
                            <span className="block my-2 ml-4">
                            </span>
                        </li>
                        <li>
                            <b>Burgers</b>
                            <span className="block my-2 ml-4">
                                beef & Beyond — (vegan option)
                            </span>
                        </li>
                        <li>
                            <b>Veggie kebabs</b>
                            <span className="block my-2 ml-4">
                                (vegan)
                            </span>
                        </li>
                        <hr style={{ width: 300, opacity: 0.3 }} />
                        <br/>

                        <li>
                            <b>Jalapeño poppers</b>
                            <span className="block my-2 ml-4">
                                bacon-wrapped
                            </span>
                        </li>
                        <li>
                            <b>Green bean casserole</b>
                            <span className="block my-2 ml-4">
                                (vegetarian)
                            </span>
                        </li>
                        <hr style={{ width: 300, opacity: 0.3 }} />
                        <br/>

                        <li>
                            <b>Banana pudding</b>
                            <span className="block my-2 ml-4">
                                (vegetarian)
                            </span>
                        </li>
                        <li>
                            <b>Peanut butter cookies</b>
                            <span className="block my-2 ml-4">
                                (vegetarian)
                            </span>
                        </li>
                    </ul>
                </div>

                {/* <div className="w-full col-span-2 flex items-center justify-center mt-8">
                    <Link
                        className="text-xl min-w-[300px] text-center cursor-pointer btn text-white py-4 border-[#222] rounded-[30px]"
                        type="button"
                        href='/koda-and-chasm/view-all' alt="View All Photos"
                    >
                        View All
                    </Link>

                    <span className="mb-8">
                        <br/><br/>
                    </span>
                </div> */}
            </div>
        </>
    );
}