
import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from '@/store/slices/settingsSlice'
import dockReducer from '@/store/slices/dockSlice'

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    dockbar: dockReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch