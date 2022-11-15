// pages/index.tsx
import { GetStaticProps } from 'next'
import Head from 'next/head'
import CategoryPreview from '../components/CategoryPreview'
import RecipePreview from '../components/RecipePreview'
import { GraphQLClient } from '../services/graphql'
import { GET_CATEGORIES, GET_RECIPES } from '../services/graphql/queries'
import { GetCategories } from '../services/graphql/__generated__/GetCategories'
import { GetRecipes } from '../services/graphql/__generated__/GetRecipes'
import { SITE_NAME } from '../utils/constants'

type Props = {
	latestRecipes: GetRecipes
}

const Dashboard: React.FC<Props> = ({ latestRecipes }: Props) => {
	return (
		<>
			<Head>
				<title>{SITE_NAME}</title>
			</Head>
			<div className='flex flex-col justify-center items-center text-m_text_dark font-serif'>
				<RecipePreview props={latestRecipes}></RecipePreview>
				{/* <CategoryPreview props={latestRecipes}></CategoryPreview> */}
			</div>
		</>
	)
}

export default Dashboard

export const getServerSideProps: GetStaticProps = async () => {
	const client = GraphQLClient()
	const latestRecipesData = await client.query({
		query: GET_RECIPES,
		variables: {
			pagination: {
				limit: 4,
				start: 0,
			},
			sort: 'publishedAt:desc',
		},
	})

	const latestRecipes: GetRecipes = latestRecipesData?.data

	return { props: { latestRecipes } }
}
