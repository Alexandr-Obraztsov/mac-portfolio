import { Card } from '../card/Card'
import Looper from 'public/assets/images/about/card7.svg'
import Gmail from 'public/assets/icons/apps/about-me/gmail.svg'
import Telegram from 'public/assets/icons/apps/about-me/telegram.svg'
import LinkedIn from 'public/assets/icons/apps/about-me/linkedIn.svg'

const contactInfo = [
	{
		icon: <Gmail />,
		value: 'obraztsov.official@gmail.com',
	},
	{
		icon: <Telegram className='-translate-x-[2px]' />,
		value: '@obraztsov_alexandr',
	},
	{
		icon: <LinkedIn className='translate-x-px -translate-y-[2px]' />,
		value: 'obraztsov-alexandr-047369349',
	},
]

export const Card7 = () => {
	return (
		<Card status='Contacts' statusBar>
			<h1 className='text-[126px] font-bebas text-about-me-accent leading-none text-center mt-12 tracking-tight'>
				Contact me
			</h1>
			<div className='mx-auto mt-3 w-[556px] bg-white border p-[16px_60px] flex flex-col gap-5 border-black rounded-xl z-10'>
				{contactInfo.map(({ icon, value }) => (
					<div key={value} className='flex items-center gap-6'>
						<div className='size-[50px] flex justify-center items-center rounded-xl border border-about-me-accent'>
							{icon}
						</div>
						<p className='text-about-me-accent text-2xl'>{value}</p>
					</div>
				))}
			</div>

			<div className='absolute inset-0 flex justify-between items-end'>
				<Looper className='scale-x-[-1]' />
				<Looper />
			</div>
		</Card>
	)
}
