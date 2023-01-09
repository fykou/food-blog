// pages/index.tsx
import { ApolloError } from '@apollo/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ErrorComponent from '../components/ErrorComponent'
import PageLayout from '../components/PageLayout'
import { Card } from '../components/Card'
import { MyApolloClient } from '../services/graphql'
import { CategoryEntityResponseCollection, RecipeEntityResponseCollection } from '../services/graphql-types'
import { GET_CATEGORIES, GET_RECIPES } from '../services/graphql/queries'
import TextAndArrow from '../components/TextAndArrow'

interface Props {
	recipeResponse: RecipeResponse
	categoriesResponse: CategoryResponse
}

interface RecipeResponse {
	recipeData: RecipeEntityResponseCollection
	error?: ApolloError
}

interface CategoryResponse {
	categoryData: CategoryEntityResponseCollection
	error?: ApolloError
}

const Dashboard: React.FC<Props> = (props: Props) => {
	return (
		<PageLayout>
			<Head>
				<title>Emilys Kitchen</title>
			</Head>
			<div className='flex flex-col mx-auto w-full max-w-screen-laptop justify-center items-center text-m_text_dark font-serif'>
				{props.recipeResponse.error ? (
					<ErrorComponent error={props.recipeResponse.error} />
				) : (
					<CardSection title='Latest Recipes' href='/recipes'>
						<>
							{props.recipeResponse.recipeData.data &&
								props.recipeResponse.recipeData.data.map((recipe) => {
									if (!recipe) return null
									if (!recipe.attributes) return null
									if (!recipe.id) return null
									return (
										<Card
											key={recipe.id}
											id={recipe.id}
											attributes={recipe.attributes}
											title
											imageQuality={{ medium: true }}
											className='w-64 h-96'
										/>
									)
								})}
						</>
					</CardSection>
				)}
				{props.categoriesResponse.error ? (
					<ErrorComponent error={props.categoriesResponse.error} />
				) : (
					<CardSection title='Categories' href='/recipes'>
						<>
							{props.categoriesResponse?.categoryData?.data.map((entity) => {
								if (!entity) return null
								if (!entity.attributes) return null
								if (!entity.id) return null
								return (
									<Card
										key={entity.id}
										id={entity.id}
										attributes={entity.attributes}
										title
										imageQuality={{ small: true }}
										className='w-64 h-96'
									/>
								)
							})}
						</>
					</CardSection>
				)}
			</div>
		</PageLayout>
	)
}

const CardSection = ({ children, title, href }: { children: JSX.Element; title: string; href: string }) => {
	return (
		<section className='flex flex-col w-full text-center px-4'>
			<h3 className='bg-m_primary px-4 py-2 m-8 rounded-md'>{title}</h3>
			<div className='flex flex-row flex-wrap h-96 justify-around gap-2 mx-8 overflow-hidden'>{children}</div>
			<Link
				href={href}
				passHref
				className='flex flex-row p-2 mr-8 justify-center items-center flex-nowrap self-end font-semibold'
			>
				<TextAndArrow text='See more' />
			</Link>
		</section>
	)
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
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
