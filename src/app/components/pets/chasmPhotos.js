import Image from "next/image";

const photos = [
    {
        path: '/chasm/babies.jpg',
        alt: 'Koda and Chasm as babies, 2012',
    },
    {
        path: '/chasm/bed.jpg',
        alt: 'Chasm sleeping on my bed, 2026',
    },
    {
        path: '/chasm/Chasm_in_door.jpg',
        alt: 'Chasm sticking his head through the cat door, 2022',
    },
    {
        path: '/chasm/Chasm-peanut-butter.jpg',
        alt: 'Chasm snacking on some peanut butter after a major surgery, Jan 2024',
    },
    {
        path: '/chasm/derpy.jpg',
        alt: 'Chasm right after he woke up from a nap, 2025',
    },
    {
        path: '/chasm/katie.jpg',
        alt: 'Chasm enjoying pets from Katie, 2026',
    },
    {
        path: '/chasm/KC_hats.jpg',
        alt: 'Koda and Chasm wearing cowboy hats, 2025',
    },
    {
        path: '/chasm/pbface.jpg',
        alt: 'Chasm with peanut butter on his face, 2026',
    },
    {
        path: '/chasm/porch.jpg',
        alt: 'Chasm and Koda on the back porch, 2026',
    },
    {
        path: '/chasm/winnie.jpg',
        alt: 'Koda and Chasm wearing Tigger and Eeyore costumes, respectively, 2024',
    },
    // {
    //     path: '/chasm/.jpg',
    //     alt: '',
    // },
]

export default function ChasmPhotos () {
    return (
        <div id="chasm-photos" className="mt-20 text-center">
            <h2 className="text-2xl font-bold">Photo Gallery</h2>
            <small className="text-center block mt-4 mb-8">Click any photo to open in new tab.</small>
            <div id="chasm-photos" className="flex flex-row flex-wrap justify-center items-center w-full">
                {photos.map(x => 
                    <a key={x.path} href={x.path} alt={x.alt} target="_blank" className="m-2">
                        <Image
                            src={x.path}
                            alt={x.alt}
                            width={600}
                            height={100}
                            className="w-full"
                        />
                    </a>
                )}
            </div>
        </div>
    );
}