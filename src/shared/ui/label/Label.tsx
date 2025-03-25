import Image, { StaticImageData } from 'next/image'
import { CSSProperties } from 'react'

export type Position = {
	x: number
	y: number
}

export type LabelPropsType = {
	title: string
	imgSrc: StaticImageData
	position: Position
	onClick?: () => void
	styles?: {
		label?: CSSProperties
		labelIcon?: CSSProperties
		labelTitle?: CSSProperties
	}
}

export const Label = ({
	title,
	imgSrc,
	position,
	onClick,
	styles,
}: LabelPropsType) => {
	const { label, labelIcon, labelTitle } = styles || {}
	const positionStyles: CSSProperties = {
		gridRowStart: position.y,
		gridColumnStart: position.x,
	}

	return (
		<div
			style={positionStyles}
			className='relative w-[var(--desktop-label-size)]'
		>
			<div
				style={label}
				className='hover:bg-primary absolute w-full flex flex-col hover:cursor-pointer p-[3px] justify-between items-center rounded-[3px] gap-[5px] transition-[background-color] ease-linear duration-default'
				onClick={onClick}
			>
				<Image
					priority
					style={labelIcon}
					className='size-[--desktop-label-size] object-contain'
					src={imgSrc}
					alt={`Image of: "${title}"`}
				/>
				<span
					style={labelTitle}
					className='block mt-[-5px] text-[20px] leading-tight text-center text-text w-full font-normal break-keep overflow-hidden text-ellipsis max-h-[calc(var(--desktop-label-font-size)*3)] z-[1]'
				>
					{title}
				</span>
			</div>
		</div>
	)
}
