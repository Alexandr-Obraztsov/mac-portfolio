import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import { useState } from 'react'
import { projects } from '@/shared/const/projects'
import { ProjectList, ProjectDetails } from './components'

export const Projects = ({ app, params }: AppProps) => {
	const [selectedProject, setSelectedProject] = useState<string | null>(
		params as string
	)

	const handleProjectSelect = (title: string) => {
		setSelectedProject(title)
	}

	const handleBackClick = () => {
		setSelectedProject(null)
	}

	return (
		<BasicApp
			app={app}
			title={
				selectedProject
					? projects[selectedProject]?.title || 'Project'
					: 'Projects'
			}
		>
			<div className='w-[900px] h-[610px] overflow-y-auto'>
				{selectedProject ? (
					<ProjectDetails
						projectId={selectedProject}
						onBack={handleBackClick}
					/>
				) : (
					<ProjectList onProjectSelect={handleProjectSelect} />
				)}
			</div>
		</BasicApp>
	)
}
