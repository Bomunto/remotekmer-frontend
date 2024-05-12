import {useFormContext} from "react-hook-form";
import {JobOfferDataForm} from "@/formData/formData";
import {useEffect, useState} from "react";
import {fetchAllJobOffersAsync} from "@/api/routes";


export const useJob = () => {
    const [jobOffers, setJobOffers] = useState<JobOfferDataForm[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchJobs = async() => {
            try{
                setLoading(true);
                const jobs = await fetchAllJobOffersAsync();
                setJobOffers(jobs);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.error("Error while fetching jobs: ", e);
            }
        }
        fetchJobs();
    }, []);

    return {jobOffers, loading}
}