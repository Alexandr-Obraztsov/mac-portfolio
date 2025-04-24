import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import { useState } from 'react'

export const ContactMe = ({ app }: AppProps) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Имитация отправки данных
		setTimeout(() => {
			console.log('Form data:', formData)
			setIsSubmitting(false)
			setIsSuccess(true)

			// Сброс статуса успешной отправки через 3 секунды
			setTimeout(() => {
				setIsSuccess(false)
				setFormData({ name: '', email: '', message: '' })
			}, 3000)
		}, 1000)
	}

	return (
		<BasicApp app={app} title='Contact me'>
			<div className='p-8 w-[400px] bg-about-me-primary'>
				{isSuccess ? (
					<div className='flex flex-col items-center justify-center h-[300px]'>
						<div className='text-2xl font-bebas mb-2'>Спасибо!</div>
						<p className='text-center text-text'>
							Ваше сообщение успешно отправлено.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className='flex flex-col gap-6'>
						<div className='flex flex-col'>
							<label htmlFor='name' className='text-sm text-[#8E9CB2] mb-2'>
								Имя
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='p-3 rounded-md bg-white text-black border border-[#DFE1E6] focus:outline-none focus:border-[#5E72E4]'
							/>
						</div>

						<div className='flex flex-col'>
							<label htmlFor='email' className='text-sm text-[#8E9CB2] mb-2'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='p-3 rounded-md bg-white text-black border border-[#DFE1E6] focus:outline-none focus:border-[#5E72E4]'
							/>
						</div>

						<div className='flex flex-col'>
							<label htmlFor='message' className='text-sm text-[#8E9CB2] mb-2'>
								Сообщение
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								rows={4}
								className='p-3 rounded-md bg-white text-black border border-[#DFE1E6] focus:outline-none focus:border-[#5E72E4] resize-none'
							/>
						</div>

						<button
							type='submit'
							disabled={isSubmitting}
							className='mt-2 py-3 px-4 bg-[#1A0A36] text-white rounded-md hover:bg-opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed font-medium'
						>
							{isSubmitting ? 'Отправка...' : 'Отправить'}
						</button>
					</form>
				)}
			</div>
		</BasicApp>
	)
}
