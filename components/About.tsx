import React from 'react'
import Image from 'next/image'

const About = () => {
	return (
		<section className='bg-white dark:bg-gray-800'>
			<div className='container px-6 py-8 mx-auto'>
				<div className='items-center lg:flex'>
					<div className='lg:w-1/2'>
						<h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
							Who I am
						</h2>

						<p className='mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md'>
							Hi I am Emily, Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Illum in sed non alias, fugiat, commodi
							nemo ut fugit corrupti dolorem sequi ex veniam consequuntur
							id, maiores beatae ipsa omnis aliquam?
						</p>

						{/* Socials */}
					</div>

					<div className='mt-8 lg:mt-0 lg:w-1/2'>
						<div className='flex items-center justify-center lg:justify-end'>
							<div className='max-w-lg'>
								{/* <Image>
                                <Image/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
