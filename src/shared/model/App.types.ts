export type AppProps = {
	app: App
}

export type App = {
	id: string
	zIndex: number
	type: AppTypes
	isActive: boolean
}

export enum AppTypes {
	ABOUT = 'about',
	SKILLS = 'skills',
	PROJECTS = 'projects',
	CONTACT = 'contact',
	TRASH = 'trash',
	MUSIC = 'music',
	HI = 'hi',
}
