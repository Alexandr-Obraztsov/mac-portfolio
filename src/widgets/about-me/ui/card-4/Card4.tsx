import Image from 'next/image'
import { Card } from '../card/Card'
import { Skill } from './Skill/Skill'
import LooperImage from 'public/assets/images/about/card4.png'
export const Card4 = () => {
	return (
		<Card status='Skills'>
			<div className='text-[128px] flex gap-[10px] font-bebas text-about-me-accent leading-none pl-9'>
				<span className='[-webkit-text-stroke:_1px_var(--about-me-accent)] text-transparent'>
					SOFT
				</span>
				SKILLS
			</div>
			<div className='grid pl-6 grid-cols-[243px_243px] gap-[15px]'>
				<Skill title='Responsibility' evaluation={9} />
				<Skill title='Proactive' evaluation={8} />
				<Skill title='Team work' evaluation={8} />
				<Skill title='Openness to new ideas' evaluation={8} />
				<Skill title='Self-development' evaluation={8} />
				<Skill title='Flexibility' evaluation={8} />
			</div>
			<Image
				src={LooperImage}
				alt='asdfads'
				className='absolute right-0 bottom-0 w-[430px] h-[500px]'
			/>
		</Card>
	)
}
