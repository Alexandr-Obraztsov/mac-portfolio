import { AboutMe } from '@/widgets/about-me'
import { HiLetter } from '@/widgets/hi-letter'
import { Music } from '@/widgets/music'
import { FC } from 'react'
import { AppProps, AppTypes } from './App.types'
import { ContactMe } from '@/widgets/contact-me'
import { Projects } from '@/widgets/projects'
import { Trash } from '@/widgets/trash'
import AboutMeIcon from 'public/media/icons/desktop/about.png'
import ProjectsIcon from 'public/media/icons/desktop/folder.png'
import ContactIcon from 'public/media/icons/desktop/letter.png'
import TrashIcon from 'public/media/icons/desktop/trash.png'
import MusicIcon from 'public/media/icons/desktop/music.png'
import HiLetterIcon from 'public/media/icons/desktop/dino.png'
import { StaticImageData } from 'next/image'

type AppType = {
	icon: StaticImageData
	component: FC<AppProps>
}

export const Apps: Record<AppTypes, AppType> = {
	[AppTypes.ABOUT]: {
		icon: AboutMeIcon,
		component: AboutMe,
	},
	[AppTypes.PROJECTS]: {
		icon: ProjectsIcon,
		component: Projects,
	},
	[AppTypes.CONTACT]: {
		icon: ContactIcon,
		component: ContactMe,
	},
	[AppTypes.TRASH]: {
		icon: TrashIcon,
		component: Trash,
	},
	[AppTypes.MUSIC]: {
		icon: MusicIcon,
		component: Music,
	},
	[AppTypes.HI]: {
		icon: HiLetterIcon,
		component: HiLetter,
	},
}
