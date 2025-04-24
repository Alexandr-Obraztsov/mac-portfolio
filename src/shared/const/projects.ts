export const projects: Record<string, ProjectData> = {
	'E-Commerce Platform': {
		title: 'E-Commerce Platform',
		imageUrl: '/images/projects/project1.jpg',
		description:
			'Полнофункциональная платформа электронной коммерции с каталогом продуктов, корзиной, оформлением заказа и панелью администратора.',
		shortDescription: 'Полнофункциональная платформа электронной коммерции.',
		technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
		demoUrl: 'https://example.com/demo',
		githubUrl: 'https://github.com/example/ecommerce',
	},
	'Portfolio Website': {
		title: 'Portfolio Website',
		imageUrl: '/images/projects/project2.jpg',
		description:
			'Современный адаптивный сайт-портфолио для демонстрации проектов и навыков.',
		shortDescription: 'Современный адаптивный сайт-портфолио.',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		demoUrl: 'https://example.com/portfolio',
		githubUrl: 'https://github.com/example/portfolio',
	},
	'Mobile Banking App': {
		title: 'Mobile Banking App',
		imageUrl: '/images/projects/project3.jpg',
		description:
			'Мобильное приложение для банкинга с функциями просмотра баланса, переводов и платежей.',
		shortDescription: 'Мобильное приложение для банкинга.',
		technologies: ['React Native', 'Redux', 'Firebase'],
		demoUrl: 'https://example.com/banking-app',
	},
	'Social Network': {
		title: 'Social Network',
		imageUrl: '/images/projects/project4.jpg',
		description:
			'Социальная сеть с профилями пользователей, лентой новостей и чатом.',
		shortDescription: 'Социальная сеть.',
		technologies: ['Vue.js', 'Vuex', 'Firebase', 'Socket.io'],
		githubUrl: 'https://github.com/example/social-network',
	},
	'Task Management Tool': {
		title: 'Task Management Tool',
		imageUrl: '/images/projects/project5.jpg',
		description:
			'Инструмент для управления задачами с организацией проектов, списками задач и отслеживанием времени.',
		shortDescription: 'Инструмент для управления задачами.',
		technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
		demoUrl: 'https://example.com/task-manager',
		githubUrl: 'https://github.com/example/task-manager',
	},
	'Social Media App': {
		title: 'Social Media App',
		imageUrl: '/images/projects/project6.jpg',
		description:
			'Социальная сеть с профилями пользователей, лентой новостей и чатом.',
		shortDescription: 'Социальная сеть.',
		technologies: ['Vue.js', 'Vuex', 'Firebase', 'Socket.io'],
		githubUrl: 'https://github.com/example/social-media-app',
	},
}

interface ProjectData {
	title: string
	imageUrl: string
	description: string
	shortDescription: string
	technologies: string[]
	demoUrl?: string
	githubUrl?: string
}
