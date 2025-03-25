import { configureStore } from '@reduxjs/toolkit'
import { appsSlice } from './appsSlice/appsSlice'

export const store = configureStore({
	reducer: {
		[appsSlice.name]: appsSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
