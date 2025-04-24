import { projects } from '@/shared/const/projects'
import { ProjectHeader } from './ProjectHeader'
import { ProjectDescription } from './ProjectDescription'
import { TechnologiesList } from './TechnologiesList'
import { ProjectLinks } from './ProjectLinks'

interface ProjectDetailsProps {
	projectId: string | null
	onBack: () => void
}

export const ProjectDetails = ({ projectId, onBack }: ProjectDetailsProps) => {
	const projectData = projects[projectId || '']

	if (!projectData) {
		return (
			<div className='p-6 relative flex items-center justify-center'>
				<div className='bg-red-100/80 backdrop-blur-sm rounded-xl p-5 text-center max-w-lg'>
					<h2 className='text-2xl font-bold text-red-700 mb-3'>Error</h2>
					<p className='text-lg text-red-600'>Project not found</p>
					<button
						onClick={onBack}
						className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
					>
						Back to projects
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className='p-6 relative font-open-sans'>
			<button
				onClick={onBack}
				className='mb-4 px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm flex items-center'
			>
				<svg
					className='w-4 h-4 mr-1'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 19l-7-7 7-7'
					/>
				</svg>
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
