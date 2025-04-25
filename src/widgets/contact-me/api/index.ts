interface ContactFormData {
	name: string
	email: string
	company?: string
	interest?: string
	message: string
}

interface ContactResponse {
	success: boolean
	message: string
}

/**
 * Отправляет данные контактной формы в API
 */
export const sendContactForm = async (
	data: ContactFormData
): Promise<ContactResponse> => {
	const response = await fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	const responseData = await response.json()

	if (!response.ok) {
		throw new Error(responseData.message || 'Ошибка при отправке сообщения')
	}

	return responseData
}
