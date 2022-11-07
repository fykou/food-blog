// pages/index.tsx
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import RecipePreview from '../components/RecipePreview'
import { IRecipe } from '../types/recipe'
import { SITE_NAME } from '../utils/constants'

type Props = {
	errorCode: any
	recipes: IRecipe[]
}

const Dashboard: React.FC<Props> = ({ recipes, errorCode }: Props) => {
	return (
		<>
			<Head>
				<title>{SITE_NAME}</title>
			</Head>
			<div className='flex flex-col justify-center items-center text-m_text_dark font-serif'>
				{(errorCode && (
					<div className='mt-16 flex flex-col items-center'>
						<p>Sorry, something seems to be broken.</p>
						<p>Status - {errorCode}</p>
					</div>
				)) || <RecipePreview recipes={recipes}></RecipePreview>}
			</div>
		</>
	)
}

export default Dashboard

export const getServerSideProps: GetStaticProps = async () => {
	const data = await fetch(`${process.env.API_URL}/api/recipes?populate=*`)

	const errorCode = data.ok ? false : data.status

	if (errorCode) {
		console.error(errorCode, data.statusText, 'on', data.url)
	}

	const json = await data.json()

	const recipes = json.data

	return { props: { errorCode, recipes } }
}
