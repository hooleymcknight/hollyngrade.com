import { useParams } from "next/navigation.js";
import SlugPage from '@/app/chasm/components/slugPage';

export async function generateMetadata({ params, searchParams }, parent) {
    // const headersList = await headers();
    // const pathname = headersList.get("hg-pathname") || "hollyngrade";
    
    // optionally access and extend (rather than replace) parent metadata
    //   const previousImages = (await parent).openGraph?.images || [];

    const sp = await searchParams;
    console.log('sp', sp ?? 'none')
    const par = await params;
    console.log(par);

    const rent = await parent;
    console.log(rent);

    let srcUrl = encodeURI(rent.metadataBase + 'dogs/' + par.slug + '/' + sp.photo);
    let url = encodeURI(rent.metadataBase + 'chasm/' + par.slug + '?photo=' + sp.photo);
    console.log(srcUrl, url)

    // WHAT IF NO QUERY???

    const metadataObj = {
        openGraph: {
            title: `Koda & Chasm | ${par.slug.replace(/\//g, '')}`,
            pageDesc: 'Remembering Chasm.',
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