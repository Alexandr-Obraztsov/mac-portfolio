'use client'

import { useApp } from '@/shared/lib'
import { AppProps } from '@/shared/model/App.types'
import { Draggable } from '@/shared/ui'
import { Card1 } from './card-1/Card1'
import { useState } from 'react'
import { Card2 } from './card-2/Card2'
import { Card3 } from './card-3/Card3'
import { Card4 } from './card-4/Card4'

const cards = [Card1, Card2, Card3, Card4]

export const AboutMe = ({ app }: AppProps) => {
	const { closeThisApp } = useApp({ app })

	const [cardIndex, setCardIndex] = useState(0)

	const handleClickCard = () => {
		setCardIndex((cardIndex + 1) % cards.length)
	}

	return (
		<Draggable
			app={app}
			startPos={{
				x: document.body.clientWidth / 2,
				y: document.body.clientHeight / 2,
			}}
			targetId='header'
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
						About Me
					</h1>
				</div>
				<div className='w-full p-[26px]' onClick={handleClickCard}>
					{cards[cardIndex]()}
				</div>
			</div>
		</Draggable>
	)
}
