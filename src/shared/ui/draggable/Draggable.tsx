import { useApp } from '@/shared/lib/useApp'
import { useMounted } from '@/shared/lib/useMounted'
import { App } from '@/shared/model/App.types'
import { cn } from '@sglara/cn'
import { useEffect, useRef, useState } from 'react'

type Props = {
	children: React.ReactNode
	app: App
	targetId?: string
}

export const Draggable = ({ children, app, targetId }: Props) => {
	const mounted = useMounted()
	const { setActiveThisApp } = useApp({ app })
	const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [offset, setOffset] = useState({ x: 0, y: 0 })
	const ref = useRef<HTMLDivElement>(null)

	const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		setActiveThisApp()
		if (targetId) {
			let evTarget = event.target as HTMLElement
			while (evTarget !== event.currentTarget) {
				if (evTarget.id === targetId) break
				if (evTarget.parentElement === event.currentTarget) return
				evTarget = evTarget.parentElement as HTMLElement
			}
		}
		setIsDragging(true)
		setOffset({
			x: event.clientX - pos!.x,
			y: event.clientY - pos!.y,
		})
	}

	useEffect(() => {
		const onMouseMove = (ev: MouseEvent) => {
			if (!isDragging) return
			setPos({
				x: ev.clientX - offset.x,
				y: ev.clientY - offset.y,
			})
		}

		const onMouseUp = () => isDragging && setIsDragging(false)

		window.addEventListener('mousemove', onMouseMove)
		window.addEventListener('mouseup', onMouseUp)

		return () => {
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
		}
	}, [offset, isDragging])

	useEffect(() => {
		setPos({
			x: ref.current!.offsetLeft,
			y: ref.current!.offsetTop,
		})
	}, [])

	return (
		<div
			onMouseDown={onMouseDown}
			ref={ref}
			className={cn(
				'absolute pointer-events-auto transition-[transform,opacity] duration-default',
				!mounted && 'scale-90 opacity-0 translate-y-[20px]'
			)}
			style={{
				left: pos?.x + 'px',
				top: pos?.y + 'px',
				zIndex: app.zIndex,
			}}
		>
			{children}
		</div>
	)
}
