import Image from 'next/image'
import cardImg from 'public/assets/images/about/card1.png'
import { Card } from '../card/Card'
export const Card1 = () => {
	return (
		<Card>
			<span
				className={`absolute left-[7px] top-[15px] font-bebas leading-[260px] text-[300px] text-[#1A003D]`}
			>
				RE-
			</span>
			<span
				className={`absolute left-[7px] top-[273px] font-bebas leading-[260px] text-[300px] text-[#1A003D]`}
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
			<span className='absolute block left-[557px] top-[269px] text-[24px] leading-[33px] -tracking-[0.02em]  font-bold text-[#1A003D] font-open-sans'>
				Obraztsov Alexandr
			</span>
			<span className='absolute block left-[557px] top-[302px] text-[20px] leading-[27px] -tracking-[0.02em]  font-normal text-[#1A003D] font-open-sans'>
				Frontend developer
			</span>
			<svg
				width='230'
				height='16'
				viewBox='0 0 230 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute bottom-[32px] right-[15px]'
			>
				<path
					d='M229.707 8.70709C230.098 8.31656 230.098 7.6834 229.707 7.29287L223.343 0.928913C222.953 0.538388 222.319 0.538388 221.929 0.928913C221.538 1.31944 221.538 1.9526 221.929 2.34313L227.586 7.99998L221.929 13.6568C221.538 14.0474 221.538 14.6805 221.929 15.071C222.319 15.4616 222.953 15.4616 223.343 15.071L229.707 8.70709ZM8.74228e-08 9L229 8.99998L229 6.99998L-8.74228e-08 7L8.74228e-08 9Z'
					fill='#1A003D'
				/>
			</svg>
		</Card>
	)
}
