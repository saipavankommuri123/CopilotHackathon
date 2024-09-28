import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './slice/homeSlice'
import userSlice from './slice/userSlice'

const store = configureStore({
  reducer: {
    home: homeSlice,
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
