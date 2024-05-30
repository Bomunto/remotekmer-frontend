const jobOpenings = [
    {
        id: 1,
        role: 'Accès aux Meilleurs Talents Africains',
        href: '#',
        description:
            'Connectez-vous avec des professionnels tech de haut niveau en Afrique, notamment des développeurs, designers, et experts DevOps. EmploiZen offre un accès direct à des talents passionnés et innovants, prêts à propulser votre entreprise.',
        salary: '$75,000 USD',
        location: 'San Francisco, CA',
    },
    {
        id: 2,
        role: 'Flexibilité et Coût-Efficacité',
        href: '#',
        description:
            'Tirez parti de la flexibilité du télétravail pour réduire vos coûts opérationnels tout en maintenant une qualité de travail exceptionnelle. L\'engagement de talents africains vous permet d\'optimiser votre budget tout en supportant la croissance de votre startup.',
        salary: '$125,000 USD',
        location: 'San Francisco, CA',
    },
    {
        id: 3,
        role: 'Support Complet et Partenariat Innovant',
        href: '#',
        description:
            'Profitez d\'un processus de recrutement facilité de A à Z, assurant une intégration parfaite des talents dans votre culture d\'entreprise. En collaborant avec EmploiZen, accédez également à un réseau d\'innovation à travers des ateliers et des séminaires, enrichissant ainsi votre parcours entrepreneurial.',
        salary: '$105,000 USD',
        location: 'San Francisco, CA',
    },
]

import Image from "next/image";
import Homme from "../../../public/Homme.jpg";

export default function FeatureEnterprise() {
    return (
        <div className="bg-[#15171F] py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                    <div className="w-full lg:max-w-lg lg:flex-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Transformez Votre Startup avec EmploiZen
                        </h2>
                        <p className="mt-6 text-xl leading-8 text-white">
                            Maximisez votre potentiel de croissance en intégrant les meilleurs talents tech d'Afrique.
                        </p>
                        <Image
                            src={Homme}
                            width={500}
                            height={500}
                            alt=""
                            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                        />
                    </div>
                    <div className="w-full lg:max-w-xl lg:flex-auto">
                        <h3 className="sr-only">Job openings</h3>
                        <ul className="-my-8 divide-y divide-gray-100">
                            {jobOpenings.map((opening) => (
                                <li key={opening.id} className="py-8">
                                    <dl className="relative flex flex-wrap gap-x-3">
                                        <dt className="sr-only">Role</dt>
                                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-blue-600">
                                            <a href={opening.href}>
                                                {opening.role}
                                                <span className="absolute inset-0" aria-hidden="true" />
                                            </a>
                                        </dd>
                                        <dt className="sr-only">Description</dt>
                                        <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-50">{opening.description}</dd>
                                        <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">

                                        </dd>
                                    </dl>
                                </li>
                            ))}
                        </ul>
                     {/*   <div className="mt-8 flex border-t border-gray-100 pt-8">
                            <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                View all openings <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
