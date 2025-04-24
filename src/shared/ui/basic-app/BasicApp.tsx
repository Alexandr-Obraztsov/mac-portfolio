import { AppProps } from '@/shared/model/App.types'
import { Draggable } from '../draggable/Draggable'
import { PropsWithChildren } from 'react'
import { useApp } from '@/shared/lib'

type Props = AppProps &
	PropsWithChildren & {
		title: string
	}

export const BasicApp = ({ app, children, title }: Props) => {
	const { closeThisApp } = useApp({ app })

	return (
		<Draggable
			app={app}
			startPos={{
				x: document.body.clientWidth / 2,
				y: document.body.clientHeight / 2,
			}}
			targetId='header'
			zIndex={app.zIndex}
		>
			<div className='rounded-[15px] overflow-hidden bg-about-me-primary flex flex-col'>
				<div
					id='header'
					className='z-50 relative bg-about-me-secondary p-[8px_10px] w-full'
				>
					<button
						className='absolute left-[10px] size-[20px] bg-[#E2554E] rounded-full'
						onClick={closeThisApp}
					></button>
					<h1 className='text-[20px] leading-[20px] text-black w-full text-center'>
						{title}
					</h1>
				</div>
				{children}
			</div>
		</Draggable>
	)
}
