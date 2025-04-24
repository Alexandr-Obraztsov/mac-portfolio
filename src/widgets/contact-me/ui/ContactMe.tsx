import { AppProps } from '@/shared/model/App.types'
import { Draggable } from '@/shared/ui'
import { useState, useRef } from 'react'
import { useApp } from '@/shared/lib'
import { cn } from '@sglara/cn'

export const ContactMe = ({ app }: AppProps) => {
	const { closeThisApp } = useApp({ app })
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		interest: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!formData.name || !formData.email) return

		setIsSubmitting(true)

		setTimeout(() => {
			setIsSubmitting(false)
			setIsSuccess(true)
		}, 2000)
	}

	const handleThankYouClose = () => {
		setIsSuccess(false)
		setFormData({ name: '', email: '', company: '', interest: '', message: '' })
		closeThisApp()
	}

	return (
		<Draggable app={app} targetId='header'>
			<div className='w-full h-full flex items-center justify-center rounded-2xl overflow-hidden shadow-lg relative'>
				<div className={`relative w-[380px] bg-white transform`}>
					<div
						id='header'
						className='flex items-center justify-between p-6 pt-4 pb-3 border-b'
					>
						<h2 className='text-gray-800 text-xl font-medium'>Get in touch</h2>
						<button
							onClick={closeThisApp}
							className='text-gray-400 hover:text-gray-600'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 6L6 18M6 6L18 18'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='flex gap-5 flex-col p-6 pt-3'
					>
						<div className='border-b border-gray-200'>
							<label className='text-sm text-gray-500 block mb-2'>Name</label>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='w-full p-2 border-none outline-none text-gray-800 bg-gray-300 bg-opacity-20 text-base'
								placeholder='Alexandr Obraztsov'
								disabled={isSubmitting}
								required
							/>
						</div>

						<div className='border-b border-gray-200'>
							<label className='text-sm text-gray-500 block mb-2'>Email</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full p-2 border-none outline-none text-gray-800 bg-gray-300 bg-opacity-20 text-base'
								placeholder='obraztsov.official@gmail.com'
								disabled={isSubmitting}
								required
							/>
						</div>

						<div className='border-b border-gray-200'>
							<label className='text-sm text-gray-500 block mb-2'>
								Company
							</label>
							<input
								type='text'
								name='company'
								value={formData.company}
								onChange={handleChange}
								className='w-full p-2 bg-gray-300 bg-opacity-20 border-none outline-none text-gray-800 text-base'
								placeholder='Google'
								disabled={isSubmitting}
							/>
						</div>

						<div>
							<label className='text-sm text-gray-500 block mb-2'>
								Message
							</label>
							<textarea
								name='message'
								value={formData.message}
								onChange={handleChange}
								className='w-full p-2 border-b bg-gray-300 bg-opacity-20 border-gray-200 outline-none text-gray-800 resize-none text-base'
								placeholder='Your message...'
								rows={4}
								disabled={isSubmitting}
							/>
						</div>

						<div className='flex justify-end'>
							<button
								type='submit'
								disabled={isSubmitting}
								className='h-10 px-6 bg-indigo-600 text-white text-base rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors font-medium mt-2 font-sans'
							>
								{isSubmitting ? (
									<svg
										className='animate-spin h-5 w-5 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
								) : (
									<>
										SEND
										<svg
											className='ml-1 size-4'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M5 12H19M19 12L12 5M19 12L12 19'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</>
								)}
							</button>
						</div>
					</form>
				</div>

				<div
					id='header'
					className={cn(
						'absolute inset-0 bg-indigo-600 p-6 text-white flex flex-col transition-all duration-default',
						isSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'
					)}
				>
					<div className='flex justify-end'>
						<button
							onClick={handleThankYouClose}
							className='text-white/70 hover:text-white'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 6L6 18M6 6L18 18'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>

					<div className='flex-1 flex flex-col items-center justify-center py-20'>
						<h1 className='text-6xl font-bold text-center'>
							Thank
							<br />
							You.
						</h1>
					</div>

					<div className='border-t border-white/20 pt-6 pb-4'>
						<p className='text-center text-xl'>
							We'll be in touch.
							<br />
							Shortly!
						</p>
					</div>

					<div className='flex justify-end'>
						<button
							className='h-10 px-6 bg-white text-indigo-600 text-base rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors font-medium font-sans'
							onClick={handleThankYouClose}
						>
							NEXT
							<svg
								className='ml-1 size-4'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M5 12H19M19 12L12 5M19 12L12 19'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</Draggable>
	)
}
