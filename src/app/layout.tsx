'use client'

import { store } from '@/shared/model'
import { Bebas_Neue, Open_Sans, Rubik } from 'next/font/google'
import { Provider } from 'react-redux'
import './globals.css'

const rubik = Rubik({
	subsets: ['latin'],
})

const bebas = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-bebas',
})

const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${rubik.className} ${bebas.variable} ${openSans.variable} antialiased`}
			>
				<Provider store={store}>{children}</Provider>
			</body>
		</html>
	)
}
