import useAuthenticationStore from '@/store/useAuthenticationStore'

import { LoginDataForm } from '@/formData/formData'
import {LoginAsync} from "@/api/routes";

const useAuthentication = () => {
    const {
        token,
        setToken,
        setRefreshToken,
        deleteToken,
        setUserInfo,
        userInfo,
    } = useAuthenticationStore()

    const authenticate = async (data: LoginDataForm): Promise<string> => {
        const response = await LoginAsync(data)
        const access = response.access
        setToken(access)
        setRefreshToken(response.refresh)

        return access
    }

    //get user infos
/*    const getUserInfos = async () => {
        const response = await getMeAsync()
        setUserInfo(response)
    }*/

    const disconnect = () => {
        deleteToken()
    }

    const isAuthenticate = (): boolean => {
        return !!token
    }

    return { authenticate, disconnect, isAuthenticate }
}

export default useAuthentication
