// components/Layout.tsx
import Meta from '../components/Meta'
import Footer from './Footer'
import Header from './Navigation'

type Props = {
	children: React.ReactNode
	pageTitle?: string
}

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
	return (
		<>
			<Meta pageTitle={pageTitle} />
			<Header />
			<main className='flex flex-col items-center pb-8'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
