import Meta from './Meta'
import Footer from './Footer'
import Navigation from './Navigation'

type Props = {
	children: React.ReactNode
	pageTitle?: string
}

const PageLayout: React.FC<Props> = ({ children, pageTitle }: Props) => {
	return (
		<>
			<Meta pageTitle={pageTitle} />
			<main className='min-h-screen flex flex-col whitespace-nowrap overflow-clip'>
				<Navigation className='bg-m_primary' />
				<div className='flex flex-col grow'>{children}</div>
				<Footer className='bg-m_primary bottom-0' />
			</main>
		</>
	)
}

export default PageLayout
