'use client'
import { useState, useEffect } from "react";
import { useSession } from '@/app/SessionProvider';

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";

// import AlbumLightbox from "./components/albumLightbox";
import { getPhotos } from '../components/server/getPhotos';
import { sortedCategories } from "../components/lightboxHelpers";

export default function Chasm() {
    const [index, setIndex] = useState(-1);
    const [categories, setCategories] = useState([]);
    const [slides, setSlides] = useState([]);
    const { updateSession } = useSession();
    const sessionData = useSession().sessionData;

    const loadData = async () => {
        console.log('Loading photos from database');
        let res = await getPhotos()
        .then((response) => {
            if (response) {
                const result = sortedCategories([...response]);
                updateSession({ photos: result });
                const slidesResult = [...new Set(result.map(x => x.photoSet).flat())];
                
                let finalSlideSet = [];
                for (const slide of slidesResult) {
                    finalSlideSet.push({
                        src: slide.src || slide.sources.src,
                        width: slide.width,
                        height: slide.height
                    });
                
                }
                console.log('slides result', finalSlideSet)
                // setCategories(result);
                setSlides(finalSlideSet);
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
                <h1 className="text-4xl mt-6 mb-16 text-center block w-full tracking-tighter">All Photos</h1>

                {
                    slides.length ?
                        <RowsPhotoAlbum
                            photos={slides}
                            // targetRowHeight={250}
                            // onClick={({ index: current }) => setIndex(current)}
                        />
                    :
                    <p>no slides</p>
                }

                <Lightbox
                    index={index}
                    slides={slides}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />

                {/* <p>{slides[0].src}</p> */}

                {/* <AlbumLightbox categories={categories} /> */}
            </div>
        </main>
    );
}