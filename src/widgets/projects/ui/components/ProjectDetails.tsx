import { projects } from '@/shared/const/projects'
import { ProjectHeader } from './ProjectHeader'
import { ProjectDescription } from './ProjectDescription'
import { TechnologiesList } from './TechnologiesList'
import { ProjectLinks } from './ProjectLinks'
import BackIcon from 'public/assets/icons/shared/back.svg'

interface ProjectDetailsProps {
	projectId: string
	onBack: () => void
}

export const ProjectDetails = ({ projectId, onBack }: ProjectDetailsProps) => {
	const projectData = projects[projectId]

	return (
		<div className='p-6 relative font-open-sans'>
			<button
				onClick={onBack}
				className='mb-4 px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm flex items-center'
			>
				<BackIcon className='w-4 h-4 mr-1' />
				Back to projects
			</button>

			<div className='flex flex-col gap-5'>
				<ProjectHeader
					title={projectData.title}
					imageUrl={projectData.imageUrl}
				/>

				<div className='grid grid-cols-3 gap-5'>
					<ProjectDescription description={projectData.description} />

					<div className='space-y-5'>
						<TechnologiesList technologies={projectData.technologies} />
						<ProjectLinks
							demoUrl={projectData.demoUrl}
							githubUrl={projectData.githubUrl}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
