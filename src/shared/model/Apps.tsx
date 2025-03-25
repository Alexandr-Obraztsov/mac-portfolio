import { AboutMe } from '@/widgets/about-me'
import { HiLetter } from '@/widgets/hi-letter'
import { Music } from '@/widgets/music'
import { JSX } from 'react'
import { AppProps, AppTypes } from './App.types'

export const Apps: Record<AppTypes, (props: AppProps) => JSX.Element> = {
	[AppTypes.ABOUT]: AboutMe,
	[AppTypes.SKILLS]: HiLetter,
	[AppTypes.PROJECTS]: HiLetter,
	[AppTypes.CONTACT]: HiLetter,
	[AppTypes.TRASH]: HiLetter,
	[AppTypes.MUSIC]: Music,
	[AppTypes.HI]: HiLetter,
}
