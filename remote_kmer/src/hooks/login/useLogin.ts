import { useFormContext } from 'react-hook-form'
import { LoginDataForm } from '@/formData/formData'
import useAuthentication from '@/hooks/useAuthentication'
import { useRouter } from 'next/navigation'
import useGlobalErrorPopup from '@/hooks/useGlobalErrorPopup'

const useLogin = () => {
    const {handleSubmit} = useFormContext<LoginDataForm>()
    const router = useRouter()
    const { open } = useGlobalErrorPopup()
    const { authenticate } = useAuthentication()


    const onSubmit = async(data: LoginDataForm) => {
        try {
            await authenticate(data)
            router.push('/dashboard')

        }catch (error: any) {
            if(error.response && error.response.status === 400) {
                const {data: errors} = error.response
                const errorMessage = Object.values(errors).flat().join('\n')
                console.error(errorMessage)
                open('Validation Error', errorMessage)
            }
            else {
                open(error.name, error.message)
            }
        }
    }


    const submit = handleSubmit(onSubmit)

    return {submit}
}


export default useLogin