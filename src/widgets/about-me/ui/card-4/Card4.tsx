import Image from 'next/image'
import { Card } from '../card/Card'
import { Skill } from './Skill/Skill'
import LooperImage from 'public/assets/images/about/card4.png'
export const Card4 = () => {
	return (
		<Card status='Skills'>
			<div className='text-[128px] flex gap-[10px] font-bebas text-about-me-accent leading-none pl-[34px] pt-[6px] -tracking-[0.027em]'>
				<span className='[-webkit-text-stroke:_1px_var(--about-me-accent)] text-transparent'>
					SOFT
				</span>
				SKILLS
			</div>
			<div className='mt-1 grid pl-6 grid-cols-[243px_243px] gap-[14px]'>
				<Skill title='Responsibility' evaluation={9} />
				<Skill title='Proactive' evaluation={9} />
				<Skill title='Team work' evaluation={8} />
				<Skill title='Openness to new ideas' evaluation={8} />
				<Skill title='Self-development' evaluation={10} />
				<Skill title='Flexibility' evaluation={7} />
			</div>
			<Image
				src={LooperImage}
				alt='asdfads'
				className='absolute right-0 bottom-0 w-[430px] h-[500px]'
			/>
		</Card>
	)
}
