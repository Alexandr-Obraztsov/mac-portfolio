import github from 'public/media/icons/desktop/github.png'
import linkedin from 'public/media/icons/desktop/linkedin.png'
import telegram from 'public/media/icons/desktop/telegram.png'

export const socials = {
	telegram: {
		link: process.env.NEXT_PUBLIC_TELEGRAM,
		title: 'Telegram',
		img: telegram,
	},
	github: {
		link: process.env.NEXT_PUBLIC_GITHUB,
		title: 'GitHub',
		img: github,
	},
	linkedin: {
		link: process.env.NEXT_PUBLIC_LINKEDIN,
		title: 'LinkedIn',
		img: linkedin,
	},
}
