import { StaticImageData } from 'next/image'
import hitTheRoadJack from 'public/assets/images/hit-the-road.png'
import onlyYou from 'public/assets/images/only-you.png'
import sigmaBoy from 'public/assets/images/sigma-boy.png'

export type Sound = {
	title: string
	img: StaticImageData
	src: string
}

export const sounds: Sound[] = [
	{
		title: 'Only You',
		img: onlyYou,
		src: '/assets/sounds/only-you.mp3',
	},
	{
		title: 'Hit the road Jack',
		img: hitTheRoadJack,
		src: '/assets/sounds/hit-the-road.mp3',
	},
	{
		title: 'Sigma Boy',
		img: sigmaBoy,
		src: '/assets/sounds/sigma-boy.mp3',
	},
]
