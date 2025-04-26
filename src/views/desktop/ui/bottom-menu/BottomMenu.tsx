import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { AppTypes } from '@/shared/model/App.types'
import { openApp, selectApps } from '@/shared/model/appsSlice/appsSlice'
import { socials } from '@/shared/const/socials'
import music from 'public/media/icons/desktop/music.png'
import { useEffect, useRef } from 'react'
import { Item } from './Item'
import { Apps } from '@/shared/model/Apps'
import { cn } from '@sglara/cn'

export const BottomMenu = () => {
	const dispatch = useAppDispatch()
	const apps = useAppSelector(selectApps)

	const ref = useRef<HTMLUListElement>(null)

	const handleClickApp = (appType: AppTypes) => {
		dispatch(openApp({ type: appType }))
	}

	useEffect(() => {
		if (!ref.current) return

		const menu = ref.current

		const elements = menu.querySelectorAll('li')
		const iconSize = +getComputedStyle(menu)
			.getPropertyValue('--menu-icon-size')
			.replace('px', '')

		const handleMove = (event: MouseEvent) => {
			requestAnimationFrame(() => {
				elements.forEach(item => {
					const rect = item.getBoundingClientRect()
					const offsetX = event.clientX - (rect.left + rect.width / 2)
					const size =
						Math.max(iconSize, (1.6 - Math.abs(offsetX / 300)) * iconSize) +
						'px'

					item.style.width = size
					item.style.height = size
				})
			})
		}

		const handleLeave = () => {
			requestAnimationFrame(() => {
				elements.forEach(item => {
					item.style.width = iconSize + 'px'
					item.style.height = iconSize + 'px'
				})
			})
		}

		menu.addEventListener('mousemove', handleMove)
		menu.addEventListener('mouseleave', handleLeave)

		return () => {
			menu.removeEventListener('mousemove', handleMove)
			menu.removeEventListener('mouseleave', handleLeave)
		}
	}, [apps])

	return (
		<ul
			className='bottom-[20px] flex items-end justify-center gap-0 fixed md:-translate-x-1/2 md:left-1/2 max-md:static max-md:w-full 
			
			before:rounded-[20px] before:content-[""] before:absolute before:h-[var(--menu-icon-size)] before:w-full before:bg-secondary before:shadow-[0_0_2px_white_inset]'
			ref={ref}
		>
			<Item
				key={'music'}
				item={{
					img: music,
					title: 'Music',
					onClick: () => handleClickApp(AppTypes.MUSIC),
				}}
			/>
			<span className='w-[1.5px] shadow-[0_0_2px_white_inset] h-[calc(var(--menu-icon-size)-20px)] m-[10px_5px]'></span>
			{Object.values(socials).map(item => (
				<Item key={item.title} item={item} />
			))}
			<span
				className={cn(
					'w-[1.5px] shadow-[0_0_2px_white_inset] h-[calc(var(--menu-icon-size)-20px)] m-[10px_5px]',
					apps.length === 0 && 'hidden'
				)}
			></span>
			{apps.map(item => (
				<Item
					key={item.id}
					item={{
						img: Apps[item.type].icon,
						title: item.type.charAt(0).toUpperCase() + item.type.slice(1),
						onClick: () => handleClickApp(item.type),
					}}
					activity={item.isActive ? 'active' : 'inactive'}
				/>
			))}
		</ul>
	)
}
