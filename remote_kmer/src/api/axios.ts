import axios from 'axios';
import {getAuthToken} from "@/hooks/authToken";

const CONFIG = {
    baseURL: process.env.NEXT_PUBLIC_SERVER_HOST
}


const axiosClient = axios.create(CONFIG);

axiosClient.interceptors.request.use(
    (config) => {
        /*const token = getAuthToken('access')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }*/
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


axiosClient.interceptors.response.use(
    (response) => response,
    (error) =>{
        console.warn('Interceptor error: ', error.reponse.status)
        if(error.response.status === 401){
            console.log('ok')
        }
        return Promise.reject(error)
    }
)

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.warn('Interceptor error: ', error.response?.status);
        return Promise.reject(error);
    }
)


export default axiosClient