import Image from 'next/image'
import { Card } from '../card/Card'
import image from 'public/assets/images/about/card3.png'

export const Card3 = () => {
	return (
		<Card status='Skills'>
			<div className='border-b border-t border-black h-[111px] flex items-center'>
				<div className='p-[0_25px] border-r border-black h-full flex items-center flex-shrink-0'>
					<h1 className='font-bebas text-[96px] text-about-me-accent tracking-tight'>
						HARD{' '}
						<span className='text-transparent [-webkit-text-stroke:_1px_var(--about-me-accent)]'>
							SKILLS
						</span>
					</h1>
				</div>
				<div className='pb-[5px] pl-[13px]'>
					<p className='font-open-sans text-base leading-5 italic text-black tracking-tight'>
						During my studies and work, I have mastered
						<br /> and successfully apply various elements.
					</p>
				</div>
			</div>
			<div className='flex h-full overflow-hidden'>
				<div className='p-[16px_25px] w-[300px] border-r border-black shrink-0'>
					<Image
						src={image}
						alt='computer'
						className='h-full w-[250px] object-cover'
						width={250}
						height={300}
					/>
				</div>
				<table className='w-full table-fixed'>
					<thead className='*:text-left'>
						<tr className='border-b border-black'>
							<th className='border-r border-black p-2 font-bold font-open-sans text-black w-1/3'>
								Languages
								<br />
								and technologies
							</th>
							<th className='border-r border-black p-2 font-bold font-open-sans text-black w-1/3'>
								Tools
								<br />
								and libraries
							</th>
							<th className='p-2 font-bold font-open-sans text-black w-1/3'>
								Design
								<br />
								and prototyping
							</th>
						</tr>
					</thead>
					<tbody className='*:align-top'>
						<tr>
							<td className='border-r border-black p-2 text-sm font-open-sans text-black w-1/3'>
								JavaScript (ES6+), TypeScript React, Redux / RTK, React Router
								Next.js HTML / CSS / SCSS, TailwindCSS, Styled Components
								Material-UI, React Hook Form, Storybook
							</td>
							<td className='border-r border-black p-2 text-sm font-open-sans text-black w-1/3'>
								Jest / React Testing Library for testing Webpack, Vite (for
								building projects) Axios / Fetch API (for working with the API)
								ESLint / Prettier (for code styling)
							</td>
							<td className='p-2 text-sm font-open-sans text-black w-1/3'>
								UI design and implementation in Figma Basics of working with
								graphic editors for developing visual components
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Card>
	)
}
