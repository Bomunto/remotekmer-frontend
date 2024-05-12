import axiosClient from '@/api/axios'
import {
    LoginDataForm, RegisterDataForm, JobOfferDataForm, ApplicantDataForm
} from "@/formData/formData";
import {LoginOutputModel} from "@/api/models/outputs";
import {AxiosResponse} from "axios";


export const RegisterAsync = async (data: RegisterDataForm) => {
    await axiosClient.post('/user/register', data)
}

export const LoginAsync = async(data: LoginDataForm
): Promise<LoginOutputModel> => {
    const response = await axiosClient.post<LoginOutputModel>(
        '/user/login', data)
    return response.data
}

export const fetchAllJobOffersAsync = async(): Promise<JobOfferDataForm[]> => {
    const response = await axiosClient.get<JobOfferDataForm[]>('/jobOffer/fetchAll');
    return response.data
}
export const fetchJobOfferById = async (id: number): Promise<JobOfferDataForm> => {
    const response = await axiosClient.get<JobOfferDataForm>(`/jobOffer/fetchById/${id}`);
    return response.data;
}


export const applyJobOfferAsync = async (data: FormData): Promise<AxiosResponse> => {
    const response = await axiosClient.post('/applicants/apply', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response
}