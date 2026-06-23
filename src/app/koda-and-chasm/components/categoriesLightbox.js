import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Counter, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";

export default function CategoriesLightbox({
    sharedStateOpen, setSharedStateOpen,
    sharedStateSlideIndex, setSharedStateSlideIndex,
    sharedStateActivePhotoset, setSharedStateActivePhotoset
}) {

    return (
        <Lightbox
            plugins={[Captions, Counter, Download, Share, Thumbnails, Video, Zoom]}
            open={sharedStateOpen}
            index={sharedStateSlideIndex}
            close={() => {setSharedStateOpen(false); setSharedStateSlideIndex(0);}}
            slides={sharedStateActivePhotoset.filter(x => x.active == true)}
            video={{
                autoPlay: true,
                controls: true,
            }}
            counter={{ container: { style: { top: "26px", bottom: "unset" } } }}
        />
    )
}