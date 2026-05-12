import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from '@/app/data/photos.json';
import { Captions, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";

const processSpanClasses = (input, thumbnailsSet) => {
    if (thumbnailsSet.length < 2) return 'aspect-square';
    switch (input) {
        case "col-span-2":
            return `${input} aspect-[2/1]`;
        case "row-span-2":
            return `${input} aspect-[1/2] stretch-double-row-height`;
        default:
            return 'aspect-square';
    }
}

const processCategoryName = (name) => {
    return name.replace(/\d+-/g, '').replace(/([A-Z])/g, ' $1').replace(/^./, (str) => { return str.toUpperCase(); });
}



export default function DogsLightbox(props) {
    const [open, setOpen] = useState(false);
    const [activePhotoSet, setActivePhotoSet] = useState(photos);

    const setPhotosAndOpen = (photoSet) => {
        setActivePhotoSet(photoSet);
        setOpen(true);
    }

    console.log(props.categories)
    console.log(props.categories.sort((a, b) => a.category - b.category))

    const sortedCategores = (array) => {
        return array.sort = (a, b) => {
            const nameA = a.category.toUpperCase(); // ignore upper and lowercase
            const nameB = b.category.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        }
    }

    return(
        <div className="grid grid-cols-2 grid-rows[auto_1fr] justify-center items-center gap-6 text-center sm:items-center sm:text-left">

            {sortedCategores(props.categories).map(x => 
                <div className="grid grid-col-1" data-photos={x.photoSet} key={x.category}>
                    <div className={`grid gap-2 mb-4  ${x.thumbnails.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {x.thumbnails.map(y => 
                            <div key={y.src} className={processSpanClasses(y.span, x.thumbnails)}>
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
                    <h2 className="text-2xl text-center">{processCategoryName(x.category)}</h2>
                </div>
            )}


            <button className="w-full col-span-2" type="button" onClick={() => setPhotosAndOpen(photos)}>
                View All
            </button>

            <Lightbox
                plugins={[Captions, Download, Share, Thumbnails, Video, Zoom]}
                open={open}
                close={() => setOpen(false)}
                slides={activePhotoSet.filter(x => x.active === true)}
            />          
        </div>
    )
}