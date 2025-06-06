const cardTypes = ['About me', 'Skills', 'Education', 'Projects', 'Contacts']

type Props = {
	status: 'About me' | 'Skills' | 'Education' | 'Projects' | 'Contacts'
}

export const StatusBar = ({ status }: Props) => {
	return (
		<div className='py-[15px] flex items-center justify-between'>
			{cardTypes.map(card => (
				<span
					key={card}
					className={`w-0 flex-1 block font-open-sans text-center text-black text-[20px] ${
						status === card && 'font-bold'
					}`}
				>
					{card}
				</span>
			))}
		</div>
	)
}
