import Image from "next/image";
import BentoBoxCompartment from "./components/bentoBoxCompartment";

export default function Home() {
    return (
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between mx-auto py-32 px-16 sm:items-start">
            <BentoBoxCompartment>
                test
            </BentoBoxCompartment>
        </main>
    );
}
