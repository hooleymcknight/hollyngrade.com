'use client'
import { Suspense } from "react";
import { useParams } from "next/navigation.js";

import { processCategoryName }from "../components/lightboxHelpers";
import MasonryGallery from '@/app/chasm/components/masonryGallery';

export default function ViewAll() {
    const slug = useParams()?.slug;

    return (
        <Suspense fallback={null}>
            <MasonryGallery
                heading={processCategoryName(slug)}
                slug={slug}
            />
        </Suspense>
    );
}