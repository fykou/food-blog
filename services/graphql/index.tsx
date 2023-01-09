import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

export function MyApolloClient() {
	const uri = process.env.API_URL ? process.env.API_URL + 'graphql' : 'http://0.0.0.0:1337/graphql'

	const apolloClient = new ApolloClient({
		uri: uri,
		cache: new InMemoryCache(),
		ssrMode: typeof window === 'undefined',
	})

	return apolloClient
}

export default function ApolloProviderWrapper({ children }: { children: JSX.Element }): JSX.Element {
	const client = MyApolloClient()

	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
