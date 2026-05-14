'use client'
import { useState, useEffect } from "react";
import { useSession } from '@/app/SessionProvider';

import CategoriesGallery from './components/categoriesGallery';
import { getPhotos } from "./components/server/getPhotos";
import { upload } from './components/server/upload';

import BackButton from "../components/backButton";
import Link from "next/link";

export default function Chasm() {
    const [categories, setCategories] = useState([]);
    const { updateSession } = useSession();
    const sessionData = useSession().sessionData;

    const loadData = async (data) => {
        if (data) {
            setCategories(data);
            return;
        }
        console.log('Loading photos from database');
        let res = await getPhotos()
        .then((response) => {
            if (response) {
                updateSession({ photos: [...response] });
                setCategories([...response]);
            }
            else {
                console.error('No photos data to load.');
            }
        })
        .catch((err) => {
            console.error(err);
            return 'There has been an unknown error. Please refresh and try again.'
        });
    }

    useEffect(() => {
        if (!categories.length) {
            sessionData && sessionData?.photos ? loadData(sessionData.photos.photos) : loadData();
            // loadData();
        }
    }, []);

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
                        <Link href="/chasm/upload" className="font-bold hover:underline">
                            Upload it here.
                        </Link>
                    </span>
                    {/* <button
                        className="mb-8 btn px-8 py-2 text-white rounded-[30px] cursor-pointer"
                        onClick={() => console.log(sessionData)}
                    >
                        Upload Image
                    </button> */}
                </div>

                <CategoriesGallery categories={categories} />
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