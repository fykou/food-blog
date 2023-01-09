import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { SITE_NAME } from '../utils/constants'
import SearchField from './SearchField'

type Props = {
	className?: string
}

const MenuItems: any = {
	home: ['Home', '/'],
	about: ['Recipes', '/recipes'],
	contact: ['About', '/about'],
}

const navLinks = Object.keys(MenuItems).map((key) => (
	<Link href={MenuItems[key][1]} key={key} className='w-full hover:text-m_text_dark_hover'>
		{MenuItems[key][0]}
	</Link>
))

const Navigation: React.FC<Props> = ({ className }: Props) => {
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
			/**
			 * Alert if width is more than 768px
			 */
			function handleWidth() {
				if (window.innerWidth > 768) {
					setMenuOpen(false)
				}
			}

			// Bind the event listener
			document.addEventListener('mousedown', handleClickOutside)
			window.addEventListener('resize', handleWidth)
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('mousedown', handleClickOutside)
				window.removeEventListener('resize', handleWidth)
			}
		}, [ref])
	}

	const [menuOpen, setMenuOpen] = useState(false)
	const dropdownRef = useRef(null)
	useOutsideAlerter(dropdownRef)

	return (
		<div ref={dropdownRef} className={`flex flex-col justify-center items-center ${className}`}>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</div>
	)
}

const Navbar = ({ menuOpen, setMenuOpen }: any) => (
	<>
		<div className='w-full max-w-screen-laptop text-center flex items-center justify-between md:px-16 px-4 py-4 text-m_dark font-serif'>
			<nav className='basis-0 grow text-start hidden md:block space-x-6 font-semibold'>{navLinks}</nav>

			<div className='basis-0 grow'>
				<Link href='/' passHref className='font-extrabold hover:text-m_text_dark_hover'>
					<h2>{SITE_NAME}</h2>
				</Link>
			</div>

			<div className='basis-0 flex-grow hidden md:block'>
				<div className='ml-16'>{/* <SearchField /> */}</div>
			</div>

			<BurgerButton toggleState={menuOpen} onClick={setMenuOpen} />
		</div>
		{menuOpen && (
			<div className='w-full'>
				<nav className='md:hidden w-full border-t border-opacity-20 border-black p-4 flex flex-col space-y-3 text-center font-semibold absolute bg-m_primary shadow-lg z-10'>
					{navLinks}
					{/* <div className='w-full'>
                        <Search />
                    </div> */}
				</nav>
			</div>
		)}
	</>
)

const BurgerButton = ({ toggleState, onClick }: any) => (
	<button
		type='button'
		aria-label='Toggle mobile menu'
		onClick={() => onClick(() => !toggleState)}
		className='rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50'
	>
		<svg
			className={`transition duration-100 ease h-6 w-6 ${toggleState ? 'transform rotate-90' : ''}`}
			viewBox='0 0 20 20'
		>
			<path
				fillRule='evenodd'
				d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
			></path>
		</svg>
	</button>
)

export default Navigation
