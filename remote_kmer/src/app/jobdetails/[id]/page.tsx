// page.tsx
"use client"

import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';
import {fetchJobOfferById, applyJobOfferAsync} from "@/api/routes";
import {JobOfferDataForm, ApplicantDataForm} from "@/formData/formData";
import Hero from "@/components/Job/Hero";
import Alerts from "@/components/Alerts";
import {HeroBackgroundBeams} from "@/components/HeroBackgroundBeams";
import Acceuil from "@/app/Home/page";

const jobdetails = ({params: { id } }: { params: any }) => {
    const router = useRouter();
    const [jobDetails, setJobDetails] = useState<JobOfferDataForm | null>(null);
    const [form, setForm] = useState<ApplicantDataForm>({
        applicantName: '',
        applicantEmail: '',
        applicantPhone: '',
        applicationDate: new Date(),
        cvFile: {} as File,
        coverLetterFile: {} as File,
        jobOfferIds: [parseInt(id as string, 10)]
    });
    const [showAlerts, setShowAlerts] = useState(false);

    useEffect(() => {
        if (id) {
            const jobId = parseInt(id as string, 10);
            setForm(currentForm => ({
                ...currentForm,
                jobOfferIds: [jobId]
            }));
            const fetchJobDetails = async () => {
                const job = await fetchJobOfferById(jobId);
                setJobDetails(job);
                console.log(job);
            };

            fetchJobDetails();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setForm({...form, [e.target.name]: e.target.files[0]});
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("cvFile", form.cvFile);
        formData.append("coverLetterFile", form.coverLetterFile);

        const additionalParams = {
            applicantName: form.applicantName,
            applicantEmail: form.applicantEmail,
            applicantPhone: form.applicantPhone,
            jobOfferId: form.jobOfferIds[0],
        };

        try {
            await applyJobOfferAsync(formData, additionalParams);
            setShowAlerts(true);
            setTimeout(() => {
                setShowAlerts(false);
            }, 3000);
            router.push("/");

        } catch (error) {
            console.error('Error applying for job offer:', error);
        }
    };

    return (
        <>

            <HeroBackgroundBeams jobTitle={jobDetails?.title} />
            <div className="">
                <div className="overflow-hidden bg-white px-6 py-10 lg:px-8 xl:py-10">
                    <div className="mx-auto max-w-max lg:max-w-7xl">
                        {jobDetails ? (
                            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                                <p className="text-base font-semibold leading-7 text-red-600">{jobDetails.location}</p>
                               {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{jobDetails.title}</h1>*/}
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Présentation</h2>
                                <p className="mt-6 text-justify leading-8">
                                    {jobDetails.enterpriseIntroduction}
                                </p>

                                <div className=" max-w-2xl">

                                    <h2 className="mt-20 text-2xl  font-bold tracking-tight text-gray-900"> Le profil
                                        recherché</h2>
                                    <p className="mt">
                                            <div>
                                                <p className="mt-6 text-justify"> {jobDetails.profileSearch}</p>
                                            </div>
                                    </p>
                                    <h2 className="mt-20 text-2xl font-bold tracking-tight text-gray-900">Missions du
                                        poste</h2> <br/>

                                    <p>
                                            <div>
                                                <p className=" text-justify">  {jobDetails.postMission}</p>
                                            </div>
                                    </p>

                                </div>
                                <div className="px-2 mt-20">
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Envoyez votre
                                        candidature
                                        dès maintenant !</h2>
                                    <form onSubmit={handleSubmit}
                                          className="bg-white mt-16 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                        <div className="px-4 py-6 sm:p-8">
                                            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="col-span-full">
                                                    <label htmlFor="applicantName"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Nom & Prénom
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="applicantName"
                                                            id="applicantName"
                                                            required
                                                            value={form.applicantName}
                                                            onChange={handleChange}
                                                            placeholder="Nom & Prénom"
                                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="applicantEmail"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Adresse mail
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="email"
                                                            name="applicantEmail"
                                                            id="applicantEmail"
                                                            required
                                                            placeholder="Adresse mail"
                                                            value={form.applicantEmail}
                                                            onChange={handleChange}
                                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="email"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Numéro de téléphone
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="tel"
                                                            name="applicantPhone"
                                                            id="applicantPhone"
                                                            required
                                                            value={form.applicantPhone}
                                                            onChange={handleChange}
                                                            placeholder="N° de téléphone"
                                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3 sm:col-start-1">
                                                    <label htmlFor="cvFile"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        CV
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="file"
                                                            name="cvFile"
                                                            id="cvFile"
                                                            required
                                                            onChange={handleFileChange}
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="coverLetterFile"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Lettre de Motivation
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="file"
                                                            name="coverLetterFile"
                                                            id="coverLetterFile"
                                                            required
                                                            onChange={handleFileChange}
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Postulez
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>


                        ) : (
                            <p>Chargement des détails du job...</p>
                        )}
                        {/* Display success notification after form submission */}
                        {showAlerts && (
                            <Alerts
                                message={`Félicitations! Votre candidature au poste de ${jobDetails?.title} a été transmise avec succès.`}
                                onClose={() => setShowAlerts(false)}
                            />
                        )}


                    </div>
                </div>
            </div>

        </>

    );
}

export default jobdetails;
