// components/Layout.tsx
import Meta from '../components/Meta'
import Footer from './Footer'
import Navigation from './Navigation'

type Props = {
	children: React.ReactNode
	pageTitle?: string
}

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
	return (
		<>
			<Meta pageTitle={pageTitle} />
			<main className='min-h-screen flex flex-col whitespace-nowrap'>
				<Navigation className='bg-m_primary' />
				{children}
				<Footer className='bg-m_primary' />
			</main>
		</>
	)
}

export default Layout
