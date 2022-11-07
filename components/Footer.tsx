import React from 'react'
import Image from 'next/image'

import { ORGINIZATION, SITE_NAME, TWITTER_USERNAME } from '../utils/constants'

type Props = {}

export default function Footer(props: Props) {
	return (
		<footer className='text-gray-600 body-font pt-8 bg-secondary mt-auto'>
			{/* Temp message */}
			<div className='container px-5 mx-auto flex items-center justify-center flex-col'>
				<p className='text-gray-400 text-center'>
					This webpage is still under development and will recieve frequent updates.
				</p>
				<p className='text-gray-400 text-center'>
					Website or recipe suggestions? Send an email to{' '}
					<a href='mailto: alex.hoeyby@gmail.com'>alex.hoeyby@gmail.com</a> (Or tell Emily).
				</p>
			</div>
			{/* Temp message end*/}

			<section className='flex items-center container p-8 mx-auto flex-col sm:flex-row lg:max-w-4xl'>
				<a className='flex font-medium items-center text-gray-900'>
					<Image
						width={50}
						height={50}
						alt='Logo'
						src='https://img.icons8.com/plasticine/100/000000/salad.png'
					/>
					<span className='ml-3 text-xl'>{SITE_NAME}</span>
				</a>

				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					© {new Date().getFullYear()} {ORGINIZATION}
					{TWITTER_USERNAME ? (
						<a
							href={`https://twitter.com/${TWITTER_USERNAME}`}
							className='text-gray-600 ml-1'
							rel='noopener noreferrer'
							target='_blank'
						>
							- @{TWITTER_USERNAME}
						</a>
					) : null}
				</p>

				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<a className='text-gray-500'>
						<svg
							fill='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
						</svg>
					</a>
					<a className='ml-3 text-gray-500'>
						<svg
							fill='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
						</svg>
					</a>
					<a className='ml-3 text-gray-500'>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
							<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
						</svg>
					</a>
					<a className='ml-3 text-gray-500'>
						<svg
							fill='currentColor'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='0'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<path
								stroke='none'
								d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
							></path>
							<circle cx='4' cy='4' r='2' stroke='none'></circle>
						</svg>
					</a>
				</span>
			</section>
		</footer>
	)
}
