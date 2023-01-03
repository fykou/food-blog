// pages/index.tsx
import { ApolloError } from '@apollo/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import ErrorComponent from '../components/ErrorComponent'
import Layout from '../components/Layout'
import MainPageSection from '../components/MainPageSection'
import { MyApolloClient } from '../services/graphql'
import { CategoryEntityResponseCollection, RecipeEntityResponseCollection } from '../services/graphql-types'
import { GET_CATEGORIES, GET_RECIPES } from '../services/graphql/queries'

type Props = {
	recipeResponse: RecipeResponse
	categoriesResponse: CategoryResponse
}

type RecipeResponse = {
	recipeData: RecipeEntityResponseCollection
	error?: ApolloError
}

type CategoryResponse = {
	categoryData: CategoryEntityResponseCollection
	error?: ApolloError
}

const Dashboard: React.FC<Props> = (props: Props) => {
	return (
		<Layout>
			<Head>
				<title>Emilys Kitchen</title>
				<meta name='description' content='Home page for Emilys Kitchen' key='description' />
				<meta property='og:description' content='Home page for Emilys Kitchen' key='ogDescription' />
			</Head>
			<div className='flex flex-col mx-auto w-full max-w-screen-laptop justify-center items-center text-m_text_dark font-serif'>
				{props.recipeResponse.error ? (
					<ErrorComponent error={props.recipeResponse.error} />
				) : (
					<MainPageSection previewData={props.recipeResponse.recipeData.data} />
				)}
				{/* {props.categoriesResponse.error ? (
					<ErrorComponent error={props.categoriesResponse.error} />
				) : (
					<MainPageSection previewData={props.categoriesResponse.categoryData.data} />
				)} */}
			</div>
		</Layout>
	)
}

export default Dashboard

export const getServerSideProps: GetStaticProps = async () => {
	const client = MyApolloClient()
	let recipesError: ApolloError | undefined
	let categoryError: ApolloError | undefined
	const recipesResponse = await client
		.query({
			query: GET_RECIPES,
			variables: {
				pagination: {
					limit: 4,
					start: 0,
				},
				sort: 'publishedAt:desc',
			},
		})
		.catch((err) => {
			console.error(err)
			recipesError = JSON.parse(JSON.stringify(err))
		})

	const categoryResponse = await client
		.query({
			query: GET_CATEGORIES,
		})
		.catch((err) => {
			console.error(err)
			categoryError = JSON.parse(JSON.stringify(err))
		})

	const recipeData: RecipeEntityResponseCollection = recipesResponse?.data.recipes || null
	const categoryData: CategoryEntityResponseCollection = categoryResponse?.data.categories || null

	return {
		props: {
			recipeResponse: { recipeData: recipeData, error: recipesError || null },
			categoriesResponse: { categoryData: categoryData, error: categoryError || null },
		},
	}
}
