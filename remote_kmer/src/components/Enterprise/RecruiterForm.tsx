/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, {useState} from "react";
import {EnterpriseFormData} from "@/formData/formData";
import {createEnterprise} from "@/api/routes";
import IconCloud from "@/components/ui/icon-cloud";
import GridPattern from "@/components/ui/grid-pattern";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { useToast } from "@/components/ui/use-toast"
import {ToastAction} from "@/components/ui/toast";
import {Toaster} from "@/components/ui/toaster";


export default function RecruiterForm() {

    const { toast } = useToast();

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ');
    }

    const [formData, setFormData] = useState<EnterpriseFormData>({
        searchProfile: '',
        enterpriseName: '',
        firstName: '',
        lastName: '',
        enterpriseEmail: '',
        enterprisePhone: '',
        enterpriseDescription: '',
        contractType: 'CDI',
        delay: 'UNE_SEMAINE',
        lieuDuPoste: '',
        civility: 'MR',
        message: '',
    });

    const [agreed, setAgreed] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreed) {
            alert('Please agree to the privacy policy before submitting.');
            return;
        }
        try {
            const response = await createEnterprise(formData);
            console.log('Enterprise Created:', response);
            // Additional actions based on success (e.g., show success message or redirect)
        } catch (error) {
            console.error('Error creating enterprise:', error);
            // Handle errors (e.g., show error message)
        }
    };



    return (
        <div className="bg-[#15171F] py-16 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    className="relative isolate overflow-hidden bg-[#15171F] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Recrutez les Meilleurs Talents Africains
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                        Remplissez ce formulaire pour nous faire part de vos besoins en recrutement et découvrir des talents exceptionnels prêts à rejoindre votre équipe.
                    </p>
                    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="searchProfile"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Profil recherché <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="searchProfile"
                                        id="searchProfile"
                                        autoComplete="given-name"
                                        value={formData.searchProfile}
                                        onChange={handleChange}
                                        placeholder="Dévéloppeur Java"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="contractType"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Type de contrat <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        id="contractType"
                                        name="contractType"
                                        value={formData.contractType}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="CDI">CDI</option>
                                        <option value="CDD">CDD</option>
                                        <option value="MISSION">Mission</option>
                                    </select>
                                    <ChevronDownIcon
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-black"
                                        aria-hidden="true"
                                    />
                                </div>

                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="lieuDuPoste"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Lieu du poste <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lieuDuPoste"
                                        id="lieuDuPoste"
                                        autoComplete="lieuDuPoste"
                                        value={formData.lieuDuPoste}
                                        onChange={handleChange}
                                        placeholder="Remote, Paris"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="delay" className="block text-sm font-semibold leading-6 text-white">
                                    Sous quel délai ? <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        id="delay"
                                        name="delay"
                                        className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="UNE_SEMAINE">Une Semaine</option>
                                        <option value="UN_MOIS">Un Mois</option>
                                        <option value="TROIS_MOIS">Trois Mois</option>
                                        <option value="AUTRE">Autre</option>
                                    </select>
                                    <ChevronDownIcon
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="enterpriseName"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Entreprise <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="enterpriseName"
                                        id="enterpriseName"
                                        value={formData.enterpriseName}
                                        onChange={handleChange}
                                        autoComplete="enterprise"
                                        placeholder="Digital Youths"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="civility"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Civilité <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        name="civility"
                                        id="civility"
                                        value={formData.civility}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Choisir</option>
                                        <option value="MR">Monsieur</option>
                                        <option value="MME">Madame</option>
                                        <option value="MLLE">Mademoiselle</option>
                                    </select>
                                    <ChevronDownIcon
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="lastName"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Nom <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        autoComplete="lastName"
                                        placeholder="Smith "
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 ">
                                <label htmlFor="firstName"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Prénom
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        autoComplete="firstName"
                                        placeholder="Henri"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                    Email <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="enterpriseEmail"
                                        id="enterpriseEmail"
                                        autoComplete="email"
                                        value={formData.enterpriseEmail}
                                        onChange={handleChange}
                                        placeholder="digital.youths@gmail.com"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="enterprisePhone"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Numéro de téléphone <span className="text-red-500"> *</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="enterprisePhone"
                                        id="enterprisePhone"
                                        value={formData.enterprisePhone}
                                        onChange={handleChange}
                                        placeholder="06 00 00 00 00"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="message"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                      <textarea
                                          name="message"
                                          placeholder="Dites-nous-en plus sur votre projet de recrutement"
                                          id="message"
                                          rows={4}
                                          value={formData.message}
                                          onChange={handleChange}
                                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                </div>
                            </div>
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-4">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed ? 'bg-blue-700' : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 text-gray-200">
                                    J'accepte d'être contacté via cet email
                                    <a href="#" className="font-semibold text-indigo-600">
                                    </a>
                                    .
                                </Switch.Label>
                            </Switch.Group>
                        </div>
                        <div className="mt-10">
                            <button

                                type="submit"
                                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Envoyez ma demande
                            </button>
                        </div>
                    </form>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                fillOpacity="0.7"/>
                        <defs>
                            <radialGradient
                                id="759c1415-0410-454c-8f7c-9a820de03641"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(512 512) rotate(90) scale(512)"
                            >
                                <stop stopColor="#0000FF"/>
                                <stop offset={1} stopColor="#0000FF" stopOpacity={0}/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
