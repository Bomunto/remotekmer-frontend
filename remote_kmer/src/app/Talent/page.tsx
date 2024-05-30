'use client'
import JobList from "@/components/Job/JobList";
import { HeroBackgroundBeams } from "@/components/HeroBackgroundBeams";
import Search from "@/components/Search";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWordsDemo } from "@/components/FlipWord";
import { Spotlight } from "@/components/ui/spotlight";
import React from "react";
import IconCloud from "@/components/ui/icon-cloud"
import GridPattern from "@/components/ui/grid-pattern";
import {cn} from "@/utils/cn";
import {Features} from "@/components/Talent/Features";
import CTA from "@/components/newsletter";
import Newsletter from "@/components/newsletter";
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const slugs = [
    "springboot",
    "maven",
    "php",
    "postgresql",
    "jenkins",
    "kubernetes",
    "wordpress",
    "adobephotoshop",
    "adobexd",
    "adobeillustrator",
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export default function Talent() {
    return (
        <>
            <div
                className="h-[40rem] w-full rounded-md bg-[#15171F] relative flex items-center justify-center antialiased">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 md:px-20">
                    <div className="flex-1 flex justify-center leading-8 items-center">
                        <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                            <h1 className="scroll-m-20 font-caption text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight max-sm:text-3xl">
                                Atteignez votre <span className="text-blue-600">Zen</span> professionnel chez
                                EmploiZen <br/>
                            </h1>
                            <br/>
                            <h2 className="scroll-m-20 font-caption leading-10 text-2xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0 italic">
                                Êtes-vous un virtuose de la technologie en Afrique ?
                            </h2>
                            <p className="text-base md:text-lg font-normal text-gray-500 text-muted-foreground leading-10">
                                Prêt à affiner vos compétences et à trouver la tranquillité dans votre profession ?
                                Rejoignez EmploiZen si vous aspirez à unir passion et carrière.
                            </p>
                            <br/>

                            <a className="border-blue-600 border-2 w-fit bg-primary group relative inline-flex items-center overflow-hidden rounded-full bg-card px-8 py-3 text-foreground transition"
                               href="#">
                                <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                                    <div
                                        className="absolute w-full h-full animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100"></div>
                                </div>
                                <div className="absolute inset-0.5 rounded-full bg-card"></div>
                                <div
                                    className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-foreground/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
                                <span className="relative flex items-center gap-2 text-lg md:text-xl font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-rocket">
                                        <path
                                            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                        <path
                                            d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                    </svg> Rejoins maintenant
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-14 md:mt-0 flex justify-end md:justify-start gap-8 flex-wrap">
                        <div
                            className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 pb-20 pt-8 ">
                            <IconCloud iconSlugs={slugs}/>
                            <GridPattern
                                width={30}
                                height={30}
                                x={-1}
                                y={-1}
                                strokeDasharray={"4 2"}
                                className={cn(
                                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Features/>
            </div>
            <div>
                <Newsletter/>
            </div>

        </>
    )
}
