'use client';

import React from 'react';
import Link from 'next/link';
import { useJob } from "@/hooks/JobOffer/useJob";

export default function JobList() {
    const { jobOffers, loading } = useJob();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white py-12 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Les offres d'emploi 100% en télétravail
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Voici les dernières annonces de jobs 100% en télétravail. Cette liste est mise à jour quotidiennement. Si tu veux recevoir toutes les offres, abonne-toi à la newsletter!
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {jobOffers.map((job) => (
                        <div key={job.id} className="border p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-black">{job.title}</h3>
                            <div className="flex items-center text-black text-sm my-2">
                                <span>{job.shortDescription}</span>
                            </div>
                            <div className="flex items-center text-black text-sm">
                                <span className="font-bold">{job.location}</span>
                            </div>
                            <Link href={`/jobdetails/${job.id}`}>
                                <button className="mt-4 bg-black text-white transition ease-in-out delay-150 rounded py-2 px-4 block w-full hover:-translate-y-1 hover:scale-110 hover:bg-gray-800">
                                    Afficher
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
