'use client'

import { BottomMenu } from './bottom-menu/BottomMenu'
import { Desktop } from './desktop/Desktop'
import { Header } from './header/Header'

export const DesktopPage = () => {
	return (
		<>
			<div className='ease-in flex relative flex-col bg-transparent w-full h-screen bg-wallpaper bg-center bg-cover overflow-hidden'>
				<Header />
				<Desktop />
				<BottomMenu />
			</div>
		</>
	)
}
