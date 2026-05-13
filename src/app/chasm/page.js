'use client'
import { useState, useEffect } from "react";
import { useSession } from '@/app/SessionProvider';

import DynamicLightbox from "./components/dynamicLightbox";
import { getPhotos } from "./components/server/getPhotos";

export default function Chasm() {
    const [categories, setCategories] = useState([]);
    const { updateSession } = useSession();
    const sessionData = useSession().sessionData;

    const loadData = async () => {
        console.log('Loading photos from database');
        let res = await getPhotos()
        .then((response) => {
            if (response) {
                updateSession({ photos: [...response] });
                setCategories([...response]);
            }
            else {
                console.error('No photos data to load.')
            }
        })
        .catch((err) => {
            console.error(err);
            return 'There has been an unknown error. Please refresh and try again.'
        });
    }

    useEffect(() => {
        if (!categories.length) {
            sessionData && sessionData?.photos ? setCategories(sessionData.photos.photos) : loadData();
        }
    }, []);

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            {/* <button onClick={() => console.log(sessionData)}>session data</button> */}
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                <h1 className="text-4xl mt-6 mb-16 text-center block w-full tracking-tighter">Koda &amp; Chasm Photo&nbsp;Gallery</h1>
                <DynamicLightbox categories={categories} />
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