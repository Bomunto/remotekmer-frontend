'use client'
import JobList from "@/components/Job/JobList";
import {HeroBackgroundBeams} from "@/components/HeroBackgroundBeams";
import Hero from "@/components/Hero";
import {Span} from "next/dist/server/lib/trace/tracer";
import {SpotlightPreview} from "@/components/SpotlightPreview";
import Search from "@/components/Search";
import {BackgroundBeams} from "@/components/ui/background-beams";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Acceuil() {

    return (
        <>
            <div
                className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">

                    Découvrez les meilleurs emplois à distance
                </h1>
                <p></p>
                <p className="text-white leading-9 my-2 text-lg text-center relative z-10">
                    La première plateforme Africaine dédiés aux jobs 100% télétravail.

                </p>
                <p className="text-white text-lg text-center "> Inscris toi à la
                    <span className="text-lg "> newsletter  </span>
                    pour recevoir les annonces par mail.
                </p>
                <div className=" focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700">
                    <Search/>
                </div>
            </div>
                <BackgroundBeams/>
            </div>
            <JobList/>
        </>

    )
}
