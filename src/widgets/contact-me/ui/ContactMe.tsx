import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'

export const ContactMe = ({ app }: AppProps) => {
	return (
		<BasicApp app={app} title='Contact me'>
			<div className='w-[900px] p-5 flex flex-row gap-[30px] items-center'>
				<div className='size-[460px] '></div>
				<form className='flex flex-col gap-[30px] flex-1'>
					<h2 className='font-sf-pro font-medium leading-[56px] text-[48px] text-black text-nowrap'>
						Let`s work together
					</h2>
					<input
						type='text'
						className='p-[11px_16px] bg-white rounded-[20px] outline-none text-[#585858]'
						placeholder='Name'
					/>
					<input
						type='email'
						className='p-[11px_16px] bg-white rounded-[20px] outline-none text-[#585858]'
						placeholder='Email'
					/>
					<textarea
						className='p-[11px_16px] bg-white rounded-[20px] outline-none text-[#585858] resize-none h-[130px]'
						placeholder='Message'
					></textarea>

					<button className='bg-[#2C0065] uppercase w-full py-3 rounded-full text-white font-sans font-bold'>
						Send
					</button>
				</form>
			</div>
		</BasicApp>
	)
}
