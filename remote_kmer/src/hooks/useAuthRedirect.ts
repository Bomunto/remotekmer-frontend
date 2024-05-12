import { useEffect } from 'react'
import useAuthentication from '@/hooks/useAuthentication'
import { usePathname, useRouter } from 'next/navigation'

const useAuthRedirect = () => {
    const router = useRouter()
    const { isAuthenticate } = useAuthentication()
    const path = usePathname()

    useEffect(() => {
        if (!isAuthenticate()) {
            router.push('/auth/login')
        }
    }, [isAuthenticate, path, router])
}

export default useAuthRedirect
