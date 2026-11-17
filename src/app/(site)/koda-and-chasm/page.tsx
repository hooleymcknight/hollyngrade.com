'use client';
import Image from "next/image";
import BentoBoxCompartment from "@/app/(site)/components/bentoBoxCompartment";

export default function KodaChasm() {

    return (
        <main data-page="index" className="grid grid-cols-[1fr] sm:grid-cols-[repeat(4,minmax(0,1fr))] auto-rows-[minmax(200px,auto)] w-[95%] max-w-[var(--max-page-width)] mx-auto pb-32 gap-4">

            <BentoBoxCompartment startCol={2} endCol={4} startRow={1} endRow={1}>
                <h1 className="bento-eyebrow">Koda + Chasm</h1>
                <div>
                    <h2 className="text-[color:var(--faded-white)] mt-4 mb-8">Coming soon</h2>
                    <Image src="/coming-soon/dogs-cover.jpg" alt="Koda and Chasm smiling directly at the camera" width={800} height={600} />
                </div>
            </BentoBoxCompartment>

        </main>
    );
}
