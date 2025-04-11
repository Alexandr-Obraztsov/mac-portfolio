import s from './LoadingPage.module.css'

export const LoadingPage = () => {
	return (
		<div className='h-screen w-screen bg-black flex justify-center items-center'>
			<div className={s.loader}></div>
		</div>
	)
}
