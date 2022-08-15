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
			<div className='px-4'>
				<main className='flex flex-col items-center pt-4 pb-12'>
					{children}
				</main>
			</div>
			<Footer />
		</>
	)
}

export default Layout
