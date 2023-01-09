import React from 'react'
import { ORGINIZATION, SITE_NAME, INSTAGRAM_USERNAME } from '../utils/constants'
import Link from 'next/link'

type Props = {
    className?: string
}

const Footer: React.FC<Props> = ({ className }: Props) => {
    return (
        <footer className={`flex w-screen justify-center ${className}`}>
            <div className='w-full min-h-[5rem] max-w-screen-laptop flex flex-col sm:flex-row items-center justify-between px-16 py-4 text-m_dark font-serif'>
                <a className='flex items-center'>
                    <h3>{SITE_NAME}</h3>
                </a>

                <p className='sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 text-xs'>
                    © {new Date().getFullYear()} {ORGINIZATION}
                </p>

                <span className='flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                    <Link href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`} passHref target={'_blank'}>
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                        >
                            <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                            <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' />
                        </svg>
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer
