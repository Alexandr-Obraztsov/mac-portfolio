import { useApp } from '@/shared/lib'
import { AppProps } from '@/shared/model/App.types'
import Image from 'next/image'
import { useState } from 'react'
import { sounds } from '../model/sounds'
import { ControlPanel } from './ControlPanel'
import Close from 'public/assets/icons/shared/close.svg'
export const Music = ({ app }: AppProps) => {
	const { closeThisApp } = useApp({ app })
	const [soundIndex, setSound] = useState(0)

	const sound = sounds[soundIndex]

	return (
		<div className='absolute top-3 right-3 bg-music-bg rounded-[20px] p-[15px] flex flex-row justify-between gap-[10px]'>
			<button
				className='absolute top-3 right-3 rounded-full bg-secondary size-5 flex items-center justify-center'
				onClick={closeThisApp}
			>
				<Close />
			</button>
			<Image
				src={sound.img}
				alt={sound.title}
				className='rounded-[10px] bg-black w-[120px] h-[120px] shadow-[0_0_10px_rgba(0,0,0,0.61)]'
			/>
			<div className='p-[5px_10px] gap-[5px] flex flex-col items-center w-[194px]'>
				<span className='block text-[24px] font-semibold text-white text-opacity-65 text-center leading-[24px] whitespace-nowrap w-full overflow-hidden text-ellipsis'>
					{sound.title}
				</span>

				<ControlPanel setSound={setSound} soundIndex={soundIndex} />
			</div>
		</div>
	)
}
