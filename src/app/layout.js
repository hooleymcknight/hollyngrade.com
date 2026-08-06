// import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';
import SessionProvider, { useSession } from "./SessionProvider";
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { processCategoryName } from './koda-and-chasm/components/helpers/lightboxHelpers';
import "./globals.css";

// export const metadata = {
//   title: "hollyngrade",
//   description: "full website coming soon",
// };

export async function generateMetadata({ params, searchParams }, parent) {
    const headersList = await headers();
    const pathname = headersList.get("hg-pathname") || "";
    
    // fetch data
    let pageTitle = 'hollyngrade';
    let pageDesc = 'full website coming soon';
    if (pathname.includes('chasm') || pathname.includes('koda')) {
        pageTitle = 'Koda & Chasm Photo Gallery'
        pageDesc = 'Remembering Koda & Chasm.'

        let subFolder = pathname.split('/koda-and-chasm')?.[1] || null;
        if (subFolder?.length) {
            let pipedTitle = subFolder.replace(/\//g, '');
            pipedTitle = pipedTitle.includes('?') ? pipedTitle.split('?')[0] : pipedTitle;
            pageTitle = `Koda & Chasm | ${processCategoryName(pipedTitle)}`;
        }
    }
    
    // optionally access and extend (rather than replace) parent metadata
    //   const previousImages = (await parent).openGraph?.images || [];

    const metadataObj = {
        metadataBase: new URL('https://hollyngrade.com'),
        title: pageTitle,
        description: pageDesc,
        openGraph: {
            title: pageTitle,
            description: pageDesc,
            url: `https://hollyngrade.com${pathname}`,
            images: ['favicon.ico'],
        },
    }
    
    return metadataObj;
}

export default async function RootLayout({ children }) {
    const session = await getServerSession(options);
    const headerStore = await headers();
    const searchParams = Object.fromEntries(
        new URLSearchParams(headerStore.get('searchParams') || '')
    );

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
                <SessionProvider session={session}>
                    <main className={`flex flex-col min-h-screen items-center justify-center`}>
                        {children}
                    </main>

                    <footer className="flex flex-col w-[85%] max-w-2xl items-center justify-between mx-auto py-2 px-2 sm:p-4 bg-zinc-50 mt-8 mb-10">
                        <ul className="!list-none !pl-0 !flex flex-row w-full justify-center gap-8">
                            <li><Link href="https://twitch.tv/hollyngrade"
                                className="underline decoration-1 underline-offset-4 text-slate-800 hover:text-slate-900 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2">
                                    Twitch</Link></li>
                            <li><Link href="mailto:hollyngrade@gmail.com"
                                className="underline decoration-1 underline-offset-4 text-slate-800 hover:text-slate-900 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2">
                                Email</Link></li>
                            <li><Link href="https://hollymphillips.com"
                                className="underline decoration-1 underline-offset-4 text-slate-800 hover:text-slate-900 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2">
                                I build websites + apps, too</Link></li>
                            <li><Link href="/koda-and-chasm"
                                className="underline decoration-1 underline-offset-4 text-slate-800 hover:text-slate-900 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2">
                                Koda + Chasm<span className="sr-only">, a tribute to my dogs</span></Link></li>
                        </ul>
                        <p>Hollyn</p>
                    </footer>
                </SessionProvider>
            </body>
        </html>
    );
}
