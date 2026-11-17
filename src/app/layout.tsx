import type { Metadata } from "next";
import { Bricolage_Grotesque, Literata, Saira_Stencil, Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import "./site.css";
import "./(site)/styles/navigation.css";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
});

const literata = Literata({
    variable: "--font-literata",
    subsets: ["latin"],
});

const stencil = Saira_Stencil({
    variable: "--font-stencil",
    subsets: ["latin"],
});

const saira = Saira_Semi_Condensed({
    variable: "--font-saira",
    weight: ['400', '600', '700'],
    subsets: ["latin"],
});

const siteDesc = "Streams, fundraisers, backyard events, and the projects in between.";

export const metadata: Metadata = {
    metadataBase: new URL("https://hollyngrade.com"),
    title: "hollyngrade",
    description: siteDesc,
    openGraph: {
        title: "hollyngrade",
        description: siteDesc,
        images: [{ url: "/meta/hollyngrade-meta-img.png", width: 1200, height: 630, alt: "hollyngrade" }],
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${bricolage.variable} ${literata.variable} ${saira.variable} ${stencil.variable} h-full antialiased scroll-smooth`}
        >
            <body className="min-h-full flex flex-col nebula">
                <nav>
                    <div className="nav-inner">
                        <a className="site-name" href="/">hollyngrade</a>
                        <div className="nav-links-container">
                            <ul>
                                <li><Link href="#">Garden</Link></li>
                                <li><Link href="#">Koda + Chasm</Link></li>
                                <li><Link href="/az-gauntlet">A-Z</Link></li>
                                {/* <li><Link href="/events">Events</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
