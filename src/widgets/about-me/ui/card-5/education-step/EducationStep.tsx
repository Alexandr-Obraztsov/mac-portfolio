type Props = {
	title: React.ReactNode
	organization: string
	date: string
}

export const EducationStep = ({ title, organization, date }: Props) => {
	return (
		<li
			style={{ counterIncrement: 'step-counter 1' }}
			className='before:absolute before:content-["0"_counter(step-counter)] before:mr-2 before:text-about-me-accent before:font-bebas before:text-4xl before:tracking-tight before:left-0 relative w-[180px] flex flex-col items-end'
		>
			<h2 className='text-wrap text-right w-full text-black font-open-sans font-semibold text-[22px] tracking-tighter'>
				{title}
			</h2>

			<span className='mt-4 h-0 border border-t-black w-full'></span>

			<span className='mt-4 font-sans text-xl tracking-tight text-black'>
				{organization}
			</span>

			<span className='mt-1 text-black font-sans text-base tracking-tight'>
				{date}
			</span>
		</li>
	)
}
