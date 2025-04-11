import { useAppDispatch } from '@/shared/lib'
import { AppTypes } from '@/shared/model/App.types'
import { openApp } from '@/shared/model/appsSlice/appsSlice'
import { Label } from '@/shared/ui'
import { LabelPropsType } from '@/shared/ui/label/Label'
import about from 'public/assets/icons/desktop/about.png'
import folder from 'public/assets/icons/desktop/folder.png'
import letter from 'public/assets/icons/desktop/letter.png'
import trash from 'public/assets/icons/desktop/trash.png'
import { AppContainer } from '../app-container/AppContainer'

type LabelType = Omit<LabelPropsType, 'onClick'> & { appType: AppTypes }

const labels: LabelType[] = [
	{
		title: 'About me',
		imgSrc: about,
		appType: AppTypes.ABOUT,
		position: { x: 1, y: 1 },
	},
	{
		title: 'Contact',
		imgSrc: letter,
		appType: AppTypes.CONTACT,
		position: { x: 1, y: 3 },
	},
	{
		title: 'Projects',
		imgSrc: folder,
		appType: AppTypes.PROJECTS,
		position: { x: 1, y: 2 },
	},
	{
		title: 'Trash',
		imgSrc: trash,
		appType: AppTypes.TRASH,
		position: { x: -2, y: -2 },
	},
]

export const Desktop = () => {
	const dispatch = useAppDispatch()

	const handleClick = (appType: AppTypes) => () => {
		dispatch(openApp({ type: appType }))
	}
	return (
		<main className='relative p-[10px] w-full grow grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(var(--desktop-label-size),1fr))] grid-rows-[repeat(auto-fill,minmax(var(--desktop-label-size),1fr))] gap-[--desktop-gap] pb-20'>
			{labels.map(label => (
				<Label
					key={label.title}
					title={label.title}
					imgSrc={label.imgSrc}
					onClick={handleClick(label.appType)}
					position={label.position}
				/>
			))}
			<AppContainer />
		</main>
	)
}
