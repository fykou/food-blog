import type { AppProps } from 'next/app'
import ApolloProviderWrapper from '../services/graphql'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	const AnyComponent = Component as any
	return (
		<ApolloProviderWrapper>
			<AnyComponent {...pageProps} />
		</ApolloProviderWrapper>
	)
}

export default MyApp
