'use client'

import { useAppSelector } from '@/shared/lib'
import { Apps } from '@/shared/model/Apps'
import { selectApps } from '@/shared/model/appsSlice/appsSlice'

export const AppContainer = () => {
	const apps = useAppSelector(selectApps)
	return (
		<div className='z-[999]'>
			{apps.map(app => {
				const App = Apps[app.type]
				return <App key={app.id} app={app} params={app.params} />
			})}
		</div>
	)
}
