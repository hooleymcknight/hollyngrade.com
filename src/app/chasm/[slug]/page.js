'use client'
import { useState, useEffect } from "react";
import { useSession } from '@/app/SessionProvider';
import { useParams, useSearchParams } from "next/navigation.js";

import ServerPhotoAlbum from "react-photo-album/server";
import "react-photo-album/styles.css";
import "react-photo-album/rows.css";

import dynamic from 'next/dynamic';
import Image from 'next/image';

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
    const photoQuery = useSearchParams()?.get('photo') || null;

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


    const openPhotoFromQuery = (query, currentSlides) => {
        if (!query || !currentSlides.length) return;

        const queryIndex = currentSlides.map(x => x.src.split('/')[x.src.split('/').length - 1]).indexOf(query) || null;
        setIndex(queryIndex);
    }

    const loadData = async (data, slug) => {
        if (data) {
            setSlides(data[0].photoSet);
            setCategories(data);
            openPhotoFromQuery(photoQuery, data[0].photoSet);
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
                openPhotoFromQuery(photoQuery, finalSlideSet);
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

    const AlbumLightbox = dynamic(() => import('../components/albumLightbox.js'), {
        loading: () => <p className="hidden">Loading...</p>,
    });

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
                            layout="masonry"
                            breakpoints={[400, 465, 500, 600, 639]}
                            defaultContainerWidth={640}
                            // targetRowHeight={150}
                            rowConstraints={{ singleRowMaxHeight: 200 }}
                            photos={slidesWithPosters(slides)}
                            classNames={{ container: 'w-full h-full' }}
                            onClick={({ index: current }) => setIndex(current)}
                            renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                                <div style={wrapperStyle}>
                                    <Image
                                        alt={photo.alt}
                                        src={photo.src}
                                        height={photo.height}
                                        width={photo.width}
                                    />
                                </div>
                            )}
                            columns={(containerWidth) => {
                                if (containerWidth < 400) return 1;
                                if (containerWidth < 465) return 2;
                                if (containerWidth < 500) return 3;
                                if (containerWidth < 600) return 4;
                                return 5;
                            }}
                        />
                    </>
                : 
                    <p className="text-center block w-full mb-16">Loading...</p>
                }

                <AlbumLightbox
                    sharedStateIndex={index} setSharedStateIndex={setIndex}
                    sharedStateCategories={categories} setSharedStateCategories={setCategories}
                />

            </div>
        </main>
    );
}