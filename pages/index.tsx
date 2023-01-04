// pages/index.tsx
import { ApolloError } from '@apollo/client'
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ErrorComponent from '../components/ErrorComponent'
import ImageComp from '../components/ImageComp'
import PageLayout from '../components/PageLayout'
import { MyApolloClient } from '../services/graphql'
import { CategoryEntityResponseCollection, RecipeEntityResponseCollection } from '../services/graphql-types'
import { GET_CATEGORIES, GET_RECIPES } from '../services/graphql/queries'

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
					<section className='flex flex-col w-full text-center px-4'>
						<h3 className='bg-m_primary px-4 py-2 m-8 rounded-md'>Latest Recipes</h3>
						<div className='flex flex-row flex-wrap h-96 justify-evenly gap-4 overflow-hidden'>
							{props.recipeResponse.recipeData.data &&
								props.recipeResponse.recipeData.data.map((entity) => {
									const imageData = entity.attributes?.coverImage?.data?.attributes
									if (!imageData) return null
									return (
										<Link key={entity.id} className='w-72 h-full' href={`/recipes/${entity.id}`}>
											<ImageComp
												src={imageData.url}
												alt={imageData.alternativeText || imageData.name}
												className='rounded-md'
												formatData={imageData.formats}
												format={{ large: true }}
											/>
										</Link>
									)
								})}
						</div>
						<Link
							href={`/recipes`}
							passHref
							className='flex flex-row p-2 justify-center items-center flex-nowrap self-end font-semibold'
						>
							<span>See more</span>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 ml-2'
								viewBox='0 0 24 24'
							>
								<path d='M5 12h14M12 5l7 7-7 7'></path>
							</svg>
						</Link>
					</section>
				)}
				{/* {props.categoriesResponse.error ? (
					<ErrorComponent error={props.categoriesResponse.error} />
				) : (
					<MainPageSection previewData={props.categoriesResponse.categoryData.data} />
				)} */}
			</div>
		</PageLayout>
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
