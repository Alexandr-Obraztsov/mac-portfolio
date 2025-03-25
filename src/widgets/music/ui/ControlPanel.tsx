import Back from 'public/assets/icons/widgets/music/back.svg'
import Next from 'public/assets/icons/widgets/music/next.svg'
import Pause from 'public/assets/icons/widgets/music/pause.svg'
import Play from 'public/assets/icons/widgets/music/play.svg'
import { useCallback, useEffect, useState } from 'react'
import useSound from 'use-sound'
import { sounds } from '../model/sounds'
import { ProgressBar } from './ProgressBar'

type Props = {
	setSound: (index: number | ((prev: number) => number)) => void
	soundIndex: number
}

export const ControlPanel = ({ setSound, soundIndex }: Props) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [progress, setProgress] = useState(0)

	const [currentTime, setCurrentTime] = useState({
		min: '00',
		sec: '00',
	})

	const [trackDuration, setTrackDuration] = useState({
		min: '00',
		sec: '00',
	})

	const sound = sounds[soundIndex]

	const [play, { pause, duration, sound: player }] = useSound(sound.src, {
		autoplay: isPlaying,
		onload: () => {
			setProgress(0)
			setCurrentTime({ min: '00', sec: '00' })
		},
		onend: () => {
			playNext()
		},
	})

	const togglePlay = () => {
		const isActive = !isPlaying
		setIsPlaying(isActive)
		if (isActive) play()
		else pause()
	}

	const onDragStart = () => {
		pause()
		updateCurrentTime()
	}

	const onProgressChange = (value: number) => {
		setProgress(value)
		updateCurrentTime()
		if (player) player.seek([(value * duration!) / 100000])
	}

	const onDragEnd = () => {
		if (isPlaying) play()
		updateCurrentTime()
	}

	const updateCurrentTime = useCallback(() => {
		const min = Math.floor(player.seek([]) / 60) || 0
		const sec = Math.floor(player.seek([]) % 60) || 0

		setCurrentTime({
			min: min < 10 ? `0${min}` : `${min}`,
			sec: sec < 10 ? `0${sec}` : `${sec}`,
		})
	}, [player])

	const playPrevious = () => {
		pause()
		setSound(prev => (prev - 1 + sounds.length) % sounds.length)
	}

	const playNext = () => {
		pause()
		setSound(prev => (prev + 1) % sounds.length)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (player && duration) {
				updateCurrentTime()
				setProgress((player.seek([]) * 100000) / duration)
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [updateCurrentTime, player, duration])

	useEffect(() => {
		if (duration) {
			const totalMin = Math.floor(duration / 1000 / 60)
			const totalSec = Math.floor((duration / 1000) % 60)

			setTrackDuration({
				min: totalMin < 10 ? `0${totalMin}` : `${totalMin}`,
				sec: totalSec < 10 ? `0${totalSec}` : `${totalSec}`,
			})
		}
	}, [duration])

	return (
		<>
			<ProgressBar
				value={progress}
				onChangeValue={onProgressChange}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				currentTime={currentTime}
				trackDuration={trackDuration}
			/>
			<div className='flex flex-row gap-[10px] justify-center items-center text-white text-opacity-65 hover:*:cursor-pointer'>
				<div className='hover:text-white'>
					<Back onClick={playPrevious} />
				</div>
				<div
					className='bg-white bg-opacity-65 hover:bg-opacity-80 p-[8px] rounded-full text-music-bg flex items-center justify-center'
					onClick={togglePlay}
				>
					<div className='mix-blend-difference text-white'>
						{isPlaying ? <Pause /> : <Play />}
					</div>
				</div>
				<div className='hover:text-white'>
					<Next onClick={playNext} />
				</div>
			</div>
		</>
	)
}
