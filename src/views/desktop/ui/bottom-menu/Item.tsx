import Image, { StaticImageData } from 'next/image'

type Props = {
	item: {
		title: string
		img: StaticImageData
		link?: string
		onClick?: () => void
	}
}

export const Item = ({ item }: Props) => {
	return (
		<li
			key={item.title}
			className='z-1 transition-all duration-default ease-out h-[var(--menu-icon-size)] w-[var(--menu-icon-size)]'
		>
			<a
				href={item.link}
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
			</a>
		</li>
	)
}
