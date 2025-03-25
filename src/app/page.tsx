'use client'

import { LoadingPage } from '@/views/loading'
import dynamic from 'next/dynamic'

const DesktopPage = dynamic(() => import('./desktop/page'), {
	loading: () => <LoadingPage />,
	ssr: false,
})

export default function Home() {
	return <DesktopPage />
}
