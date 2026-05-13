
'use client';
import { useState } from "react";
import { useParams } from "next/navigation.js";
import { Link } from 'next/link';

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";
import { processCategoryName, processSpanClasses, sortedCategories } from '../components/lightboxHelpers.js';

export default function CategoryPage() {
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

    console.log(useParams().slug)

    return(
        <div className="w-full flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows[auto_1fr] xl:grid-cols-3 justify-center items-center gap-6 text-centr">

            <p className="text-white">
                new page: {useParams()?.slug}
            </p>

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