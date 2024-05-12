import { create } from 'zustand'

interface ErrorPopupData {
    isOpen: boolean
    title: string
    description: string
}

interface ErrorPopupStoreState {
    data: ErrorPopupData
    setData: (v: ErrorPopupData) => void
}

const useGlobalErrorPopupStore = create<ErrorPopupStoreState>()((set) => ({
    data: { isOpen: false, title: '', description: '' },
    setData: (v) => set((state) => ({ data: v })),
}))

export default useGlobalErrorPopupStore
