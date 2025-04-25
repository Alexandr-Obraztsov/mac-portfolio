import { useMounted } from '@/shared/lib/useMounted'
import { cn } from '@sglara/cn'
import Image, { StaticImageData } from 'next/image'

type Props = {
	item: {
		title: string
		img: StaticImageData
		link?: string
		onClick?: () => void
	}
	activity?: 'active' | 'inactive'
}

export const Item = ({ item, activity }: Props) => {
	const mounted = useMounted()

	return (
		<li
			key={item.title}
			className={cn(
				'size-[var(--menu-icon-size)] z-1 transition-all duration-default ease-out',
				!mounted && '!size-0'
			)}
		>
			<a
				href={item.link}
				target={item.link ? '_blank' : undefined}
				rel={item.link ? 'noopener noreferrer' : undefined}
				onClick={item.onClick}
				className='relative block group'
			>
				<Image
					src={item.img}
					alt={item.title}
					width={100}
					height={100}
					className='w-full h-full'
				/>
				<span className='opacity-0 group-hover:opacity-100 transition-all duration-default ease-out block bg-secondary shadow-[0_0_1px_white_inset] p-[3px_15px] rounded-[10px] text-white text-[20px] absolute left-1/2 -top-[15px] -translate-x-1/2 -translate-y-1/2'>
					{item.title}
				</span>
				{activity && (
					<span
						className={cn(
							'block absolute bg-white h-1 bottom-[15%] w-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-default',
							activity === 'active' && 'opacity-100',
							activity === 'inactive' && 'opacity-40'
						)}
					></span>
				)}
			</a>
		</li>
	)
}
