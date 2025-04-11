'use client'

import Toggle from 'public/assets/icons/desktop/toggle.svg'
import { useEffect, useState } from 'react'
import useMedia from 'use-media'

function getDate() {
	const date = new Date()

	return {
		weekday: date.toLocaleString('en', { weekday: 'short' }),
		date: date.toLocaleString('en', { month: 'short', day: 'numeric' }),
		time: date.toLocaleString('en', { hour: 'numeric', minute: '2-digit' }),
	}
}

export const Header = () => {
	const [date, setDate] = useState(getDate())
	const isMobile = useMedia({ maxWidth: '768px' })

	useEffect(() => {
		setDate(getDate())
		const interval = setInterval(() => {
			setDate(getDate())
		}, 1000)
		return () => clearInterval(interval)
	}, [isMobile])

	return (
		<header className='w-full px-[16px] h-[40px] flex justify-between items-center z-50 font-normal text-[20px] bg-primary'>
			<nav className='flex-1'>
				<ul className='list-none flex gap-[30px] max-md:hidden *:text-[20px] *:cursor-pointer *:font-normal *:tracking-[1px] *:transition-all *:duration-default *:ease-linear hover:*:text-white'>
					<li className='whitespace-nowrap !font-semibold tracking-[2px] max-md:hidden pl-[10px]'>
						Alexandr Obraztsov
					</li>
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</nav>
			<section className='flex flex-1 gap-[15px] flex-row items-center h-[30px] justify-end'>
				<Toggle className='w-[20px] h-[20px]' />
				<span>{date.weekday}</span>
				<span>{date.date}</span>
				<span>{date.time}</span>
			</section>
		</header>
	)
}
