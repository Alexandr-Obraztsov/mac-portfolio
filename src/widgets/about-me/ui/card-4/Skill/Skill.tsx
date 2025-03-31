type Props = {
	title: string
	evaluation: number
	className?: string
}

export const Skill = ({ title, evaluation, className }: Props) => {
	return (
		<div
			className={`p-[10px_15px] rounded-[15px] border bg-about-me-background border-about-me-accent ${className}`}
		>
			<h2 className='font-open-sans font-semibold text-xl text-black text-nowrap tracking-[-0.03em]'>
				{title}
			</h2>
			<div className='flex gap-[7px] p-[10px_0]'>
				{Array(10)
					.fill(null)
					.map((_, i) => (
						<span
							key={i}
							className={`block size-[15px] rounded-full border border-about-me-accent ${
								i < evaluation && 'bg-about-me-accent'
							}`}
						></span>
					))}
			</div>
		</div>
	)
}
