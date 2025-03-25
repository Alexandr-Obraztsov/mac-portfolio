import { closeApp, setActiveApp } from '@/shared/model/appsSlice/appsSlice'
import { AppProps } from '../model/App.types'
import { useAppDispatch } from './useAppDispatch'

export const useApp = ({ app }: AppProps) => {
	const dispatch = useAppDispatch()

	const [closeThisApp, setActiveThisApp] = [closeApp, setActiveApp].map(
		action => () => dispatch(action({ id: app.id }))
	)

	return { closeThisApp, setActiveThisApp }
}
