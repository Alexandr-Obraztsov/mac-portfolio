'use client'

import { useEffect, useRef, useState } from 'react'
import { BottomMenu } from './bottom-menu/BottomMenu'
import { Desktop } from './desktop/Desktop'
import { Header } from './header/Header'
import { cn } from '@sglara/cn'
import { LottieRefCurrentProps } from 'lottie-react'
import HelloWhite from 'public/assets/animations/hello-white.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export const DesktopPage = () => {
	const [isGreetings, setIsGreetings] = useState(true)
	const [isDesktopVisible, setIsDesktopVisible] = useState(false)

	const lottieRef = useRef<LottieRefCurrentProps>(null)

	useEffect(() => {
		const timeout = setTimeout(() => {
			lottieRef.current!.play()
		}, 1000)

		const timeout1 = setTimeout(() => {
			setIsGreetings(false)
		}, 5000)

		const timeout2 = setTimeout(() => {
			setIsDesktopVisible(true)
		}, 6000)

		return () => {
			clearTimeout(timeout)
			clearTimeout(timeout1)
			clearTimeout(timeout2)
		}
	}, [])

	return (
		<div
			className={cn(
				'w-screen h-screen bg-wallpaper bg-center bg-cover relative overflow-hidden'
			)}
		>
			<div
				className={cn(
					'absolute w-full h-full flex items-center justify-center  transition-all duration-animation',
					!isGreetings && 'opacity-0'
				)}
			>
				<Lottie
					lottieRef={lottieRef}
					animationData={HelloWhite}
					autoplay={false}
				/>
			</div>
			<div
				className={cn(
					'flex flex-col w-full h-screen transition-all duration-animation opacity-0 font-sf-pro',
					!isDesktopVisible && 'blur-sm',
					isDesktopVisible && 'opacity-100'
				)}
			>
				<Header />
				<Desktop />
				<BottomMenu />
			</div>
		</div>
	)
}
