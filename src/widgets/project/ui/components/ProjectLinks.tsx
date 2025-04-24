interface ProjectLinksProps {
	demoUrl?: string
	githubUrl?: string
}

export const ProjectLinks = ({ demoUrl, githubUrl }: ProjectLinksProps) => {
	if (!demoUrl && !githubUrl) return null

	return (
		<div className='bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-md'>
			<h2 className='text-xl font-bold text-slate-800 mb-3'>Links</h2>
			<div className='space-y-2'>
				{demoUrl && (
					<a
						href={demoUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='block w-full py-2 px-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors'
					>
						Project Demo
					</a>
				)}

				{githubUrl && (
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='block w-full py-2 px-4 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-800 transition-colors'
					>
						GitHub Repository
					</a>
				)}
			</div>
		</div>
	)
}
