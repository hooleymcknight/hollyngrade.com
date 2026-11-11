import type { Metadata } from "next";
import { Bricolage_Grotesque, Literata } from "next/font/google";
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

export const metadata: Metadata = {
    title: "hollyngrade | STAGING",
    description: "Streams, fundraisers, backyard events, and the projects in between.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${bricolage.variable} ${literata.variable} h-full antialiased scroll-smooth`}
        >
            <body className="min-h-full flex flex-col nebula">
                <nav>
                    <div className="nav-inner">
                        <span className="site-name">hollyngrade</span>
                        <div className="nav-links-container">
                            <ul>
                                <li><Link href="#">Garden</Link></li>
                                <li><Link href="#">Koda + Chasm</Link></li>
                                <li><Link href="/a-z-stream-gauntlet">A-Z</Link></li>
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
