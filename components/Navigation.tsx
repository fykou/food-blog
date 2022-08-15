// components/Header.tsx
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { SITE_NAME } from '../utils/constants'

const Header: React.FC = () => {
	const dropdownRef = useRef(null)
	const [isActive, setIsActive] = useState(false)

	return (
		<nav ref={dropdownRef} className='shadow'>
			<div className='lg:max-w-screen-lg px-6 py-3 mx-auto md:flex items-center justify-center'>
				<div className='flex items-center justify-between'>
					<div className='w-64'>
						<Link href='/'>
							<a className='text-2xl font-bold text-gray-600'>
								{SITE_NAME}
							</a>
						</Link>
					</div>

					<div className='flex md:hidden'>
						<button
							type='button'
							className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
							aria-label='toggle menu'
							onClick={() => setIsActive(!isActive)}
						>
							<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
								<path
									fillRule='evenodd'
									d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
								></path>
							</svg>
						</button>
					</div>
				</div>

				<div
					className={`md:flex md:items-center md:justify-between md:static md:w-auto
                ${
					isActive
						? `opacity-100 visible absolute z-10 bg-white w-full left-0`
						: 'hidden'
				}`}
				>
					<div className='flex flex-col px-2 py-3 md:flex-row md:mx-0 md:py-0'>
						<a
							href='\'
							className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2'
						>
							Home
						</a>
						<a
							href='#'
							className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2'
						>
							About
						</a>
						<a
							href='#'
							className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2'
						>
							Contact
						</a>
					</div>

					{/* <div className='relative'>
						<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<svg
								className='w-5 h-5 text-gray-400'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
							</svg>
						</span>

						<input
							type='text'
							className='w-full py-2 pl-10 pr-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300'
							placeholder='Search'
						/>
					</div> */}
				</div>
			</div>
		</nav>
	)
}

export default Header
