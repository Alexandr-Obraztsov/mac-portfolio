const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

// Функция для рекурсивного обхода директорий
async function walkDir(dir, callback) {
	const files = fs.readdirSync(dir)
	for (const file of files) {
		const filePath = path.join(dir, file)
		const stat = fs.statSync(filePath)
		if (
			stat.isDirectory() &&
			file !== 'node_modules' &&
			file !== '.git' &&
			file !== '.next'
		) {
			await walkDir(filePath, callback)
		} else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(file)) {
			await callback(filePath)
		}
	}
}

// Функция для обновления импортов в файле
async function updateImports(filePath) {
	try {
		let content = await readFileAsync(filePath, 'utf8')

		// Замена путей импорта
		const oldContent = content

		// Обновление путей импорта
		content = content.replace(
			/from\s+['"]public\/assets\//g,
			"from 'public/media/"
		)
		content = content.replace(/url\(\s*['"]?\/assets\//g, "url('/media/")

		// Проверка, были ли внесены изменения
		if (content !== oldContent) {
			await writeFileAsync(filePath, content, 'utf8')
			console.log(`Updated imports in: ${filePath}`)
		}
	} catch (error) {
		console.error(`Error processing file ${filePath}:`, error)
	}
}

// Основная функция
async function main() {
	try {
		await walkDir('./src', updateImports)
		console.log('All imports updated successfully!')
	} catch (error) {
		console.error('Error updating imports:', error)
	}
}

main()
