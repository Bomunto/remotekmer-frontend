"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Search from "@/components/Search";
import JobList from "@/components/Job/JobList";



interface HeroProps {
    jobTitle?: string;
}
export function HeroBackgroundBeams( { jobTitle }: HeroProps) {
    return (
        <>
            <div
                className="h-[20rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        {jobTitle}
                    </h1>
                </div>
                <BackgroundBeams/>
            </div>

        </>

    )
}
