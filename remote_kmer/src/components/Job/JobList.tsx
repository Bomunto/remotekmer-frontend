import React from 'react';
import Link from 'next/link';
// Import icon images if you're using local assets
// import siteIcon from './icons/site-icon.png';
// import locationIcon from './icons/location-icon.png';

const jobs = [
    { id: 1, title: 'Alternance - Sales Development Representative', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 2, title: 'Assistant Commercial H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 3, title: 'Assistant administratif H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 4, title: 'Assistant Marketing H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 5, title: 'Assistant Support Logiciel H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 6, title: 'Assistant Support Utilisateurs H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 1, title: 'Alternance - Sales Development Representative', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 2, title: 'Assistant Commercial H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 3, title: 'Assistant administratif H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 4, title: 'Assistant Marketing H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 5, title: 'Assistant Support Logiciel H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 6, title: 'Assistant Support Utilisateurs H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },

    { id: 1, title: 'Alternance - Sales Development Representative', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 2, title: 'Assistant Commercial H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 3, title: 'Assistant administratif H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 4, title: 'Assistant Marketing H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 5, title: 'Assistant Support Logiciel H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 6, title: 'Assistant Support Utilisateurs H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },

    { id: 1, title: 'Alternance - Sales Development Representative', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 2, title: 'Assistant Commercial H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 3, title: 'Assistant administratif H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 4, title: 'Assistant Marketing H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 5, title: 'Assistant Support Logiciel H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 6, title: 'Assistant Support Utilisateurs H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },

    { id: 1, title: 'Alternance - Sales Development Representative', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 2, title: 'Assistant Commercial H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 3, title: 'Assistant administratif H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 4, title: 'Assistant Marketing H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site, Hybride' },
    { id: 5, title: 'Assistant Support Logiciel H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },
    { id: 6, title: 'Assistant Support Utilisateurs H/F', location: 'Montagnat, Auvergne-Rhône-Alpes, France', type: 'Sur site' },

];

export default function JobList() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les offres d'emploi 100% en télétravail</h2>
                    <p className="mt-2 leading-8 text-gray-600">
                        Voici les dernières annonces de jobs 100% en télétravail. Cette liste est mise à jour quotidiennement. Si tu veux recevoir toutes les offres, abonnes toi à la newsletter!
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-4 px-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="border p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-black">{job.title}</h3>
                            <div className="flex items-center text-black text-sm my-2">
                                <span>{job.type}</span>
                            </div>
                            <div className="flex items-center text-black text-sm">
                                <span>{job.location}</span>
                            </div>
                            <Link href={`/jobs/${job.id}`} passHref>
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
