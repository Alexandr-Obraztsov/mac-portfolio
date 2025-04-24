import { projects } from '@/shared/const/projects'
import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import {
	ProjectHeader,
	ProjectDescription,
	TechnologiesList,
	ProjectLinks,
} from './components'

export const Project = ({ app, params }: AppProps) => {
	const projectId = params as string
	const projectData = projects[projectId]

	if (!projectData) {
		return (
			<BasicApp app={app} title='Project Not Found'>
				<div className='min-w-[900px] p-6 relative flex items-center justify-center'>
					<div className='bg-red-100/80 backdrop-blur-sm rounded-xl p-5 text-center max-w-lg'>
						<h2 className='text-2xl font-bold text-red-700 mb-3'>Error</h2>
						<p className='text-lg text-red-600'>Project not found</p>
					</div>
				</div>
			</BasicApp>
		)
	}

	return (
		<BasicApp app={app} title={projectData.title}>
			<div className='min-w-[900px] p-6 relative font-open-sans'>
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
		</BasicApp>
	)
}
