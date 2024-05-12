import {useState} from "react";
import {ApplicantDataForm} from "@/formData/formData";
import {applyJobOfferAsync} from "@/api/routes";
import useGlobalErrorPopupStore from "@/store/useGlobalErrorPopupStore";


export const useJobApplication = () => {
    const [loading, setLoading] = useState(false)
    const{setData} = useGlobalErrorPopupStore();


    const apply = async(applicantData: ApplicantDataForm) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("applicantName", applicantData.applicantName);
            formData.append("applicantEmail", applicantData.applicantEmail);
            formData.append("applicantPhone", applicantData.applicantPhone);
            formData.append("applicationDate", applicantData.applicationDate.toISOString().split('T')[0]);
            formData.append("cvFile", applicantData.cv);
            formData.append("photoFile", applicantData.photo);
            formData.append("coverLetterFile", applicantData.coverLetter);
            formData.append("jobOfferIds", JSON.stringify(applicantData.jobOfferIds));

            await applyJobOfferAsync(formData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setData({
                isOpen: true,
                title: "Job Application Error",
                description: "There was an issue while applying for the job. Please try again.",
            });
            console.error("Error applying to job offer:", error);
        }
    }

    return {apply, loading};
}






