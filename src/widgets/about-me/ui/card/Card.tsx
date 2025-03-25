import { ReactNode } from 'react'
import { StatusBar } from '../status-bar/StatusBar'

type Props = {
	children: ReactNode
	statusBar?: boolean
	status?: 'About me' | 'Skills' | 'Education' | 'Projects' | 'Contacts'
}

export const Card = ({ children, status }: Props) => {
	return (
		<div className='w-[800px] h-[500px] bg-about-me-background rounded-[10px] flex flex-col relative'>
			{status && <StatusBar status={status} />}
			{children}
		</div>
	)
}
