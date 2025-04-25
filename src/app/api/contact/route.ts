import { NextResponse } from 'next/server'

/**
 * API-роут для отправки сообщений через контактную форму в Telegram
 */
export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { name, email, company, message } = body

		// Проверка обязательных полей
		if (!name || !email || !message) {
			return NextResponse.json(
				{
					success: false,
					message: 'Необходимо заполнить все обязательные поля',
				},
				{ status: 400 }
			)
		}

		// Telegram Bot API
		const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
		const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

		// Если токены отсутствуют, возвращаем ошибку
		if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
			return NextResponse.json(
				{ success: false, message: 'Ошибка конфигурации сервера' },
				{ status: 500 }
			)
		}

		// Формируем текст сообщения
		const text = `
🔔 Новое сообщение с сайта:

👤 Имя: ${name}
📧 Email: ${email}
🏢 Компания: ${company || '-'}
📝 Сообщение: ${message}
`

		// Отправляем сообщение в Telegram
		const telegramResponse = await fetch(
			`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: TELEGRAM_CHAT_ID,
					text,
					parse_mode: 'HTML',
				}),
			}
		)

		const telegramData = await telegramResponse.json()

		if (!telegramResponse.ok) {
			console.error('Ошибка отправки в Telegram:', telegramData)
			return NextResponse.json(
				{ success: false, message: 'Ошибка отправки сообщения' },
				{ status: 500 }
			)
		}

		return NextResponse.json({
			success: true,
			message: 'Сообщение успешно отправлено',
		})
	} catch (error) {
		console.error('Ошибка обработки запроса:', error)
		return NextResponse.json(
			{ success: false, message: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		)
	}
}
