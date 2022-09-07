// pages/index.tsx
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import RecipeGrid from '../components/RecipeGrid'
import { IRecipe } from '../types/recipe'
import { SITE_NAME } from '../utils/constants'

type Props = {
	errorCode: any
	recipes: IRecipe[]
}

const Dashboard: React.FC<Props> = ({ recipes, errorCode }: Props) => {
	return (
		<>
			<Layout>
				<Head>
					<title>{SITE_NAME}</title>
				</Head>
				{(errorCode && (
					<div className='mt-16 flex flex-col items-center'>
						<p>Sorry, something seems to be broken.</p>
						<p>Status - {errorCode}</p>
					</div>
				)) || <RecipeGrid recipes={recipes}></RecipeGrid>}
			</Layout>
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
