import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import { useState, useEffect } from 'react'

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
			<div className='w-full h-full flex flex-col bg-[#212121] text-white p-8 font-sf-pro relative overflow-hidden'>
				<div className='mb-10'>
					<h2 className='text-4xl font-semibold leading-tight mb-2'>
						Let's get started.
					</h2>
					<p className='text-xs uppercase tracking-wider text-[#888]'>
						Моя контактная форма
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className={`flex flex-col text-xl leading-loose ${
						isSent
							? 'opacity-0 -translate-y-[50px] scale-95 transition-all duration-1000'
							: 'opacity-100 translate-y-0 scale-100 transition-all duration-300'
					}`}
				>
					<div className='mb-4 flex flex-wrap items-center'>
						<span>My name is</span>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='mx-2 appearance-none bg-transparent border-b border-[#666] focus:border-white text-white text-xl py-1 outline-none min-w-[200px] transition-colors placeholder:text-[#666] placeholder:italic inline-block'
							placeholder='YOUR FULL NAME'
							disabled={isSubmitting}
							required
						/>
						<span>and I have a</span>
					</div>

					<div className='mb-4 flex flex-wrap items-center'>
						<input
							type='text'
							name='project'
							value={formData.project}
							onChange={handleChange}
							className='mx-2 appearance-none bg-transparent border-b border-[#666] focus:border-white text-white text-xl py-1 outline-none min-w-[200px] transition-colors placeholder:text-[#666] placeholder:italic inline-block'
							placeholder='WEBSITE, PROJECT, IDEA, ETC.'
							disabled={isSubmitting}
						/>
						<span>that needs help.</span>
					</div>

					<div className='mb-4 flex flex-wrap items-center'>
						<span>You can reach me at</span>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='mx-2 appearance-none bg-transparent border-b border-[#666] focus:border-white text-white text-xl py-1 outline-none min-w-[200px] transition-colors placeholder:text-[#666] placeholder:italic inline-block'
							placeholder='YOUR EMAIL ADDRESS'
							disabled={isSubmitting}
							required
						/>
					</div>

					<div className='mb-4'>
						<span>to get things started.</span>
					</div>

					<button
						type='submit'
						className='inline-flex items-center bg-transparent text-white border-none py-2 mt-8 text-sm uppercase tracking-wider cursor-pointer hover:text-[#aaa] transition-colors before:content-["—"] before:mr-2'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
					</button>
				</form>

				<div
					className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
						isSuccess
							? 'opacity-100 scale-100 z-10'
							: 'opacity-0 scale-90 -z-10'
					}`}
				>
					<div className='text-2xl font-bold mb-2'>Спасибо!</div>
					<p className='text-center'>Я свяжусь с вами в ближайшее время.</p>
				</div>
			</div>
		</BasicApp>
	)
}
