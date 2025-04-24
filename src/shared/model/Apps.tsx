import { AboutMe } from '@/widgets/about-me'
import { HiLetter } from '@/widgets/hi-letter'
import { Music } from '@/widgets/music'
import { JSX } from 'react'
import { AppProps, AppTypes } from './App.types'
import { ContactMe } from '@/widgets/contact-me'
import { Projects } from '@/widgets/projects'
import { Trash } from '@/widgets/trash'

export const Apps: Record<AppTypes, (props: AppProps) => JSX.Element> = {
	[AppTypes.ABOUT]: AboutMe,
	[AppTypes.SKILLS]: HiLetter,
	[AppTypes.PROJECTS]: Projects,
	[AppTypes.CONTACT]: ContactMe,
	[AppTypes.TRASH]: Trash,
	[AppTypes.MUSIC]: Music,
	[AppTypes.HI]: HiLetter,
}
