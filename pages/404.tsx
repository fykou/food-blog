import React from 'react'
import ErrorComponent from '../components/ErrorComponent'
import PageLayout from '../components/PageLayout'

type Props = {}

const FourOhFour = (props: Props) => {
	return (
		<PageLayout>
			<ErrorComponent error={new Error("Sorry, we could not find the page you're looking for.")} />
		</PageLayout>
	)
}

export default FourOhFour
