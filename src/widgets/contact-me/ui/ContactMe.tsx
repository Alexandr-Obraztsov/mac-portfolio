import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import { useState, useEffect } from 'react'
import './ContactMe.css'

export const ContactMe = ({ app }: AppProps) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Запускаем анимацию улетающего письма
		setIsAnimating(true)

		// Через 1.5с завершаем отправку и показываем сообщение об успехе
		setTimeout(() => {
			setIsSubmitting(false)
			setIsSuccess(true)
		}, 1500)
	}

	// Сброс формы через некоторое время после показа сообщения об успехе
	useEffect(() => {
		if (isSuccess) {
			const timeout = setTimeout(() => {
				setIsSuccess(false)
				setFormData({ name: '', email: '', message: '' })
				setIsAnimating(false)
			}, 3000)

			return () => clearTimeout(timeout)
		}
	}, [isSuccess])

	return (
		<BasicApp app={app} title='Contact me'>
			<div className='p-8 w-[400px] bg-about-me-primary relative overflow-hidden min-h-[400px]'>
				<div className='form-container'>
					<div className={`envelope ${isAnimating ? 'animating' : ''}`}>
						<div className='envelope-content'>
							<form
								onSubmit={handleSubmit}
								className='form-inputs flex flex-col gap-6'
							>
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
										disabled={isSubmitting}
									/>
								</div>

								<div className='flex flex-col'>
									<label
										htmlFor='email'
										className='text-sm text-[#8E9CB2] mb-2'
									>
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
										disabled={isSubmitting}
									/>
								</div>

								<div className='flex flex-col'>
									<label
										htmlFor='message'
										className='text-sm text-[#8E9CB2] mb-2'
									>
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
										disabled={isSubmitting}
									/>
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='send-button mt-2 py-3 px-4 bg-[#1A0A36] text-white rounded-md hover:bg-opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed font-medium'
								>
									{isSubmitting ? 'Отправка...' : 'Отправить'}
								</button>
							</form>

							<svg
								className='paper-plane-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'></path>
							</svg>
						</div>
					</div>

					<div className={`success-message ${isSuccess ? 'visible' : ''}`}>
						<div className='text-2xl font-bebas mb-2'>Спасибо!</div>
						<p className='text-center text-text'>
							Ваше сообщение успешно отправлено.
						</p>
					</div>
				</div>
			</div>
		</BasicApp>
	)
}
