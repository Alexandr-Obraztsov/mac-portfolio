import { useEffect, useRef, useState } from 'react'

type Props = {
	onChangeValue?: (value: number) => void
	onDragStart?: () => void
	onDragEnd?: () => void
	value: number
	currentTime: {
		min: string
		sec: string
	}
	trackDuration: {
		min: string
		sec: string
	}
}

export const ProgressBar = ({
	onChangeValue,
	value,
	onDragStart,
	onDragEnd,
	currentTime,
	trackDuration,
}: Props) => {
	const progressBarRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		const mouseX = event.clientX
		const progressBar = progressBarRef.current!
		const progressRect = progressBar.getBoundingClientRect()
		const newProgress = ((mouseX - progressRect.x) / progressRect.width) * 100

		onChangeValue?.(Math.min(Math.max(0, newProgress), 100))
		setIsDragging(true)
		onDragStart?.()
	}

	useEffect(() => {
		if (!isDragging) return

		const handleMouseMove = (event: MouseEvent) => {
			const mouseX = event.clientX
			const progressBar = progressBarRef.current!
			const progressRect = progressBar.getBoundingClientRect()
			const newProgress = ((mouseX - progressRect.x) / progressRect.width) * 100

			onChangeValue?.(Math.min(Math.max(0, newProgress), 100))
		}

		const handleMouseUp = () => {
			setIsDragging(false)
			onDragEnd?.()
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseup', handleMouseUp)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleMouseUp)
		}
	}, [isDragging, onChangeValue, onDragEnd])

	return (
		<>
			<div
				className='h-[8px] mt-[8px] bg-white bg-opacity-30 w-full rounded-full hover:cursor-pointer active:cursor-grabbing'
				onMouseDown={handleMouseDown}
				ref={progressBarRef}
			>
				<div
					className='relative bg-white bg-opacity-65 h-full rounded-full after:content-[""] after:size-[14px] after:block after:absolute after:right-0 after:bg-white after:bg-opacity-80 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:translate-x-1/2'
					style={{ width: `${value}%` }}
				></div>
			</div>
			<div className='mt-px flex w-full justify-between items-center *:text-[14px] *:text-white *:text-opacity-80 *:font-semibold *:leading-[14px]'>
				<span>
					{currentTime.min}:{currentTime.sec}
				</span>
				<span>
					{trackDuration.min}:{trackDuration.sec}
				</span>
			</div>
		</>
	)
}
