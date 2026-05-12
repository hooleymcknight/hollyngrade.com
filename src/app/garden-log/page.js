'use client'
import { useState } from "react";

export default function gardenLog() {

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div id="garden-log" className="flex max-h-screen w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}>
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-center sm:items-center sm:text-left sm:flex-nowrap">
                    garden log page
                </div>
            </div>
        </main>
    );
}