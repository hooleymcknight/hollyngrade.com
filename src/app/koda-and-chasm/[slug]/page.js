import { useParams } from "next/navigation.js";
import SlugPage from '@/app/koda-and-chasm/components/slugPage';
import { processCategoryName } from "../components/helpers/lightboxHelpers";

export async function generateMetadata({ params, searchParams }, parent) {
    // const headersList = await headers();
    // const pathname = headersList.get("hg-pathname") || "hollyngrade";
    
    // optionally access and extend (rather than replace) parent metadata
    //   const previousImages = (await parent).openGraph?.images || [];

    
    const par = await params;
    const rent = await parent;
    const sp = await searchParams;
    let srcUrl = sp ? encodeURI(rent.metadataBase + 'dogs/' + par.slug + '/' + sp.photo) : 'favicon.ico';
    let url = encodeURI(`${rent.metadataBase}koda-and-chasm/${par.slug}${sp ? '?photo=' + sp.photo : ''}`);

    const metadataObj = {
        openGraph: {
            title: `Koda & Chasm | ${processCategoryName(par.slug.replace(/\//g, ''))}`,
            pageDesc: 'Remembering Koda & Chasm.',
            url: url,
            images: [srcUrl],
        },
    }
    
    return metadataObj;
}

export default function ViewSlug() {
    return (
        <SlugPage />
    );
}