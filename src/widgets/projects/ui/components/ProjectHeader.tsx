import Image from 'next/image'

interface ProjectHeaderProps {
	title: string
	imageUrl: string
}

export const ProjectHeader = ({ title, imageUrl }: ProjectHeaderProps) => {
	return (
		<div className='bg-slate-200/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg'>
			<div className='relative h-[280px] w-full'>
				<Image
					src={imageUrl}
					alt={title}
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end'>
					<h1 className='text-4xl font-bold text-white p-6'>{title}</h1>
				</div>
			</div>
		</div>
	)
}
