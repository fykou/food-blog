// pages/index.tsx
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Recipe from '../components/Recipies'
import { IRecipe } from '../types/recipe'
import { SITE_NAME } from '../utils/constants'

type Props = {
	recipes: IRecipe[]
}

const Home: React.FC<Props> = ({ recipes }: Props) => {
	return (
		<>
			<Layout>
				<Head>
					<title>{SITE_NAME}</title>
				</Head>

				<Recipe recipes={recipes}></Recipe>
			</Layout>
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${process.env.API_URL}/recipes/`)

	const json = await res.json()

	console.log(json.data)

	const recipes = json.data

	return { props: { recipes } }
}
