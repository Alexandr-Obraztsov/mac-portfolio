import { projects } from '@/shared/const/projects'
import { Card } from '../card/Card'
import { Project } from './project/Project'

export const Card6 = () => {
	return (
		<Card status='Projects' statusBar>
			<div className='p-[20px_35px_28px] grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] grid-flow-row gap-x-[50px] gap-y-[15px] h-full'>
				<h1 className='font-bebas text-[96px] leading-[0.95] text-about-me-accent tracking-tight'>
					MY WORKS
				</h1>
				{Object.values(projects)
					.slice(0, 5)
					.map(project => (
						<Project
							key={project.title}
							name={project.title}
							description={project.shortDescription}
							images={[]}
						/>
					))}
			</div>
		</Card>
	)
}
