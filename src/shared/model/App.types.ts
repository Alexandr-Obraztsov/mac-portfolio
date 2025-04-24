export type AppProps = {
	app: App
	params?: unknown
}

export type App = {
	id: string
	zIndex: number
	type: AppTypes
	isActive: boolean
	params?: unknown
}

export enum AppTypes {
	ABOUT = 'about',
	PROJECTS = 'projects',
	CONTACT = 'contact',
	TRASH = 'trash',
	MUSIC = 'music',
	HI = 'hi',
}
