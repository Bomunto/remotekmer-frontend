import {useFormContext} from 'react-hook-form'
import {RegisterDataForm} from '@/formData/formData'
import {RegisterAsync} from "@/api/routes";
import {useRouter} from 'next/navigation'
import useGlobalErrorPopup from "@/hooks/useGlobalErrorPopup";


const useRegister = () => {
    const {handleSubmit} = useFormContext<RegisterDataForm>()
    const router = useRouter()
    const {open} = useGlobalErrorPopup()

    const onSubmit = async (data: RegisterDataForm) => {
        RegisterAsync(data)
            .then(() => {
                router.push('/auth/login')
            })
            .catch((error) => {
                if(error.response && error.response.status === 400) {
                    const {data: errors} = error.response
                    const errorMessage = Object.values(errors).flat().join('\n')
                    console.error(errorMessage)
                    open('Validation Error', errorMessage)
                } else {
                    open(error.name, error.message)
                }
            })
    }


    const submit = handleSubmit(onSubmit)

    return {submit}
}


export default useRegister