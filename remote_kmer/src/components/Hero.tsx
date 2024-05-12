"use client"
import React, { useState } from 'react';
import { searchJobOffer } from '@/api/routes';
import Search from "@/components/Search";




export default function Hero() {

    const [searchTitle, setSearchTitle] = useState('');

    const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTitle(event.target.value);
    };

    const handleSearchSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (!searchTitle) return;
        try {
            const results = await searchJobOffer(searchTitle);
            console.log(results); // Ici, vous pourriez vouloir faire quelque chose avec les résultats
        } catch (error) {
            console.error('Error searching job offers:', error);
        }
    };
    return (
        <div className="bg-[#F4F7FA] ">
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-4xl mt-20 py-32 sm:py-14 lg:py-32">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold tracking-tight text-black sm:text-6xl">
                            Découvrez les meilleurs emplois à distance
                        </h1>
                        <p className="mt-7 text-lg leading-8 text-black">
                            Le premier site Camerounais dédiés au jobs 100% télétravail.
                            <br/>

                        </p>
                        <p className="text-lg leading-8 text-black">Inscris toi à la
                            <span className="text-lg text-red-600"> newsletter </span>
                            pour recevoir les annonces par mail.</p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Search />

                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}