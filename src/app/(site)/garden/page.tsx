'use client';
import Image from "next/image";
import BentoBoxCompartment from "@/app/(site)/components/bentoBoxCompartment";

export default function Garden() {

    return (
        <main data-page="index" className="grid grid-cols-[repeat(4,minmax(0,1fr))] auto-rows-[minmax(200px,auto)] w-[95%] max-w-[var(--max-page-width)] mx-auto pb-32 gap-4">

            <BentoBoxCompartment startCol={2} endCol={4} startRow={1} endRow={1}>
                <h1 className="bento-eyebrow">Garden</h1>
                <div id="twitch-offline">
                    <h2 className="text-[color:var(--faded-white)] mt-4 mb-8">Coming soon</h2>
                    <Image src="/coming-soon/garden-cover.jpg" alt="a garden bed with a variety of plants, in the sunlight" width={800} height={600} />
                </div>
            </BentoBoxCompartment>

        </main>
    );
}
