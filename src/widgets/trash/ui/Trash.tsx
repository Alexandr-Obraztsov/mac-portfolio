import { AppProps } from '@/shared/model/App.types'
import { BasicApp } from '@/shared/ui'
import { useState } from 'react'
import Image from 'next/image'
import { trashImages } from '@/shared/const/trashImages'
import BackIcon from 'public/media/icons/shared/back.svg'

export const Trash = ({ app }: AppProps) => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null)

	return (
		<BasicApp app={app} title='Trash'>
			<div className='p-6 overflow-y-auto w-[500px] h-[600px]'>
				{selectedImage !== null ? (
					<div className='space-y-4'>
						<button
							onClick={() => setSelectedImage(null)}
							className='px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm flex items-center'
						>
							<BackIcon className='w-4 h-4 mr-1' />
							Back
						</button>

						<div className='bg-white rounded-lg shadow-md overflow-hidden'>
							<Image
								src={trashImages[selectedImage].src}
								alt={trashImages[selectedImage].alt}
								className='object-cover h-[390px]'
							/>

							<div className='p-4'>
								<h3 className='text-lg font-medium text-gray-800'>
									{trashImages[selectedImage].title}
								</h3>
								<p className='text-gray-600 mt-1'>
									{trashImages[selectedImage].description}
								</p>
							</div>
						</div>
					</div>
				) : (
					<div>
						<h2 className='text-xl font-medium text-gray-800 mb-4'>
							My life in pictures
						</h2>
						<div className='grid grid-cols-2 gap-4'>
							{trashImages.map((image, index) => (
								<div
									key={index}
									onClick={() => setSelectedImage(index)}
									className='group bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md'
								>
									<div className='relative h-[200px] w-full'>
										<Image
											src={image.src}
											alt={image.alt}
											fill
											className='object-cover'
										/>
									</div>

									<div className='p-3'>
										<p className='text-sm font-medium text-gray-700 truncate'>
											{image.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</BasicApp>
	)
}
