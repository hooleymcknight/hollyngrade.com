'use client'
import { useState, useEffect, useRef } from "react";
import { useSession } from '@/app/SessionProvider';
import { useSearchParams } from "next/navigation.js";

import dynamic from 'next/dynamic';
import Image from 'next/image';

import BackButton from "@/app/components/backButton";

import ServerPhotoAlbum from "react-photo-album/server";
import "react-photo-album/styles.css";
import "react-photo-album/rows.css";

import { getPhotos } from '@/app/chasm/components/server/getPhotos';
import { sortedCategories, databaseSlug } from "@/app/chasm/components/lightboxHelpers";
import { useBackButtonClose } from '@/app/components/useBackButtonClose';

const srcSetSizes = [300, 600, 800, 1200];

const slidesWithPosters = (slides) => {
    let returnSlides = [...slides];
    for (const slide of returnSlides) {
        if (slide.src.includes('.mp4')) {
            slide.src = slide.src.replace('.mp4', '_poster.webp');
        }
    }
    return returnSlides;
}

const paramsToClear = ['photo'];

const AlbumLightbox = dynamic(() => import('../components/albumLightbox.js'), {
    loading: () => <p className="hidden">Loading...</p>,
});

const slideSrcset = (slide) => {
    let frame = { src: '', width: 0, height: 0 };
    let returnSet = [];

    // g = greater, l = lesser
    const gDimension = Object.keys(slide).find(k => slide[k] === Math.max(slide.width, slide.height));
    const lDimension = Object.keys(slide).find(k => slide[k] === Math.min(slide.width, slide.height));
    // we will always set the bigger dimension to match the preset src size.
    const gDimValue = slide[gDimension];
    const lDimValue = slide[lDimension];

    srcSetSizes.forEach((dim) => {
        let thisSet = { ...frame };
        thisSet.src = !slide.src.includes(`_x${dim}.webp`) ? slide.src.replace('.webp', `_x${dim}.webp`) : slide.src;
        thisSet[gDimension] = dim;
        thisSet[lDimension] = dim * lDimValue / gDimValue;
        returnSet.push(thisSet);
    });

    return returnSet;
}

export default function MasonryGallery(props) {
    const [index, setIndex] = useState(-1);
    const [categories, setCategories] = useState([]);
    const [slides, setSlides] = useState([]);
    const { updateSession } = useSession();
    const sessionData = useSession().sessionData;

    // check out params for photo queries.
    const searchParams = useSearchParams();
    const photoQuery = searchParams.get('photo') || null;
    const photoRef = useRef(photoQuery);

    useBackButtonClose(index >= 0, () => setIndex(-1), paramsToClear);

    useEffect(() => {
        const dbSlug = props.slug ? databaseSlug(props.slug) : null;
        let cancelled = false;

        const apply = (categoriesData, slidesData) => {
            if (cancelled) return;
            setCategories(categoriesData);
            setSlides(slidesData);
            if (photoRef.current) {
                const idx = slidesData.findIndex(s => s.src.endsWith(photoRef.current));
                if (idx >= 0) setIndex(idx);
            }
        };

        // Try the session cache first
        const cached = sessionData?.photos?.filter(x => dbSlug ? x.category === dbSlug : x.category);
        if (cached?.length) {
            apply(cached, dbSlug ? cached[0].photoSet : cached.map(x => x.photoSet).flat());
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
                        src: (!slide.src.includes('_x300') ? slide.src.replace('.webp', '_x300.webp') : slide.src) || slide.sources.src,
                        width: slide.width,
                        height: slide.height,
                        // srcSet: !slide.src?.includes('_poster') ? slideSrcset(slide) : null
                    }));

                for (const photoData of result[0].photoSet) {
                    if (!photoData.src.includes('_x300')) {
                        photoData.src = photoData.src.replace('.webp', '_x300.webp');
                    }
                }
                console.log(result?.[0].photoSet?.[0])
                
                updateSession({ photos: result });
                apply(result, finalSlideSet);
            }
            catch (err) {
                console.error(err);
            }
        })();

        return () => { cancelled = true; };
    }, [props.slug, sessionData, photoRef, updateSession]);

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                <BackButton target='./' />
                <h1 className={`text-4xl mt-6 text-center block w-full tracking-tighter ${!slides?.length ? 'mb-16' : 'mb-2'}`}>{props.heading}</h1>

                {slides?.length ?
                    <>
                        <small className="text-center block w-full mb-16">
                            {`${slides.length} photo${slides.length > 1 ? 's' : ''}`}
                        </small>
                        <ServerPhotoAlbum
                            layout="masonry"
                            breakpoints={[400, 465, 500, 600, 639]}
                            defaultContainerWidth={640}
                            rowConstraints={{ singleRowMaxHeight: 200 }}
                            photos={slidesWithPosters(slides)}
                            classNames={{ container: 'w-full h-full' }}
                            onClick={({ index: current }) => setIndex(current)}
                            renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => ( // this is a different photo from our state phtoto.
                                <div style={wrapperStyle}>
                                    <Image
                                        alt={photo.alt}
                                        src={photo.src}
                                        height={photo.height}
                                        width={photo.width}
                                        // srcset={photo.srcSet}
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