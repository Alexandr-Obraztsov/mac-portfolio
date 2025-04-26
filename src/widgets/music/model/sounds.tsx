import { StaticImageData } from 'next/image'
import hitTheRoadJack from 'public/media/images/hit-the-road.png'
import onlyYou from 'public/media/images/only-you.png'
import sigmaBoy from 'public/media/images/sigma-boy.png'

export type Sound = {
	title: string
	img: StaticImageData
	src: string
}

export const sounds: Sound[] = [
	{
		title: 'Only You',
		img: onlyYou,
		src: '/media/sounds/only-you.mp3',
	},
	{
		title: 'Hit the road Jack',
		img: hitTheRoadJack,
		src: '/media/sounds/hit-the-road.mp3',
	},
	{
		title: 'Sigma Boy',
		img: sigmaBoy,
		src: '/media/sounds/sigma-boy.mp3',
	},
]
