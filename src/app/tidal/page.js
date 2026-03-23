import { headers } from 'next/headers';
import { parse } from 'node-html-parser';

export async function generateMetadata({ params, searchParams }, parent) {
    const headersList = await headers();
    const pathname = headersList.get("hg-pathname") || "hollyngrade";
    let query = await searchParams;
    
    // fetch data
    let pageTitle = 'TIDAL embed ' + query.song;
    
    // optionally access and extend (rather than replace) parent metadata
    //   const previousImages = (await parent).openGraph?.images || [];
    
    return {
        title: pageTitle,
        description: "TIDAL embed application",
        openGraph: {
            title: pageTitle,
            description: "TIDAL embed application",
            url: `https://hollyngrade.com${pathname}`,
            images: ['favicon.ico'],
        },
    }
}

export default async function Tidal({ params, searchParams }) {
    let query = await searchParams;
    // console.log(query.song);

    let songInfo = await fetch('https://embed.tidal.com/tracks/419499614')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        const root = parse(html);
        // console.log(root.innerHTML);
        return root.innerHTML;
    })
    .catch((err) => {
        console.log('errer', err);
    })
    // console.log(songInfo)

    return (
        <>
            <meta content="#f7b32c" data-react-helmet="true" name="theme-color" />
            {query.song ?
                <iframe src={`https://embed.tidal.com/tracks/${query.song}`} width="500" height="120" allow="encrypted-media; fullscreen; clipboard-write https://embed.tidal.com/; web-share" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox" style={{ colorScheme: 'light dark' }} title="TIDAL Embed Player" />
            :
            <></>}
        </>
    );
}