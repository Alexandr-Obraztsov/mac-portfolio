import { AppProps, AppTypes } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import { ProjectCard, ProjectHeight } from './ProjectCard'
import BgLine from 'public/assets/images/projects/bg-line.svg'
import { useAppDispatch } from '@/shared/lib'
import { openApp } from '@/shared/model/appsSlice/appsSlice'
import { projects } from '@/shared/const/projects'

export const Projects = ({ app }: AppProps) => {
	const dispatch = useAppDispatch()

	const handleProjectClick = (title: string) => {
		dispatch(openApp({ type: AppTypes.PROJECT, params: title }))
	}

	const getCardHeight = (index: number) => {
		return ['tall', 'short', 'default', 'default', 'short', 'tall'][
			index % 6
		] as ProjectHeight
	}

	return (
		<BasicApp app={app} title='Projects'>
			<div className='min-w-[900px] p-10 relative'>
				<div className='columns-3 gap-5'>
					{Object.values(projects).map((project, index) => (
						<div key={project.title} className='mb-4 break-inside-avoid'>
							<ProjectCard
								title={project.title}
								imageUrl={project.imageUrl}
								height={getCardHeight(index)}
								onClick={() => handleProjectClick(project.title)}
							/>
						</div>
					))}
				</div>

				<BgLine className='absolute top-0 left-0 w-full h-full -z-10' />
			</div>
		</BasicApp>
	)
}
