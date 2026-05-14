// import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';
import SessionProvider from "./SessionProvider";
import "./globals.css";

// export const metadata = {
//   title: "hollyngrade",
//   description: "full website coming soon",
// };

export async function generateMetadata({ params, searchParams }, parent) {
    // const session = await getServerSession(options);
    const headersList = await headers();
    const pathname = headersList.get("hg-pathname") || "hollyngrade";
    
    // fetch data
    let pageTitle = 'hollyngrade';
    let pageDesc = 'full website coming soon';
    if (pathname.includes('chasm')) {
        pageTitle = 'Koda & Chasm Photo Gallery'
        pageDesc = 'Remembering Chasm.'

        let subFolder = pathname.split('/chasm')?.[1] || null;
        if (subFolder?.length) {
            pageTitle = `Koda & Chasm | ${subFolder.replace(/\//g, '')}`;
        }
    }
    
    // optionally access and extend (rather than replace) parent metadata
    //   const previousImages = (await parent).openGraph?.images || [];
    
    return {
        title: pageTitle,
        description: pageDesc,
        openGraph: {
            title: pageTitle,
            description: pageDesc,
            url: `https://hollyngrade.com/${pathname}`,
            images: ['favicon.ico'],
        },
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Allerta&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
                {/* <meta content="#a20000" data-react-helmet="true" name="theme-color" /> */}
            </head>
            <body className={`antialiased`}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
