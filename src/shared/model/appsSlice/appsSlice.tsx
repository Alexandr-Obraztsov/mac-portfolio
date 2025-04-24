import { App, AppTypes } from '@/shared/model/App.types'
import { createSlice } from '@reduxjs/toolkit'
import { v1 } from 'uuid'

const initialState = {
	apps: [
		{
			id: v1(),
			type: AppTypes.HI,
			zIndex: 0,
			isActive: true,
		},
	] as App[],
}

export const appsSlice = createSlice({
	name: 'app',
	initialState,
	reducers(creators) {
		const setActiveAppById = (state: typeof initialState, id: string) => {
			const index = state.apps.findIndex(app => app.id === id)
			state.apps.forEach(app => {
				app.isActive = false
				if (app.zIndex > state.apps[index].zIndex) app.zIndex--
			})
			state.apps[index].isActive = true
			state.apps[index].zIndex = state.apps.length
		}

		return {
			openApp: creators.reducer<{ type: AppTypes; params?: unknown }>(
				(state, action) => {
					for (const app of state.apps) {
						if (app.type === action.payload.type) {
							setActiveAppById(state, app.id)
							return
						}
					}
					const id = v1()
					state.apps.push({
						id,
						type: action.payload.type,
						zIndex: state.apps.length,
						params: action.payload.params,
						isActive: true,
					} as App)
					setActiveAppById(state, id)
				}
			),
			closeApp: creators.reducer<{ id: string }>((state, action) => {
				const index = state.apps.findIndex(app => app.id === action.payload.id)
				if (index !== -1) state.apps.splice(index, 1)
			}),
			setActiveApp: creators.reducer<{ id: string }>((state, action) => {
				setActiveAppById(state, action.payload.id)
			}),
		}
	},
	selectors: {
		selectApps: state => state.apps,
	},
})

export const { openApp, closeApp, setActiveApp } = appsSlice.actions
export const { selectApps } = appsSlice.selectors
export const appsReducer = appsSlice.reducer
