import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import { useState, useEffect } from 'react'
import './ContactMe.css'

export const ContactMe = ({ app }: AppProps) => {
	const [formData, setFormData] = useState({
		name: '',
		project: '',
		email: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isSent, setIsSent] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!formData.name || !formData.email) return

		setIsSubmitting(true)
		setIsSent(true)

		// Имитация отправки сообщения
		setTimeout(() => {
			setIsSubmitting(false)
			setIsSuccess(true)
		}, 1000)
	}

	// Сброс формы после отображения сообщения об успехе
	useEffect(() => {
		if (isSuccess) {
			const timeout = setTimeout(() => {
				setIsSuccess(false)
				setIsSent(false)
				setFormData({ name: '', project: '', email: '' })
			}, 3000)

			return () => clearTimeout(timeout)
		}
	}, [isSuccess])

	return (
		<BasicApp app={app} title='Contact me'>
			<div className='contact-container'>
				<div className='contact-header'>
					<h2 className='contact-title'>Let's get started.</h2>
					<p className='contact-subtitle'>Моя контактная форма</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className={`story-form ${isSent ? 'sent' : ''}`}
				>
					<div className='form-row'>
						My name is
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='input-field'
							placeholder='YOUR FULL NAME'
							disabled={isSubmitting}
							required
						/>
						and I have a
					</div>

					<div className='form-row'>
						<input
							type='text'
							name='project'
							value={formData.project}
							onChange={handleChange}
							className='input-field'
							placeholder='WEBSITE, PROJECT, IDEA, ETC.'
							disabled={isSubmitting}
						/>
						that needs help.
					</div>

					<div className='form-row'>
						You can reach me at
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='input-field'
							placeholder='YOUR EMAIL ADDRESS'
							disabled={isSubmitting}
							required
						/>
					</div>

					<div className='form-row'>to get things started.</div>

					<button type='submit' className='send-button' disabled={isSubmitting}>
						{isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
					</button>
				</form>

				<div className={`success-message ${isSuccess ? 'visible' : ''}`}>
					<div className='text-2xl font-bold mb-2'>Спасибо!</div>
					<p className='text-center'>Я свяжусь с вами в ближайшее время.</p>
				</div>
			</div>
		</BasicApp>
	)
}
