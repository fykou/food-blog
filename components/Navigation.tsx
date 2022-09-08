// components/Header.tsx
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { SITE_NAME } from '../utils/constants'

const MenuItems: any = {
	home: ['Home', '/'],
	about: ['About', '#'],
	contact: ['Contact', '#'],
}

const navLinks = Object.keys(MenuItems).map((key) => (
	<Link href={MenuItems[key][1]} key={key}>
		<a className='no-underline w-full text-center text-gray-800 font-semibold hover:text-gray-600'>
			{MenuItems[key][0]}
		</a>
	</Link>
))

const Header: React.FC = () => {
	function useOutsideAlerter(ref: { current: any }) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event: { target: any }) {
				if (ref.current && !ref.current.contains(event.target)) {
					setMenuOpen(false)
				}
			}
			// Bind the event listener
			document.addEventListener('mousedown', handleClickOutside)
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('mousedown', handleClickOutside)
			}
		}, [ref])
	}

	const [menuOpen, setMenuOpen] = useState(false)
	const dropdownRef = useRef(null)
	useOutsideAlerter(dropdownRef)

	return (
		<div ref={dropdownRef} className='prose-xl shadow mb-8'>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			{menuOpen && (
				<nav className='p-4 flex flex-col space-y-3 lg:hidden absolute w-full bg-white shadow-lg z-10'>
					{navLinks}
					<div className='w-full'>
						<Search />
					</div>
				</nav>
			)}
		</div>
	)
}

const Navbar = ({ menuOpen, setMenuOpen }: any) => (
	<div className='lg:container mx-auto flex items-center justify-between p-4'>
		<div className='flex items-center'>
			<Image
				width={50}
				height={50}
				alt='Logo'
				src='https://img.icons8.com/plasticine/100/000000/salad.png'
			/>
			<Link href='/'>
				<a className='text-xl font-bold no-underline text-gray-800'>
					{SITE_NAME}
				</a>
			</Link>
		</div>
		<nav className='hidden lg:block space-x-6'>{navLinks}</nav>

		<div className='hidden lg:block'>
			<Search />
		</div>

		<button
			type='button'
			aria-label='Toggle mobile menu'
			onClick={() => setMenuOpen(!menuOpen)}
			className='rounded lg:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50'
		>
			<Burger menuOpen={menuOpen} />
		</button>
	</div>
)

const Burger = ({ menuOpen }: any) => (
	<svg
		className={`transition duration-100 ease h-6 w-6 ${
			menuOpen ? 'transform rotate-90' : ''
		}`}
		viewBox='0 0 20 20'
	>
		<path
			fillRule='evenodd'
			d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
		></path>
	</svg>
)

const Search = () => (
	<div className='relative'>
		<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
			<svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
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
			className='w-full py-2 pl-10 pr-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300'
			placeholder='Search'
		/>
	</div>
)

export default Header
