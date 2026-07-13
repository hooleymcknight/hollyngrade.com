'use client'
import BackButton from "../components/backButton";
import Link from "next/link";

export default function BBQ() {

    return (
        <>
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                {/* <BackButton target='./' /> */}
                <h1 className="text-4xl mt-6 mb-8 text-center block w-full tracking-tighter">A BBQ for Koda&nbsp;&amp;&nbsp;Chasm</h1>
                
                <div className="upload-section flex flex-col items-center mx-auto">
                    <span className="mb-8">
                        All info will be posted here by July 13th at 8:00pm.
                        <br/><br/>
                        If it&rsquo;s after that time, please message me and tell me to get it together.
                        {/* <Link 
                            className="font-bold hover:underline"
                            href="/koda-and-chasm/upload" alt="Upload your photos/stories here"
                        >
                            Upload it here.
                        </Link> */}
                    </span>
                </div>

                {/* <div className="w-full col-span-2 flex items-center justify-center mt-8">
                    <Link
                        className="text-xl min-w-[300px] text-center cursor-pointer btn text-white py-4 border-[#222] rounded-[30px]"
                        type="button"
                        href='/koda-and-chasm/view-all' alt="View All Photos"
                    >
                        View All
                    </Link>
                </div> */}
            </div>
        </>
    );
}