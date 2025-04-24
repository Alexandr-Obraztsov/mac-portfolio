interface TechnologiesListProps {
	technologies: string[]
}

export const TechnologiesList = ({ technologies }: TechnologiesListProps) => {
	return (
		<div className='bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-md'>
			<h2 className='text-xl font-bold text-slate-800 mb-3'>Technologies</h2>
			<div className='flex flex-wrap gap-2'>
				{technologies.map((tech, index) => (
					<span
						key={index}
						className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold'
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	)
}
