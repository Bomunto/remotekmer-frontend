//useAuthenticationStore.ts
import { create } from 'zustand'
import {
    getAuthToken,
    setAuthToken,
    deleteAuthToken,
    setUserInfo,
    getUserInfo,
} from '@/hooks/authToken'

interface AuthenticationState {
    token: string | undefined
    refreshToken: string | undefined
    userInfo: any
    setToken: (v: string) => void
    setRefreshToken: (v: string) => void
    setUserInfo: (v: any) => void
    deleteToken: () => void
}

const useAuthenticationStore = create<AuthenticationState>((set) => {
    return {
        token: getAuthToken('access'),
        refreshToken: getAuthToken('refresh'),
        userInfo: getUserInfo(),
        setToken: (v: string) => {
            setAuthToken(v, 'access')
            set({ token: v })
        },
        setRefreshToken: (v: string) => {
            setAuthToken(v, 'refresh')
            set({ refreshToken: v })
        },
        setUserInfo: (v: any) => {
            setUserInfo(v)
            set({ userInfo: v })
        },
        deleteToken: () => {
            deleteAuthToken('access')
            deleteAuthToken('refresh')
            set({ token: undefined, refreshToken: undefined })
        },
    }
})

export default useAuthenticationStore
