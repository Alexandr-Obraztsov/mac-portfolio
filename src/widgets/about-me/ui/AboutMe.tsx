'use client'

import { useApp } from '@/shared/lib'
import { AppProps } from '@/shared/model/App.types'
import { Draggable } from '@/shared/ui'
import { Card1 } from './card-1/Card1'
import { Card2 } from './card-2/Card2'
import { Card3 } from './card-3/Card3'
import { Card4 } from './card-4/Card4'
import { Card5 } from './card-5/Card5'
import { Card6 } from './card-6/Card6'
import { Card7 } from './card-7/Card7'
import { SwiperSlide, Swiper } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import Arrow from 'public/assets/icons/apps/about-me/little-arrow.svg'

import 'swiper/css'
import 'swiper/css/effect-cards'
import SwiperType from 'swiper'
import { useState } from 'react'
import { cn } from '@sglara/cn'

export const AboutMe = ({ app }: AppProps) => {
	const [notificationActive, setNotificationActive] = useState(true)
	const { closeThisApp } = useApp({ app })

	const handleDoubleClickSwiper = (
		swiper: SwiperType,
		event: MouseEvent | TouchEvent | PointerEvent
	) => {
		let posX = 0
		switch (event.type) {
			case 'mouseup':
				posX = (event as MouseEvent).clientX
				break
			case 'touchend':
				posX = (event as TouchEvent).touches[0].clientX
				break
			case 'pointerup':
				posX = (event as PointerEvent).clientX
				break
			default:
				break
		}

		const { width, left } = swiper.el.getBoundingClientRect()

		if (posX < left + width / 2) swiper.slidePrev()
		else swiper.slideNext()
	}

	const handleSlide = () => {
		if (notificationActive) {
			setNotificationActive(false)
		}
	}

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
						About Me
					</h1>
				</div>
				<div className='w-[900px] h-[550px] flex justify-center items-center'>
					<Swiper
						effect={'cards'}
						className='w-[800px] h-[500px]'
						grabCursor={true}
						modules={[EffectCards]}
						slideToClickedSlide
						onDoubleClick={handleDoubleClickSwiper}
						onSlideChange={handleSlide}
					>
						{[Card1, Card2, Card3, Card4, Card5, Card6, Card7].map(
							(card, i) => (
								<SwiperSlide key={i} className='rounded-xl'>
									{card()}
								</SwiperSlide>
							)
						)}
					</Swiper>
				</div>
			</div>
			<div
				className={cn(
					'absolute -bottom-4 flex left-0 right-0 flex-row justify-between items-center translate-y-full font-medium text-2xl text-white transition-all duration-animation font-sf-pro',
					notificationActive ? 'opacity-50' : 'opacity-0'
				)}
			>
				<Arrow />
				Swipe the card to the side, to view the following information
				<Arrow className='scale-x-[-1]' />
			</div>
		</Draggable>
	)
}
