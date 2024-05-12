import useGlobalErrorPopupStore from '@/store/useGlobalErrorPopupStore'

const useGlobalErrorPopup = () => {
    const { setData } = useGlobalErrorPopupStore()
    const open = (title: string, description: string) => {
        setData({
            isOpen: true,
            title: title,
            description: description,
        })
    }
    const close = () => {
        setData({
            isOpen: false,
            title: '',
            description: '',
        })
    }

    return { open, close }
}

export default useGlobalErrorPopup
