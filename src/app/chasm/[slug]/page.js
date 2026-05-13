'use client'
import { useState, useEffect } from "react";
import { useSession } from '@/app/SessionProvider';
import { useParams } from "next/navigation.js";

import ServerPhotoAlbum from "react-photo-album/server";
import "react-photo-album/styles.css";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Counter, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";
import BackButton from "@/app/components/backButton";

import { getPhotos } from '../components/server/getPhotos';
import { sortedCategories, processCategoryName, databaseSlug } from "../components/lightboxHelpers";
import { useBackButtonClose } from "@/app/components/useBackButtonClose";

const slidesWithPosters = (slides) => {
    let returnSlides = [...slides];
    for (const slide of returnSlides) {
        if (slide.src.includes('.mp4')) {
            slide.src = slide.src.replace('.mp4', '_poster.webp');
        }
    }
    return returnSlides;
}

export default function ViewAll() {
    const [index, setIndex] = useState(-1);
    const [categories, setCategories] = useState([]);
    const [slides, setSlides] = useState([]);
    const { updateSession } = useSession();
    const sessionData = useSession().sessionData;
    const slug = useParams()?.slug;

    useBackButtonClose(index >= 0, () => setIndex(-1));

    /**
     * I need to explore ways to get load data out of use effect. check out the below, maybe I can split load data out into a few functions?
     * or maybe I dont need that, maybe I just need like... use state, look for this thing, if not then default. and then let load data without the setStates run in use effect?
     * that might not work. not sure. just thoughts. poke around sometime.
     * 
     * const [theme, setTheme] = useState(() => 
     *     typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light'
     * );
     */

    const loadData = async (data, slug) => {
        if (data) {
            setSlides(data[0].photoSet);
            setCategories(data);
            return;
        }
        console.log('Loading photos from database');
        let res = await getPhotos(databaseSlug(slug))
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

                setCategories(result);
                setSlides(finalSlideSet);
            }
            else {
                console.error('No photos data to load.');
            }
        })
        .catch((err) => {
            console.error(err);
            return 'There has been an unknown error. Please refresh and try again.';
        });
    }

    useEffect(() => {
        if (!categories.length) {
            if (sessionData && sessionData?.photos) {
                // console.log('load from session data')
                console.log(databaseSlug(slug))
                console.log(sessionData.photos.filter(x => x.category === databaseSlug(slug)));
                loadData(sessionData.photos.filter(x => x.category === databaseSlug(slug)));
            }
            else {
                // console.log('new load')
                loadData(null, databaseSlug(slug));
            }
        }
    }, []);

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                <BackButton target='./' />
                <h1 className={`text-4xl mt-6 text-center block w-full tracking-tighter ${!slides?.length ? 'mb-16' : 'mb-2'}`}>{processCategoryName(useParams()?.slug)}</h1>

                {slides?.length ?
                    <>
                        <small className="text-center block w-full mb-16">
                            {`${slides.length} photo${slides.length > 1 ? 's' : ''}`}
                        </small>
                        <ServerPhotoAlbum
                            layout="rows"
                            breakpoints={[1800]}
                            defaultContainerWidth={2000}
                            targetRowHeight={150}
                            photos={slidesWithPosters(slides)}
                            classNames={{ container: 'w-full h-full' }}
                            onClick={({ index: current }) => setIndex(current)}
                        />
                    </>
                : 
                    <p className="text-center block w-full mb-16">Loading...</p>
                }

                <Lightbox
                    plugins={[Captions, Counter, Download, Share, Thumbnails, Video, Zoom]}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    index={index}
                    slides={[...new Set(categories.map(x => x.photoSet).flat())]}
                    video={{
                        autoPlay: true,
                        controls: true,
                    }}
                    counter={{ container: { style: { top: "26px", bottom: "unset" } } }}
                />
            </div>
        </main>
    );
}