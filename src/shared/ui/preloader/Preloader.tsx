'use client'

import { useEffect, useRef, useState } from 'react'
import { LottieRefCurrentProps } from 'lottie-react'
import { cn } from '@sglara/cn'
import dynamic from 'next/dynamic'

// Компоненты рабочего стола
import { Header } from '@/views/desktop/ui/header/Header'
import { Desktop } from '@/views/desktop/ui/desktop/Desktop'
import { BottomMenu } from '@/views/desktop/ui/bottom-menu/BottomMenu'

// Импорт анимации
import HelloWhite from 'public/media/animations/hello-white.json'

// Динамический импорт Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

// Импорт всех изображений из wallpapers
import lightWallpaper from 'public/media/wallpapers/light.jpg'
import nightWallpaper from 'public/media/wallpapers/night.jpg'

// Импорт изображений из /assets/images
import hiImg from 'public/media/images/hi-letter.png'
import hitTheRoadJack from 'public/media/images/hit-the-road.png'
import onlyYou from 'public/media/images/only-you.png'
import sigmaBoy from 'public/media/images/sigma-boy.png'
import card1 from 'public/media/images/about/card1.png'
import card2 from 'public/media/images/about/card2.png'
import card3 from 'public/media/images/about/card3.png'
import card4 from 'public/media/images/about/card4.png'

// Импорт изображений из trash
import Gym from 'public/media/images/trash/gym.jpg'
import Startup from 'public/media/images/trash/startup.jpg'
import Nature from 'public/media/images/trash/nature.jpg'
import Coding from 'public/media/images/trash/coding.jpg'

// Импорт иконок
import AboutMeIcon from 'public/media/icons/desktop/about.png'
import DinoIcon from 'public/media/icons/desktop/dino.png'
import FolderIcon from 'public/media/icons/desktop/folder.png'
import MusicIcon from 'public/media/icons/desktop/music.png'
import ContactIcon from 'public/media/icons/desktop/letter.png'
import TrashIcon from 'public/media/icons/desktop/trash.png'
import HiLetterIcon from 'public/media/icons/desktop/dino.png'
import GithubIcon from 'public/media/icons/desktop/github.png'
import LinkedinIcon from 'public/media/icons/desktop/linkedin.png'
import TelegramIcon from 'public/media/icons/desktop/telegram.png'
import SettingsIcon from 'public/media/icons/desktop/settings.png'
import { sounds } from '@/shared/const/sounds'

interface PreloaderProps {}

const allImages = [
	lightWallpaper,
	nightWallpaper,
	hiImg,
	hitTheRoadJack,
	onlyYou,
	sigmaBoy,
	Gym,
	Startup,
	Nature,
	Coding,
	AboutMeIcon,
	FolderIcon,
	ContactIcon,
	TrashIcon,
	MusicIcon,
	HiLetterIcon,
	GithubIcon,
	LinkedinIcon,
	TelegramIcon,
	SettingsIcon,
	DinoIcon,
	card1,
	card2,
	card3,
	card4,
]

export const Preloader = ({}: PreloaderProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [progress, setProgress] = useState(0)
	const [showGreeting, setShowGreeting] = useState(false)
	const [isDesktopVisible, setIsDesktopVisible] = useState(false)

	const lottieRef = useRef<LottieRefCurrentProps>(null)

	// Этап 1: Загрузка всех ресурсов
	useEffect(() => {
		const preloadImage = (src: string): Promise<void> => {
			return new Promise(resolve => {
				const img = document.createElement('img')
				img.src = src.toString()
				img.onload = () => resolve()
				img.onerror = () => resolve()
			})
		}

		const preloadAudio = (src: string): Promise<void> => {
			return new Promise(resolve => {
				const audio = document.createElement('audio')
				audio.src = src
				audio.oncanplaythrough = () => resolve()
				audio.onerror = () => resolve()
			})
		}

		const preloadAllMedia = async () => {
			const imagePromises = allImages.map(img =>
				preloadImage(typeof img === 'string' ? img : img.src).then(() => {
					setProgress(prev => prev + 70 / allImages.length)
				})
			)

			const audioPromises = sounds.map(sound =>
				preloadAudio(sound.src).then(() => {
					setProgress(prev => prev + 20 / sounds.length)
				})
			)

			await Promise.all([...imagePromises, ...audioPromises])

			setProgress(100)

			// Когда все ресурсы загружены, показываем анимацию приветствия
			setTimeout(() => {
				setIsLoaded(true)
				setShowGreeting(true)
			}, 500)
		}

		preloadAllMedia()
	}, [])

	// Этап 2: После загрузки, показываем анимацию приветствия
	useEffect(() => {
		if (!showGreeting) return

		// Воспроизводим анимацию через 1 секунду после загрузки
		const timeoutPlay = setTimeout(() => {
			if (lottieRef.current) {
				lottieRef.current.play()
			}
		}, 1000)

		// Скрываем анимацию после завершения
		const timeoutHideGreeting = setTimeout(() => {
			setShowGreeting(false)
		}, 5000)

		// Показываем рабочий стол
		const timeoutShowDesktop = setTimeout(() => {
			setIsDesktopVisible(true)
		}, 6000)

		return () => {
			clearTimeout(timeoutPlay)
			clearTimeout(timeoutHideGreeting)
			clearTimeout(timeoutShowDesktop)
		}
	}, [showGreeting])

	// Отображение загрузчика, когда ресурсы еще не загружены
	if (!isLoaded) {
		return (
			<div className='fixed inset-0 bg-black flex items-center justify-center z-50'>
				<div className='text-white text-center'>
					<div className='w-16 h-16 border-[8px] border-t-transparent border-white rounded-full animate-spin mx-auto mb-4'></div>
					<p className='text-lg mb-2'>Загрузка ресурсов...</p>
					<div className='w-64 h-2 bg-gray-700 rounded-full'>
						<div
							className='h-full bg-white rounded-full transition-all duration-300 ease-out'
							style={{ width: `${progress}%` }}
						></div>
					</div>
					<p className='text-sm mt-1'>{Math.round(progress)}%</p>
				</div>
			</div>
		)
	}

	// После загрузки ресурсов, показываем анимацию и рабочий стол
	return (
		<div className='w-screen h-screen bg-wallpaper bg-center bg-cover relative overflow-hidden'>
			{/* Анимация приветствия */}
			<div
				className={cn(
					'absolute w-full h-full flex items-center justify-center transition-all duration-animation',
					!showGreeting && 'opacity-0'
				)}
			>
				<Lottie
					lottieRef={lottieRef}
					animationData={HelloWhite}
					autoplay={false}
				/>
			</div>

			{/* Рабочий стол */}
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
