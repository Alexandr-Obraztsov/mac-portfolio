import { ProjectCard, ProjectHeight } from '../ProjectCard'
import BgLine from 'public/assets/images/projects/bg-line.svg'
import { projects } from '@/shared/const/projects'

interface ProjectListProps {
	onProjectSelect: (title: string) => void
}

export const ProjectList = ({ onProjectSelect }: ProjectListProps) => {
	const getCardHeight = (index: number) => {
		return ['tall', 'short', 'default', 'default', 'short', 'tall'][
			index % 6
		] as ProjectHeight
	}

	return (
		<div className='min-w-[900px] p-6 pb-2 relative'>
			<div className='columns-3 gap-5'>
				{Object.values(projects).map((project, index) => (
					<div key={project.title} className='mb-4 break-inside-avoid'>
						<ProjectCard
							title={project.title}
							imageUrl={project.imageUrl}
							height={getCardHeight(index)}
							onClick={() => onProjectSelect(project.title)}
						/>
					</div>
				))}
			</div>

			<BgLine className='absolute top-0 left-0 w-full h-full -z-10' />
		</div>
	)
}
