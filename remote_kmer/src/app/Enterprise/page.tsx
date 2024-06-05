'use client'
import React, {useRef} from 'react'
import {Spotlight} from "@/components/ui/spotlight";
import {cn} from "@/utils/cn";
import FeatureEnterprise from "@/components/Enterprise/featureEnterprise";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import RecruiterForm from "@/components/Enterprise/RecruiterForm";
import {Rocket} from "lucide-react";


export default function Enterprise() {

    const recruiterFormRef = useRef<HTMLDivElement>(null);

    const handleScrollToForm = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        if (recruiterFormRef.current) {
            recruiterFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="h-[40rem] w-full rounded-md bg-[#15171F] relative flex items-center justify-center antialiased">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 md:px-20">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                            <h1 className="scroll-m-20 font-caption leading-10 text-3xl md:text-4xl font-extrabold tracking-tight text-white lg:text-4xl">
                                À la Recherche de <span className="text-blue-600">Talents</span> uniques <br/>
                            </h1>
                            <br/>
                            <h2 className="scroll-m-20 font-caption leading-10 text-white text-2xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0 italic">
                                Découvrez Comment un Recrutement Zen Peut Dynamiser Votre Équipe
                            </h2>
                            <br/>
                            <p className="text-base md:text-lg font-normal text-gray-50 text-muted-foreground leading-10">
                                Avez-vous envisagé les avantages d'un partenariat avec l'Afrique ?
                            </p>
                            <br/>
                            <a className=" border-2 w-fit bg-primary group relative inline-flex items-center overflow-hidden rounded-full px-8 py-3 text-foreground transition"
                               href="#recruiter-form" onClick={handleScrollToForm}>
                                <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                                </div>
                                <div className="absolute inset-0.5 rounded-full bg-blue-600"></div>
                                <div
                                    className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-foreground/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100">

                                </div>
                                <span
                                    className="relative flex items-center bg-blue-600 text-white gap-2 text-lg md:text-xl font-bold">
                                    <Rocket/>
                                     Recrutez maintenant
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-14 md:mt-0 flex justify-end gap-8 flex-wrap">
                        <div
                            className="relative mt-10 flex justify-end gap-8 sm:-mt-16 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                            <AnimatedGridPattern
                                numSquares={30}
                                maxOpacity={0.5}
                                duration={3}
                                repeatDelay={1}
                                className={cn(
                                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                                )}
                            />
                            <div
                                className="lg:flex hidden md:block ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                        alt=""
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                            <div className="hidden md:block mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                        alt=""
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                            <div className="hidden md:block w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                        alt=""
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                        alt=""
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                        </div>
                        <AnimatedGridPattern
                            numSquares={30}
                            maxOpacity={0.5}
                            duration={3}
                            repeatDelay={1}
                            className={cn(
                                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                            )}
                        />
                    </div>

                </div>
            </div>

            <div>
                <FeatureEnterprise/>
            </div>
            <div id="recruiter-form" ref={recruiterFormRef}>
                <RecruiterForm/>
            </div>
        </>
    )
}
