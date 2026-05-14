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

const paramsToClear = ['photo'];

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
    
    const searchParams = useSearchParams();
    const photoQuery = searchParams.get('photo') || null;
    const [photo, setPhoto] = useState(photoQuery)

    useBackButtonClose(index >= 0, () => setIndex(-1), paramsToClear);

    const AlbumLightbox = dynamic(() => import('../components/albumLightbox.js'), {
        loading: () => <p className="hidden">Loading...</p>,
    });

    useEffect(() => {
        const dbSlug = databaseSlug(slug);
        let cancelled = false;

        const apply = (categoriesData, slidesData) => {
            if (cancelled) return;
            setCategories(categoriesData);
            setSlides(slidesData);
            if (photo) {
                const idx = slidesData.findIndex(s => s.src.endsWith(photo));
                if (idx >= 0) setIndex(idx);
            }
        };

        // Try the session cache first
        const cached = sessionData?.photos?.filter(x => x.category === dbSlug);
        if (cached?.length) {
            apply(cached, cached[0].photoSet);
            return () => { cancelled = true; };
        }

        // Otherwise fetch from the server
        (async () => {
            try {
                const response = await getPhotos(dbSlug);
                if (cancelled) return;
                if (!response) {
                    console.error('No photos data to load.');
                    return;
                }

                const result = sortedCategories([...response]);
                const finalSlideSet = [...new Set(result.flatMap(x => x.photoSet))]
                    .map(slide => ({
                        src: slide.src || slide.sources.src,
                        width: slide.width,
                        height: slide.height,
                    }));

                updateSession({ photos: result });
                apply(result, finalSlideSet);
            } catch (err) {
                console.error(err);
            }
        })();

        return () => { cancelled = true; };
        }, [slug, sessionData, photo, updateSession]);

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