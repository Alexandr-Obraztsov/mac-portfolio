import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--system-primary)',
				secondary: 'var(--system-secondary)',
				text: 'var(--text)',

				'music-bg': 'var(--music-bg)',

				'hi-letter-bg': 'var(--hi-letter-background)',
				'hi-letter-primary': 'var(--hi-letter-primary)',
				'hi-letter-secondary': 'var(--hi-letter-secondary)',
				'hi-letter-stroke': 'var(--hi-letter-stroke)',
				'hi-letter-text-primary': 'var(--hi-letter-text-primary)',
				'hi-letter-text-secondary': 'var(--hi-letter-text-secondary)',

				'about-me-primary': 'var(--about-me-primary)',
				'about-me-secondary': 'var(--about-me-secondary)',
				'about-me-accent': 'var(--about-me-accent)',
				'about-me-background': 'var(--about-me-background)',
			},
			backgroundImage: {
				wallpaper: 'var(--wallpaper)',
			},
			fontFamily: {
				bebas: ['var(--font-bebas)', 'sans-serif'],
				'open-sans': ['var(--font-open-sans)', 'sans-serif'],
				'sf-pro': ['SF Pro', 'sans-serif'],
			},
		},
		transitionDuration: {
			default: '0.1s',
			animation: '0.5s',
		},
	},
	plugins: [],
} satisfies Config
