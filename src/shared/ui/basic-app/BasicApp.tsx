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
		<Draggable app={app} targetId='header'>
			<div className='rounded-xl overflow-hidden bg-white/80 backdrop-blur-md shadow-xl flex flex-col border border-gray-200/30'>
				<div
					id='header'
					className='z-50 relative bg-[#f1f1f1]/90 h-9 w-full flex items-center px-3'
				>
					<div className='flex items-center space-x-2 absolute left-3'>
						<button
							className='size-3 bg-[#FF605C] rounded-full hover:opacity-90 flex items-center justify-center group'
							onClick={closeThisApp}
						>
							<span className='opacity-0 group-hover:opacity-100 text-[8px] text-[#A04542]'>
								✕
							</span>
						</button>
						<div className='size-3 bg-[#FFBD44] rounded-full'></div>
						<div className='size-3 bg-[#00CA4E] rounded-full'></div>
					</div>
					<h1 className='text-sm font-medium text-gray-700 w-full text-center font-sf-pro'>
						{title}
					</h1>
				</div>
				<div className='flex-1'>{children}</div>
			</div>
		</Draggable>
	)
}
