'use client' 
import { Suspense } from "react";
import MasonryGallery from '@/app/chasm/components/masonryGallery';

export default function ViewAll() {
    
    return (
        <Suspense fallback={null}>
            <MasonryGallery
                heading={'View All'}
            />
        </Suspense>
    );
}