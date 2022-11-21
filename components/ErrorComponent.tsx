import { ApolloError } from '@apollo/client'
import React from 'react'
import Layout from './Layout'

type Props = {
	error?: ApolloError | Error | null
}

const ErrorComponent = (props: Props) => {
	return (
		<div className='flex flex-col grow justify-center items-center font-serif'>
			<h2> {props.error?.message || 'Sorry, something went wrong.'} </h2>
			<button
				className='bg-m_tertiary hover:bg-m_tertiary_hover text-white font-bold py-2 px-4 m-2 rounded flex gap-2'
				onClick={() => {
					window.location.href = '/'
				}}
			>
				<span className='font-sans'>Go back home</span>
			</button>
		</div>
	)
}

export default ErrorComponent
