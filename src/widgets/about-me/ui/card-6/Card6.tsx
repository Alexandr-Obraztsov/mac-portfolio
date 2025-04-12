import { Card } from '../card/Card'
import { Project } from './project/Project'

export const Card6 = () => {
	return (
		<Card status='Projects' statusBar>
			<div className='p-[20px_35px_28px] grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] grid-flow-row gap-x-[50px] gap-y-[15px] h-full'>
				<h1 className='font-bebas text-[96px] leading-[0.95] text-about-me-accent tracking-tight'>
					MY WORKS
				</h1>
				<Project
					name='DotNews'
					description='Personal news aggregator TMA'
					images={[]}
				/>
				<Project
					name='Security Bot'
					description='Company channel security bot'
					images={[]}
				/>
				<Project
					name='Smart Farm'
					description='Mobile app for controlling IOT devices'
					images={[]}
				/>
				<Project name='Project 1' description='Description 1' images={[]} />
				<Project name='Project 1' description='Description 1' images={[]} />
			</div>
		</Card>
	)
}
