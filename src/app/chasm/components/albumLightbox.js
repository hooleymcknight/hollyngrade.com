import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Counter, Download, Share, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins";

export default function AlbumLightbox({ sharedStateIndex, setSharedStateIndex, sharedStateCategories, setSharedStateCategories }) {
        
    return (
        <Lightbox
            plugins={[Captions, Counter, Download, Share, Thumbnails, Video, Zoom]}
            open={sharedStateIndex >= 0}
            close={() => setSharedStateIndex(-1)}
            index={sharedStateIndex}
            slides={[...new Set(sharedStateCategories.map(x => x.photoSet).flat())]}
            video={{
                autoPlay: true,
                controls: true,
            }}
            counter={{ container: { style: { top: "26px", bottom: "unset" } } }}
        />
    )
}