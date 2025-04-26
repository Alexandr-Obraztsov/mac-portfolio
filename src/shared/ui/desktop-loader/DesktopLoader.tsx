'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Динамический импорт DesktopPage для отложенной загрузки
// Будет фактически загружен только когда компонент DesktopLoader вызовет его
const DesktopPage = dynamic(
	() => import('@/views/desktop/ui/DesktopPage').then(mod => mod.DesktopPage),
	{
		loading: () => <></>, // Пустой компонент загрузки, так как у нас есть собственный
		ssr: false, // Отключаем SSR для клиентских компонентов
	}
)

// Импорт всех изображений и ресурсов, которые нужно предзагрузить
// Фоновые изображения
import lightWallpaper from 'public/media/wallpapers/light.webp'
import nightWallpaper from 'public/media/wallpapers/night.webp'

// Изображения для контента
import hiImg from 'public/media/images/hi-letter.png'
import hitTheRoadJack from 'public/media/images/hit-the-road.png'
import onlyYou from 'public/media/images/only-you.png'
import sigmaBoy from 'public/media/images/sigma-boy.png'
import card1 from 'public/media/images/about/card1.png'
import card2 from 'public/media/images/about/card2.png'
import card3 from 'public/media/images/about/card3.png'
import card4 from 'public/media/images/about/card4.png'

// Изображения для раздела Trash
import Gym from 'public/media/images/trash/gym.jpg'
import Startup from 'public/media/images/trash/startup.jpg'
import Nature from 'public/media/images/trash/nature.jpg'
import Coding from 'public/media/images/trash/coding.jpg'

// Иконки для приложения
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

// Массив всех изображений для предзагрузки
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

export const DesktopLoader = () => {
	// Состояние для отслеживания процесса загрузки
	const [isLoaded, setIsLoaded] = useState(false) // Загружены ли все ресурсы
	const [progress, setProgress] = useState(0) // Процент загрузки (от 0 до 100)
	const [desktopPageLoaded, setDesktopPageLoaded] = useState(false) // Загружен ли компонент DesktopPage

	// Этап 1: Предзагрузка компонента DesktopPage
	useEffect(() => {
		const preloadDesktopPage = async () => {
			// Устанавливаем начальный прогресс
			setProgress(5)

			// Принудительно инициируем загрузку компонента DesktopPage
			// Это вызовет фактическую загрузку JavaScript-кода компонента
			const DesktopPageComponent = (
				await import('@/views/desktop/ui/DesktopPage')
			).DesktopPage

			// После загрузки компонента увеличиваем прогресс и отмечаем компонент как загруженный
			setProgress(10)
			setDesktopPageLoaded(true)
		}

		preloadDesktopPage()
	}, [])

	// Этап 2: Загрузка медиа-ресурсов (только после загрузки DesktopPage)
	useEffect(() => {
		// Не начинаем загрузку медиа, пока не загружен основной компонент
		if (!desktopPageLoaded) return

		// Функция для предзагрузки одного изображения
		const preloadImage = (src: string): Promise<void> => {
			return new Promise(resolve => {
				const img = document.createElement('img')
				img.src = src.toString()
				img.onload = () => resolve()
				img.onerror = () => resolve() // Продолжаем даже при ошибке загрузки
			})
		}

		// Функция для предзагрузки аудиофайла
		const preloadAudio = (src: string): Promise<void> => {
			return new Promise(resolve => {
				const audio = document.createElement('audio')
				audio.src = src
				audio.oncanplaythrough = () => resolve()
				audio.onerror = () => resolve() // Продолжаем даже при ошибке загрузки
			})
		}

		// Основная функция загрузки всех медиа-файлов
		const preloadAllMedia = async () => {
			// Загружаем изображения (60% от общего прогресса)
			const imagePromises = allImages.map(img =>
				preloadImage(typeof img === 'string' ? img : img.src).then(() => {
					setProgress(prev => prev + 60 / allImages.length)
				})
			)

			// Загружаем аудиофайлы (20% от общего прогресса)
			const audioPromises = sounds.map(sound =>
				preloadAudio(sound.src).then(() => {
					setProgress(prev => prev + 20 / sounds.length)
				})
			)

			// Ожидаем завершения загрузки всех файлов
			await Promise.all([...imagePromises, ...audioPromises])

			// Устанавливаем полный прогресс (100%)
			setProgress(100)

			// Добавляем небольшую задержку для плавного перехода
			setTimeout(() => {
				setIsLoaded(true)
			}, 500)
		}

		preloadAllMedia()
	}, [desktopPageLoaded])

	// Показываем экран загрузки, пока не завершена загрузка всех ресурсов
	if (!isLoaded) {
		return (
			<div className='fixed inset-0 bg-black flex items-center justify-center z-50'>
				<div className='text-white text-center'>
					<div className='w-16 h-16 border-[8px] border-t-transparent border-white rounded-full animate-spin mx-auto mb-4'></div>
					<p className='text-lg mb-2'>
						{progress < 10
							? 'Загрузка приложения...' // Показываем на первом этапе загрузки
							: 'Загрузка ресурсов...'}{' '}
						// Показываем на втором этапе загрузки
					</p>
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

	// Когда все загружено, показываем рабочий стол
	return <DesktopPage />
}
