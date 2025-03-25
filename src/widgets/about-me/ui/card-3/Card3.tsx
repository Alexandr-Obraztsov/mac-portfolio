import { Card } from '../card/Card'
export const Card3 = () => {
	return (
		<Card status='Skills'>
			<div className='border-b border-t border-black h-[111px] flex items-center'>
				<div className='p-[0_25px] border-r border-black h-full flex items-center flex-shrink-0'>
					<h1 className='font-bebas text-[96px] text-about-me-accent'>
						HARD{' '}
						<span className='text-transparent [-webkit-text-stroke:_1px_var(--about-me-accent)]'>
							SKILLS
						</span>
					</h1>
				</div>
				<div className='p-[0_25px_0_16px]'>
					<p className='font-open-sans text-base italic text-black'>
						During my studies and work, I have mastered and successfully apply
						various elements.
					</p>
				</div>
			</div>
			<div className='flex h-full'>
				<div className='p-[16px_25px] border-r border-black'>
					<div className='bg-red-300 w-[250px] h-full'></div>
				</div>
				<table className='w-full h-full'>
					<thead className='*:text-left'>
						<tr className='border-b border-black'>
							<th className='border-r border-black p-2 font-bold font-open-sans italic text-black'>
								Languages and technologies
							</th>
							<th className='border-r border-black p-2 font-bold font-open-sans italic text-black'>
								Tools and libraries
							</th>
							<th className='p-2 font-bold font-open-sans italic text-black'>
								Design and prototyping
							</th>
						</tr>
					</thead>
					<tbody className='*:align-top'>
						<tr>
							<td className='border-r border-black p-2 text-sm font-open-sans text-black'>
								JavaScript (ES6+), TypeScript React, Redux / RTK, React Router
								Next.js HTML / CSS / SCSS, TailwindCSS, Styled Components
								Material-UI, React Hook Form, Storybook
							</td>
							<td className='border-r border-black p-2 text-sm font-open-sans text-black'>
								Jest / React Testing Library for testing Webpack, Vite (for
								building projects) Axios / Fetch API (for working with the API)
								ESLint / Prettier (for code styling)
							</td>
							<td className='p-2 text-sm font-open-sans text-black'>
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
