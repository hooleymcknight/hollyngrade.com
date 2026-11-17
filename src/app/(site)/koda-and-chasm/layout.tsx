import type { Metadata } from "next";

const kcTitle = "Koda & Chasm Photo Gallery";
const kcDesc = "Remembering Koda & Chasm.";

export const metadata: Metadata = {
    title: kcTitle,
    description: kcDesc,
    openGraph: {
        title: kcTitle,
        description: kcDesc,
        images: [{ url: "/meta/cowdogs.webp", width: 1200, height: 630, alt: "Koda and Chasm in cowboy hats" }],
    },
};

export default function KodaChasmLayout({ children }: { children: React.ReactNode }) {
    return children;
}
