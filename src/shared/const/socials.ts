import github from 'public/assets/icons/desktop/github.png'
import linkedin from 'public/assets/icons/desktop/linkedin.png'
import telegram from 'public/assets/icons/desktop/telegram.png'

export const socials = {
	telegram: {
		link: process.env.TELEGRAM,
		title: 'Telegram',
		img: telegram,
	},
	github: {
		link: process.env.GITHUB,
		title: 'GitHub',
		img: github,
	},
	linkedin: {
		link: process.env.LINKEDIN,
		title: 'LinkedIn',
		img: linkedin,
	},
}
