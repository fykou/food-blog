// components/Layout.tsx
import { MantineProvider } from '@mantine/core'
import Meta from '../components/Meta'
import Footer from './Footer'
import Navigation from './Navigation'

type Props = {
	children: React.ReactNode
	pageTitle?: string
}

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Meta pageTitle={pageTitle} />
			<main className='min-h-screen flex flex-col overflow-x-hidden'>
				<Navigation />

				{children}
				<Footer />
			</main>
		</MantineProvider>
	)
}

export default Layout
