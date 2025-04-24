import { useApp } from '@/shared/lib/useApp'
import { App } from '@/shared/model/App.types'
import { cn } from '@sglara/cn'
import { useEffect, useState } from 'react'

type Props = {
	children: React.ReactNode
	startPos?: { x: number; y: number }
	app: App
	targetId?: string
}

export const Draggable = ({ children, startPos, app, targetId }: Props) => {
	const [mounted, setMounted] = useState(false)
	const { setActiveThisApp } = useApp({ app })
	const [pos, setPos] = useState(
		startPos || { x: window.innerWidth / 2, y: window.innerHeight / 2 }
	)
	const [isDragging, setIsDragging] = useState(false)
	const [offset, setOffset] = useState({ x: 0, y: 0 })

	const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		if (targetId) {
			let evTarget = event.target as HTMLElement
			while (evTarget !== event.currentTarget) {
				if (evTarget.id === targetId) break
				if (evTarget.parentElement === event.currentTarget) return
				evTarget = evTarget.parentElement as HTMLElement
			}
		}
		setActiveThisApp()
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
		setMounted(true)
	}, [])

	return (
		<div
			onMouseDown={onMouseDown}
			className={cn(
				'absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-default',
				!mounted && 'scale-90 opacity-0'
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
