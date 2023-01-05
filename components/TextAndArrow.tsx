import React from 'react'

interface Props {
	text: string
	className?: string
}

const TextAndArrow = (props: Props) => {
	return (
		<div className={`inline-flex grow-0 items-center ${props.className}`}>
			<span>{props.text}</span>
			<svg
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-4 h-4 ml-2'
				viewBox='0 0 24 24'
			>
				<path d='M5 12h14M12 5l7 7-7 7'></path>
			</svg>
		</div>
	)
}

export default TextAndArrow
