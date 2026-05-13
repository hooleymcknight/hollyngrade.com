import { useState } from "react";
import { Link } from 'next/link';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";
import { processCategoryName, processSpanClasses, sortedCategories } from './lightboxHelpers';

export default function DynamicLightbox(props) {
    const [open, setOpen] = useState(false);
    const [activePhotoSet, setActivePhotoSet] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    const setPhotosAndOpen = (photoSet) => {
        setActivePhotoSet(photoSet);
        setOpen(true);
    }

    const handleTileClick = (e, photoSet) => {
        e.preventDefault();
        e.stopPropagation();

        const targetTile = e.target.closest('[data-hover="img-tile"]');
        const targetSrc = decodeURIComponent(targetTile.querySelector('img').src).replace('_poster.webp', '.mp4');
        const indexToStart = photoSet.map(x => x.src || x.sources.src).indexOf(targetSrc);
        setSlideIndex(indexToStart);
        setPhotosAndOpen(photoSet);
    }

    return(
        <div className="w-full flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows[auto_1fr] xl:grid-cols-3 justify-center items-center gap-6 text-centr">

            {!props.categories.length ?
                <p className="block w-full text-center text-lg col-span-2 mb-8">Loading...</p>
            : ''}

            {sortedCategories(props.categories).map(x => 
                // <Link href={`/chasm/${x.category}/`}
                <div
                    className="self-start w-full col-span-1 row-span-1" key={x.category} // data-photos={x.photoSet}
                    onClick={() => props.openCategoryPage(x.category, x.photoSet)}
                >
                    <div className={`grid gap-2 mb-4 ${x.thumbnails.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {x.thumbnails.map(y => 
                            <div key={y.src} data-hover="img-tile" className={processSpanClasses(y.span, x.thumbnails)}
                                onClick={(e) => handleTileClick(e, x.photoSet)}
                            >
                                <img
                                    src={y.src.includes('.mp4') ? y.src.replace('.mp4', '_poster.webp') : y.src}
                                    alt={y.alt}
                                    className="w-full h-full object-cover"
                                 />
                            </div>
                        )}
                        {x.thumbnails.length < 3 && x.thumbnails.length > 1 ? /* add placeholder divs to fill in the squares if less than 3 */
                            // [...Array(4 - x.thumbnails.length)].map((_, idx) => 
                                <div key={'idx'} className="aspect-square">
                                    <div className="w-full h-full">&nbsp;</div>
                                </div>
                            // )
                        : ''}
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl text-center cursor-pointer hover:underline">{processCategoryName(x.category)}</h2>
                        <small className="">{`(${x.photoSet.length} photo${x.photoSet.length > 1 ? 's' : ''})`}</small>
                    </div>
                {/* </Link> */}
                </div>
            )}

            <div className="w-full col-span-2 flex items-center justify-center">
                <button className="text-xl min-w-[300px] text-center cursor-pointer btn text-white py-4 border-[#222] rounded-[30px]"
                    type="button"
                    onClick={() => setPhotosAndOpen([...new Set(props.categories.map(x => x.photoSet).flat())])}
                >
                    View All
                </button>
            </div>

            <Lightbox
                plugins={[Captions, Download, Share, Thumbnails, Video, Zoom]}
                open={open}
                index={slideIndex}
                close={() => { setOpen(false); setSlideIndex(0); }}
                slides={activePhotoSet.filter(x => x.active == true)}
                video={{
                    autoPlay: true,
                    controls: true,
                }}
            />
        </div>
    )
}