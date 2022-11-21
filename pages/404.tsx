import React from 'react'
import ErrorComponent from '../components/ErrorComponent'
import Layout from '../components/Layout'

type Props = {}

const FourOhFour = (props: Props) => {
	return (
		<Layout>
			<ErrorComponent error={new Error("Sorry, we could not find the page you're looking for.")} />
		</Layout>
	)
}

export default FourOhFour
