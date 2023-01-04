import { ApolloError } from '@apollo/client'
import React from 'react'
import PageLayout from './PageLayout'

type Props = {
	error?: ApolloError | Error | null
}

const ErrorComponent = (props: Props) => {
	return (
		<div className='flex flex-col grow justify-center items-center font-serif'>
			<p> {props.error?.message || 'Sorry, something went wrong.'} </p>
		</div>
	)
}

export default ErrorComponent
