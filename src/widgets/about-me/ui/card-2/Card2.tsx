import Image from 'next/image'
import card2 from 'public/assets/images/about/card2.png'
import { Card } from '../card/Card'
export const Card2 = () => {
	return (
		<Card status='About me'>
			<span className='absolute left-[35px] top-[366px] font-bebas text-[128px] leading-[128px] tracking-[-0.03em] text-about-me-accent'>
				Who am i.
			</span>
			<Image
				src={card2}
				alt='card'
				className='absolute top-[72px] left-[56px] size-[294px]'
			/>
			<p className='absolute left-[427px] top-[82px] font-open-sans text-[14px] leading-[19px] text-black w-[350px] whitespace-pre-wrap'>
				I am a frontend developer with more than 1 year
				<br />
				of experience in creating SPA applications
				<br />
				using JavaScript, TypeScript, React, Redux, Next.js, HTML, and CSS.
				<br />
				<br />
				In my free time, I study new technologies
				<br />
				and deepen my knowledge in the ones I have
				<br />
				already mastered. I also enjoy solving algorithmic problems.
				<br />
				<br />
				Since childhood, I&apos;ve loved creating something,
				<br />
				and after getting to know a computer, I quickly
				<br />
				found entertainment for myself — creating modifications for games.
				<br />
				<br />
				Later, I started doing game development, backend development,
				micro-board programming,
				<br />
				and finally, frontend development. Since then, frontend has become my
				main area of interest
				<br />
				and professional activity.
			</p>
		</Card>
	)
}
