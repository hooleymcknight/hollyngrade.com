import { useEffect, useState } from "react";
import { useSession } from '@/app/SessionProvider';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from '@/app/data/photos.json';
import { Captions, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";
import getPhotos from "./server/getPhotos";

export default function DogsLightbox({ session }) {
    const [open, setOpen] = useState(false);
    const [activePhotoSet, setActivePhotoSet] = useState(photos);
    const { updateSession, sessionData } = useSession();
    const [categories, setCategories] = useState(sessionData?.photos.photosData || []);

    const setPhotosAndOpen = (photoSet) => {
        setActivePhotoSet(photoSet);
        setOpen(true);
    }

    useEffect(() => {
        async function fetchPhotos() {
            const photosData = await getPhotos();
            updateSession({ photos: { photosData } });
            console.log('helo');
            console.log(sessionData)
            setCategories(photosData);
            console.log(sessionData);
        }
        
        fetchPhotos();
    }, []);

    return(
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:items-center sm:text-left sm:flex-nowrap">

            {categories.map(x => {
                <div className="flex flex-column">
                    <div className="flex flex-row flex-wrap">
                    </div>
                    <p>{x.category}</p>
                </div>
            })}


            <button type="button" onClick={() => setPhotosAndOpen(photos)}>
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