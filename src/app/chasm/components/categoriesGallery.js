'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getPhotos } from "./server/getPhotos";

import { processCategoryName, processSpanClasses, sortedCategories, pathnameSlug } from './helpers/lightboxHelpers';
import { useBackButtonClose } from "@/app/components/useBackButtonClose";
import Image from "next/image";
import { useSession } from "@/app/SessionProvider";

const CategoriesLightbox = dynamic(() => import('../components/categoriesLightbox.js'), {
    loading: () => <p className="hidden">Loading...</p>,
});

export default function CategoriesGallery() {
    const [open, setOpen] = useState(false);
    const [activePhotoSet, setActivePhotoSet] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [categories, setCategories] = useState([]);
    const [slides, setSlides] = useState([]);

    const { updateSession } = useSession();
    const session = useSession().session;
    // if I'm going to use session to fire a toaster, then I need one more state to help me prevent errors from looping.
    const [attempts, setAttempts] = useState(0);

    useBackButtonClose(open, () => setOpen(false));

    const setPhotosAndOpen = (photoSet) => {
        setActivePhotoSet(photoSet);
        setOpen(true);
    }

    const handleTileClick = (e, photoSet) => {
        e.preventDefault();
        e.stopPropagation();

        const targetTile = e.target.closest('[data-hover="img-tile"]');
        const targetSrc = decodeURIComponent(targetTile.querySelector('img').src).replace('_poster.webp', '.mp4').replace('_x300', '');
        const indexToStart = photoSet.map(x => x.src || x.sources.src).indexOf(targetSrc);
        setSlideIndex(indexToStart);
        setPhotosAndOpen(photoSet);
    }

    useEffect(() => {
        console.log('================================================== use effect is running.')
        let cancelled = false;
        if (attempts >=5 && !!session.errorToaster) return;

        const apply = (categoriesData, slidesData) => {
            if (cancelled) return;
            setCategories(categoriesData);
            setSlides(slidesData);
            // in masonry gallery, this is where we open a photo query.
            // that wouldnt be relevant here.
        }

        // try session cache
        const cached = session?.photos;
        if (cached?.length > 1) { // we want this to be greater than 1. if it is only one set, we are coming from inside of a set. and we want to rebuild our cache.
            apply(cached, cached.map(x => x.photoset).flat());
            return () => { cancelled = true; };
        }

        // otherwise fetch from server
        (async () => { // the issue is definitely here.
            console.log('================================================== run this async.')
            try {
                const response = await getPhotos();
                // console.log('get photos, ', response)
                if (cancelled) return;
                if (!response) {
                    console.error('No photos to load.');
                    return;
                }

                const result = sortedCategories([...response]);
                const finalSlideSet = [...new Set(result.flatMap(x => x.photoSet))]
                    .map(slide => ({
                        src: slide.src || slide.source.src,
                        width: slide.width,
                        height: slide.height,
                    }));

                updateSession({ photos: result });
                apply(result, finalSlideSet);
            }
            catch (err) {
                console.log('toaster') // consoles to dev tools
                setAttempts(Number(attempts + 1)); // throwing in the number call to force it to not try to change the assignment of attempts directly?
                updateSession( { errorToaster: {
                    title: 'Cannot connect to database...',
                    message: 'But please try again in a bit! This error has been sent directly to Hollyn\'s phone; she will fix it asap!'
                }});
                console.error(err);
                // throw err;
                // I added this 6/3 but then thought... if it aint broke don't fix it?
                // I just wanna have more time to test this and make sure I'm not causing an error to end up unhandled or hidden from the user.
            }
        })();

        return () => { cancelled = true; };
    }, [session, updateSession, attempts])

    return(
        <div className="w-full flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows[auto_1fr] xl:grid-cols-3 justify-center items-center gap-6 text-centr">

            {!categories.length ? // ================================ maybe check here. props.cat to cat
                <p className="block w-full text-center text-lg col-span-2 mb-8">Loading...</p>
            : ''}

            {sortedCategories(categories)?.map(x =>  // ================================ maybe check here. props.cat to cat
                <Link href={`/chasm/${pathnameSlug(x.category)}/`}
                    className="self-start w-full col-span-1 row-span-1" key={x.category}
                >
                    <div className={`grid gap-2 mb-4 ${x.thumbnails.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {x.thumbnails.map(y => 
                            <div key={y.src} data-hover="img-tile" className={processSpanClasses(y.span, x.thumbnails)}
                                onClick={(e) => handleTileClick(e, x.photoSet)}
                            >
                                <Image
                                    src={y.src.includes('.mp4') || y.src.includes('_poster') ? y.src.replace('.mp4', '_poster.webp') : (!y.src.includes('_x300') ? y.src.replace('.webp', '_x300.webp') : y.src)}
                                    alt={y.alt}
                                    className="w-full h-full object-cover"
                                    width={y.width} height={y.height}
                                />
                            </div>
                        )}
                        {x.thumbnails.length < 3 && x.thumbnails.length > 1 ? /* add placeholder divs to fill in the squares if less than 3 */
                                <div key={'idx'} className="aspect-square">
                                    <div className="w-full h-full">&nbsp;</div>
                                </div>
                        : ''}
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl text-center cursor-pointer hover:underline">{processCategoryName(x.category)}</h2>
                        <small className="">{`(${x.photoSet.length} photo${x.photoSet.length > 1 ? 's' : ''})`}</small>
                    </div>
                </Link>
            )}

            <CategoriesLightbox
                sharedStateOpen={open} setSharedStateOpen={setOpen}
                sharedStateSlideIndex={slideIndex} setSharedStateSlideIndex={setSlideIndex}
                sharedStateActivePhotoset={activePhotoSet} setSharedStateActivePhotoset={setActivePhotoSet}
            />
        </div>
    )
}