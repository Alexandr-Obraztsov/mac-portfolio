import Image from 'next/image'
import cardImg from 'public/media/images/about/card1.png'
import { Card } from '../card/Card'
import Arrow from 'public/media/icons/apps/about-me/arrow.svg'

export const Card1 = () => {
	return (
		<Card>
			<span
				className={`absolute left-[7px] top-[15px] font-bebas leading-[245px] tracking-tight text-[300px] text-[#1A003D]`}
			>
				RE-
			</span>
			<span
				className={`absolute left-[7px] top-[273px] font-bebas leading-[245px] tracking-tight text-[300px] text-[#1A003D]`}
			>
				SUME
			</span>
			<Image
				src={cardImg}
				alt='card'
				className='absolute top-[15px] right-[15px] w-[460px] h-[210px]'
			/>
			<span
				className='block rounded-tr-2xl absolute w-[200px] h-[100px] left-[325px] top-[125px] bg-[#F2F0ED] bg-opacity-80
'
			></span>
			<span className='absolute block left-[554px] top-[272px] text-[24px] leading-[33px] -tracking-[0.02em]  font-bold text-[#1A003D] font-open-sans'>
				Obraztsov Alexandr
			</span>
			<span className='absolute block left-[554px] top-[307px] text-[20px] leading-[27px]  font-normal text-[#1A003D] font-open-sans'>
				Frontend developer
			</span>
			<Arrow className='absolute bottom-[20px] right-[16px]' />
		</Card>
	)
}
