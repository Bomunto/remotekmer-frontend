import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { searchJobOffer } from '@/api/routes';
import { Combobox, Transition, Dialog } from '@headlessui/react';
import { MagnifyingGlassIcon, CheckIcon } from '@heroicons/react/20/solid';
import { JobOfferDataForm } from '@/formData/formData';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Search() {
    const [searchInput, setSearchInput] = useState<string>('');
    const [jobs, setJobs] = useState<JobOfferDataForm[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (searchInput.length > 1) {
            const fetchJobs = async () => {
                try {
                    const fetchedJobs = await searchJobOffer(searchInput);
                    setJobs(fetchedJobs);
                } catch (error) {
                    console.error('Error searching job offers:', error);
                    setJobs([]);
                }
            };
            fetchJobs();
        } else {
            setJobs([]);
        }
    }, [searchInput]);

    const handleSelectJob = (job: JobOfferDataForm) => {
        router.push(`/jobdetails/${job.id}`);
    };

    return (
        <div className="relative mt-5 w-full">
            <Combobox onChange={handleSelectJob}>
                <div className="relative">
                    <MagnifyingGlassIcon
                        className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                    />
                    <Combobox.Input
                        className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Search for jobs..."
                        onChange={(event) => setSearchInput(event.target.value)}
                    />
                </div>
                {jobs.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm text-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {jobs.map((job) => (
                            <Combobox.Option
                                key={job.id}
                                value={job}
                                className={({ active }) =>
                                    classNames('cursor-default select-none relative py-2 pl-10 pr-4', active ? 'bg-blue-600 text-white' : 'text-gray-900')
                                }
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span className={classNames('block truncate', selected ? 'font-medium' : 'font-normal')}>
                                            {job.title}
                                        </span>
                                        {selected && (
                                            <span className={classNames('absolute inset-y-0 left-0 flex items-center pl-3', active ? 'text-white' : 'text-indigo-600')}>
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </Combobox>
        </div>
    );
}
