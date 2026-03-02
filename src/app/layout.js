import { Geist, Geist_Mono, Open_Sans, Allerta } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "hollyngrade",
  description: "full website coming soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <title>hollyngrade</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Allerta&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
