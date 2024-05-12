// page.tsx
"use client"

import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';
import {fetchJobOfferById, applyJobOfferAsync} from "@/api/routes";
import {JobOfferDataForm, ApplicantDataForm} from "@/formData/formData";
import {CheckCircleIcon, InformationCircleIcon} from "@heroicons/react/16/solid";

const jobdetails = ({params: { id } }: { params: any }) => {
    const router = useRouter();
    const [jobDetails, setJobDetails] = useState<JobOfferDataForm | null>(null);
    const [form, setForm] = useState<ApplicantDataForm>({
        applicantName: '',
        applicantEmail: '',
        applicantPhone: '',
        applicationDate: new Date(),
        cv: {} as File,
        photo: {} as File,
        coverLetter: {} as File,
        jobOfferIds: [parseInt(id as string, 10)]
    });

    useEffect(() => {
        if (id) {
            const jobId = parseInt(id as string, 10); // Assurez-vous que 'id' est un nombre
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
        formData.append("applicantName", form.applicantName);
        formData.append("applicantEmail", form.applicantEmail);
        formData.append("applicantPhone", form.applicantPhone);
        formData.append("applicationDate", form.applicationDate.toISOString().split('T')[0]);
        formData.append("cvFile", form.cv);
        formData.append("photoFile", form.photo);
        formData.append("coverLetterFile", form.coverLetter);
        formData.append("jobOfferIds", JSON.stringify(form.jobOfferIds));

        await applyJobOfferAsync(formData);
    }

    return (
        <div className="p-4">
            <div className="overflow-hidden bg-white px-6 py-16 lg:px-8 xl:py-36">
                <div className="mx-auto max-w-max lg:max-w-7xl">
                    {jobDetails ? (
                        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                            <p className="text-base font-semibold leading-7 text-red-600">{jobDetails.location}</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{jobDetails.title}</h1>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Introduction à
                                l'entreprise</h2>
                            <p className="mt-6 text-xl leading-8">
                                {jobDetails.enterpriseIntroduction}
                            </p>

                            <div className="mt-10 max-w-2xl">

                                <h2 className="mt-20 text-2xl font-bold tracking-tight text-gray-900">Description du
                                    poste</h2> <br/>

                                <p>
                                    {jobDetails.postDescription}
                                </p>

                                <h2 className="mt-20 text-2xl font-bold tracking-tight text-gray-900"> Responsabilités
                                    Principales</h2>
                                <p className="mt-8">
                                    {jobDetails.principalResponsability}
                                </p>

                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Compétences et
                                    Qualifications Requises</h2>
                                <p className="mt-6">
                                    {jobDetails.competencies}
                                </p>

                                <p>
                                    {jobDetails.requiredQualifications}
                                </p>


                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Detail du
                                    poste</h2>
                                <p className="mt-10">
                                    {jobDetails.postDetails}
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Avantages</h2>
                                <p className="mt-10">
                                    {jobDetails.advantage}
                                </p>

                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Procédures de candidature</h2>
                                <p className="mt-10">
                                    {jobDetails.applyMethod}
                                </p>
                            </div>
                            <div className="mt-16 max-w-2xl">
                                <div className="mt-8 inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-black"
                                    >
                                        Postulez
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Chargement des détails du job...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default jobdetails;
