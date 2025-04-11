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
					title='Engineer
 in Information Technology'
					organization='BSUIR'
					date='2023 - present'
				/>
				<EducationStep
					title='Front-end developer course'
					organization='IT-INCUBATOR'
					date='2024 - 2025'
				/>
				<EducationStep
					title='Traineeship
as front-end developer'
					organization='IT-INCUBATOR'
					date='2024 - present'
				/>
			</ol>

			<div className='bg-about-me-accent w-full h-full rounded-t-xl flex justify-center items-center text-[#F2F0ED] font-bebas text-[150px]'>
				EDUCATION
			</div>
		</Card>
	)
}
