'use client'

import { useEffect, useState } from 'react'

import lightWallpaper from 'public/assets/wallpapers/light.jpg'
import nightWallpaper from 'public/assets/wallpapers/night.jpg'

// Импорт изображений из /assets/images
import hiImg from 'public/assets/images/hi-letter.png'
import hitTheRoadJack from 'public/assets/images/hit-the-road.png'
import onlyYou from 'public/assets/images/only-you.png'
import sigmaBoy from 'public/assets/images/sigma-boy.png'

// Импорт изображений из trash
import Gym from 'public/assets/images/trash/gym.jpg'
import Startup from 'public/assets/images/trash/startup.jpg'
import Nature from 'public/assets/images/trash/nature.jpg'
import Coding from 'public/assets/images/trash/coding.jpg'

// Импорт иконок
import AboutMeIcon from 'public/assets/icons/desktop/about.png'
import ProjectsIcon from 'public/assets/icons/desktop/folder.png'
import ContactIcon from 'public/assets/icons/desktop/letter.png'
import TrashIcon from 'public/assets/icons/desktop/trash.png'
import MusicIcon from 'public/assets/icons/desktop/music.png'
import HiLetterIcon from 'public/assets/icons/desktop/dino.png'
import github from 'public/assets/icons/desktop/github.png'
import linkedin from 'public/assets/icons/desktop/linkedin.png'
import telegram from 'public/assets/icons/desktop/telegram.png'

// Импорт анимаций

// Импорт звуков
import { sounds } from '@/widgets/music/model/sounds'

interface PreloaderProps {
	children: React.ReactNode
	onLoadComplete?: () => void
}

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
	ProjectsIcon,
	ContactIcon,
	TrashIcon,
	MusicIcon,
	HiLetterIcon,
	github,
	linkedin,
	telegram,
]

export const Preloader = ({ children, onLoadComplete }: PreloaderProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [progress, setProgress] = useState(0)

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

			setTimeout(() => {
				setIsLoaded(true)
				onLoadComplete?.()
			}, 500)
		}

		preloadAllMedia()
	}, [onLoadComplete, allImages])

	if (isLoaded) {
		return <>{children}</>
	}

	return (
		<div className='fixed inset-0 bg-black flex items-center justify-center z-50'>
			<div className='text-white text-center'>
				<div className='w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mx-auto mb-4'></div>
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
