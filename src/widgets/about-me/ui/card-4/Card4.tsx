import Image from 'next/image'
import { Card } from '../card/Card'
import card4 from 'public/assets/images/about/card4.png'
import { Skill } from './Skill/Skill'

export const Card4 = () => {
	return (
		<Card status='Skills'>
			<div className='h-[100px] bg-red-400 w-full overflow-hidden flex items-center'>
				<Image
					src={card4}
					alt='card'
					className='w-full h-[100px] object-cover object-[50%_69%]'
				/>
				<div className='ml-[-15px] rounded-l-xl h-full text-nowrap leading-none font-bebas text-about-me-accent text-[80px] bg-about-me-background p-4'>
					<span className='[-webkit-text-stroke:_1px_var(--about-me-accent)] text-transparent'>
						SOFT
					</span>{' '}
					SKILLS
				</div>
			</div>
			<div className=' flex flex-row gap-x-[86px] gap-y-[14px] p-[18px_35px] flex-wrap'>
				<Skill title='Responsibility' evaluation={9} />
				<Skill title='Proactive' evaluation={8} />
				<Skill title='Team work' evaluation={8} className='ml-[110px]' />
				<Skill title='Openness to new ideas' evaluation={8} />
				<Skill title='Self-development' evaluation={8} />
				<Skill title='Flexibility' evaluation={8} />
			</div>
		</Card>
	)
}
