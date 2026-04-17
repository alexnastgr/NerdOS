import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'
import { setAppOpen } from '@/store/slices/dockSlice'

export function useDockApps() {
    const dispatch = useDispatch<AppDispatch>()
    const apps = useSelector((state: RootState) => state.dockbar.apps)


    const isOpen = (id: string) => {
        return apps.find(app => app.name.en === id)?.isOpen ?? false
    }

    const openApp = (id: string) => {
        dispatch(setAppOpen({ id, isOpen: true }))
    }

    const closeApp = (id: string) => {
        dispatch(setAppOpen({ id, isOpen: false }))
    }

    const toggleApp = (id: string) => {
        const app = apps.find(a => a.name.en === id)
        if (!app) return

        dispatch(setAppOpen({ id, isOpen: !app.isOpen }))
    }



    return {
        apps,
        isOpen,
        openApp,
        closeApp,
        toggleApp,
    }
}