'use client'

import { useApp } from '@/shared/lib'
import { AppProps } from '@/shared/model/App.types'
import { Draggable } from '@/shared/ui'
import { Card1 } from './card-1/Card1'
import { Card2 } from './card-2/Card2'
import { Card3 } from './card-3/Card3'
import { Card4 } from './card-4/Card4'
import { SwiperSlide, Swiper } from 'swiper/react'
import { EffectCards } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { Card5 } from './card-5/Card5'
import { Card6 } from './card-6/Card6'

export const AboutMe = ({ app }: AppProps) => {
	const { closeThisApp } = useApp({ app })

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
				<div className='w-[900px] h-[550px] flex justify-center items-center'>
					<Swiper
						effect={'cards'}
						className='w-[800px] h-[500px]'
						grabCursor={true}
						modules={[EffectCards]}
					>
						{[Card1, Card2, Card3, Card4, Card5, Card6].map((card, i) => (
							<SwiperSlide key={i} className='rounded-xl'>
								{card()}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</Draggable>
	)
}
