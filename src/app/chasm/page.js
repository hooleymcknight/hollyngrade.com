'use client'
import { Suspense } from "react";

import CategoriesGallery from './components/categoriesGallery';

import BackButton from "../components/backButton";
import Link from "next/link";

export default function Chasm() {

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                <BackButton target='./' />
                <h1 className="text-4xl mt-6 mb-8 text-center block w-full tracking-tighter">Koda &amp; Chasm Photo&nbsp;Gallery</h1>
                
                <div className="upload-section flex flex-col items-center mx-auto">
                    <span className="mb-8">
                        Have a photo of Chasm to share?&emsp;
                        <Link 
                            className="font-bold hover:underline"
                            href="/chasm/upload" alt="Upload your photos/stories here"
                        >
                            Upload it here.
                        </Link>
                    </span>
                </div>

                <Suspense fallback={null}>
                    <CategoriesGallery />
                </Suspense>

                <div className="w-full col-span-2 flex items-center justify-center mt-8">
                    <Link
                        className="text-xl min-w-[300px] text-center cursor-pointer btn text-white py-4 border-[#222] rounded-[30px]"
                        type="button"
                        href='/chasm/view-all' alt="View All Photos"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </main>
    );
}

/*
const format = [
    {
        "src": "/image1x3840.jpg",
        "alt": "image 1",
        "width": 3840,
        "height": 2560,
        "srcSet": [
            { "src": "/image1x320.jpg", "width": 320, "height": 213 },
            { "src": "/image1x640.jpg", "width": 640, "height": 427 },
            { "src": "/image1x1200.jpg", "width": 1200, "height": 800 },
            { "src": "/image1x2048.jpg", "width": 2048, "height": 1365 },
            { "src": "/image1x3840.jpg", "width": 3840, "height": 2560 }
        ]
    },
    {
        type: "video",
        width: 1280,
        height: 720,
        poster: "/public/poster-image.jpg",
        sources: [
            {
                src: "/public/video.mp4",
                type: "video/mp4",
            },
        ],
    },
];
*/