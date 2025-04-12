import { Card } from '../card/Card'
import { EducationStep } from './education-step/EducationStep'

export const Card5 = () => {
	return (
		<Card status='Education' statusBar>
			<ol
				className='h-[243px] p-[25px_35px] flex justify-between items-start '
				style={{ counterReset: 'step-counter' }}
			>
				<EducationStep
					title={
						<>
							Engineer
							<br />
							in Information Technology
						</>
					}
					organization='BSUIR'
					date='2023 - present'
				/>
				<span className='h-[100px] w-px bg-black'></span>
				<EducationStep
					title={
						<>
							Front-end developer
							<br />
							course
						</>
					}
					organization='IT-INCUBATOR'
					date='2024 - 2025'
				/>
				<span className='h-[100px] w-px bg-black'></span>
				<EducationStep
					title={
						<>
							Traineeship
							<br />
							as front-end developer
						</>
					}
					organization='IT-INCUBATOR'
					date='2024 - present'
				/>
			</ol>

			<div className='bg-about-me-accent w-full h-full rounded-t-xl flex justify-center items-center text-[#F2F0ED] font-bebas text-[150px] tracking-tight'>
				EDUCATION
			</div>
		</Card>
	)
}
