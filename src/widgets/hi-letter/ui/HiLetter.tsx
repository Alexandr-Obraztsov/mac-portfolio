import { useApp } from '@/shared/lib'
import { AppProps } from '@/shared/model/App.types'
import Image from 'next/image'
import hiImg from 'public/media/images/hi-letter.png'
export const HiLetter = ({ app }: AppProps) => {
	const { closeThisApp } = useApp({ app })

	return (
		<div className='absolute inset-0 backdrop:blur flex justify-center items-center backdrop-blur-[2px] font-sf-pro'>
			<div className='bg-hi-letter-bg rounded-[15px] p-[35px] w-[700px]'>
				<Image
					src={hiImg}
					alt='asdf'
					width={255}
					height={209}
					className='mx-auto'
				/>
				<h1 className='text-hi-letter-text-primary text-[48px] text-center'>
					Welcome!
				</h1>
				<p className='text-hi-letter-text-primary text-[20px] leading-[28px] p-[15px_0_10px]'>
					I&apos;m thrilled to have you here. This digital workspace is my
					interactive portfolio, where you can explore my projects, skills, and
					ways to connect. Feel free to navigate through the applications,
					discover my work, and get in touch!
					<br />
					<br />
					Enjoy your visit! 🚀
				</p>
				<button
					className='block mx-auto bg-hi-letter-primary text-hi-letter-text-secondary rounded-[10px] border-hi-letter-stroke border-[1px] p-[9px_57px] text-[20px] leading-[28px]'
					onClick={() => {
						closeThisApp()
					}}
				>
					Let&apos;s start
				</button>
			</div>
		</div>
	)
}
