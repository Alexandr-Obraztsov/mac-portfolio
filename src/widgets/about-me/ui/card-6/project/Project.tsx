import { AppTypes } from '@/shared/model/App.types'
import { openApp } from '@/shared/model/appsSlice/appsSlice'
import { useAppDispatch } from '@/shared/lib'
import { StaticImageData } from 'next/image'

type Props = {
	name: string
	description: string
	images: StaticImageData[]
}

export const Project = ({ name, description, images }: Props) => {
	const dispatch = useAppDispatch()

	const onClick = () => {
		dispatch(openApp({ type: AppTypes.PROJECTS, params: name }))
	}

	return (
		<div
			className='group w-full flex flex-col bg-white rounded-lg border border-black cursor-pointer hover:scale-105 transition-all duration-default shadow-[0_5px_15px_rgba(0,0,0,0.25)]'
			onClick={onClick}
		>
			{images.map((image, index) => (
				<div
					key={index}
					className='w-full h-[125px] rounded-t-lg'
					style={{ backgroundImage: `url(${image.src})` }}
				/>
			))}
			<div className='min-h-[105px] flex-1 rounded-lg bg-slate-200 w-full group-hover:border-b border-black transition-all duration-animation group-hover:brightness-90' />
			<div className='h-0 overflow-hidden duration-animation transition-all group-hover:flex-1 px-2'>
				<h2 className='mt-1 text-black text-sm font-bold font-sans'>{name}</h2>
				<p className='text-black text-xs font-sans text-balance'>
					{description}
				</p>
			</div>
		</div>
	)
}
