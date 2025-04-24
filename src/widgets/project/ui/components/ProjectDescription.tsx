interface ProjectDescriptionProps {
	description: string
}

export const ProjectDescription = ({
	description,
}: ProjectDescriptionProps) => {
	return (
		<div className='col-span-2 bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-md'>
			<h2 className='text-xl font-bold text-slate-800 mb-3'>
				Project Description
			</h2>
			<p className='text-base text-slate-700 leading-relaxed'>{description}</p>
		</div>
	)
}
