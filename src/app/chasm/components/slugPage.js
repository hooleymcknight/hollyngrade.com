'use client'
import { Suspense } from "react";
import { useParams } from "next/navigation.js";

import { processCategoryName }from "../components/helpers/lightboxHelpers";
import MasonryGallery from '@/app/chasm/components/masonryGallery';

export default function SlugPage() {
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