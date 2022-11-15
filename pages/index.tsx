// pages/index.tsx
import { GetStaticProps } from 'next'
import Head from 'next/head'
import CategoryPreview from '../components/CategoryPreview'
import RecipePreview from '../components/RecipePreview'
import { GraphQLClient } from '../services/graphql'
import { GET_RECIPES } from '../services/graphql/queries'
import { GetRecipes } from '../services/graphql/__generated__/GetRecipes'
import { SITE_NAME } from '../utils/constants'

type Props = {
	recipes: GetRecipes
}

const Dashboard: React.FC<Props> = ({ recipes }: Props) => {
	return (
		<>
			<Head>
				<title>{SITE_NAME}</title>
			</Head>
			<div className='flex flex-col justify-center items-center text-m_text_dark font-serif'>
				<RecipePreview props={recipes}></RecipePreview>
				<CategoryPreview props={recipes}></CategoryPreview>
			</div>
		</>
	)
}

export default Dashboard

export const getServerSideProps: GetStaticProps = async () => {
	const client = GraphQLClient()
	const response = await client.query({
		query: GET_RECIPES,
		variables: {
			pagination: {
				limit: 4,
				start: 0,
			},
			sort: 'publishedAt:desc',
		},
	})

	const recipes: GetRecipes = response?.data

	return { props: { recipes } }
}
