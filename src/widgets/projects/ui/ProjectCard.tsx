export type ProjectHeight = 'default' | 'tall' | 'short'

export type ProjectCard = {
	title: string
	imageUrl: string
	onClick: () => void
	height?: ProjectHeight
}

const heightClasses = {
	short: 'h-[240px]',
	default: 'h-[270px]',
	tall: 'h-[300px]',
}

export const ProjectCard = ({
	title,
	onClick,
	height = 'default',
}: ProjectCard) => {
	return (
		<div
			className={`w-full ${heightClasses[height]} rounded-xl overflow-hidden relative cursor-pointer flex items-center justify-center bg-slate-200/60 shadow-lg backdrop-blur-sm group hover:scale-105 hover:shadow-xl transition-all duration-default ease-in-out group`}
			onClick={onClick}
		>
			<h3 className='font-bold text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-default ease-in-out'>
				{title}
			</h3>

			<div className='absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10'></div>
			<div className='absolute bottom-5 left-5 w-8 h-8 rounded-full bg-white/20'></div>
		</div>
	)
}
