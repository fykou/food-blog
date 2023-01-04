import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import Directions from '../../components/Recipe/Directions'
import ImageComp from '../../components/ImageComp'
import ReactMarkdown from 'react-markdown'
import { MyApolloClient } from '../../services/graphql'
import { GET_RECIPE } from '../../services/graphql/queries'
import PageLayout from '../../components/PageLayout'
import ErrorComponent from '../../components/ErrorComponent'
import { ApolloError } from '@apollo/client'
import { RecipeEntityResponse } from '../../services/graphql-types'
import Ingredients from '../../components/Recipe/Ingredients'

type Props = {
	recipeResponse: RecipeResponse
}

type RecipeResponse = {
	recipeData: RecipeEntityResponse
	error?: ApolloError
}

const RecipePage: React.FC<Props> = (props: Props) => {
	if (props.recipeResponse.error != null)
		return (
			<PageLayout>
				<ErrorComponent error={props.recipeResponse.error} />
			</PageLayout>
		)

	if (props.recipeResponse.recipeData.data == null)
		return (
			<PageLayout>
				<ErrorComponent error={new Error("Sorry, we couldn't find that recipe.")} />
			</PageLayout>
		)

	return (
		<PageLayout>
			<Head>
				<title>{props.recipeResponse?.recipeData?.data?.attributes?.name} | Emilys Kitchen</title>
				<meta
					name='description'
					content={props.recipeResponse?.recipeData.data?.attributes?.description || ''}
					key='description'
				/>
				<meta
					property='og:description'
					content={props.recipeResponse?.recipeData.data?.attributes?.description || ''}
					key='ogDescription'
				/>
			</Head>

			<article className='max-w-screen-laptop self-center md:mx-16 md:mt-8 mb-16'>
				<div className='grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.5fr)] grid-flow-row gap-8 w-screen md:px-16'>
					<div className='aspect-[3/4]'>
						<ImageComp
							title={props.recipeResponse?.recipeData.data?.attributes?.name!}
							src={props.recipeResponse?.recipeData.data?.attributes?.coverImage?.data?.attributes?.url!}
							format={
								props.recipeResponse?.recipeData.data?.attributes?.coverImage?.data?.attributes
									?.formats!
							}
							className='md:rounded-xl'
						/>
					</div>
					<div className='font-serif whitespace-normal px-4 md:px-0'>
						<h1 className='py-4'>{props.recipeResponse?.recipeData.data?.attributes?.name}</h1>
						<p className='py-4'>{props.recipeResponse?.recipeData.data?.attributes?.description}</p>

						{(props.recipeResponse?.recipeData.data?.attributes?.servings ||
							props.recipeResponse?.recipeData.data?.attributes?.servingUnit) && (
							<span className='py-4 font-bold'>
								<p className='py-4'>
									Servings: {props.recipeResponse?.recipeData.data?.attributes?.servings}{' '}
									{props.recipeResponse?.recipeData.data?.attributes?.servingUnit}
								</p>
							</span>
						)}
					</div>

					<Ingredients
						ingredientsSection={props.recipeResponse?.recipeData.data?.attributes?.ingredientsSection}
					/>

					<Directions
						directionSection={props.recipeResponse?.recipeData.data?.attributes?.directionsSection}
					/>

					{props.recipeResponse?.recipeData.data?.attributes?.extra && (
						<>
							<div />
							<div className='prose max-w-none whitespace-normal text-m_text_dark font-serif w-full px-4 md:px-0'>
								<ReactMarkdown>
									{props.recipeResponse?.recipeData.data?.attributes?.extra}
								</ReactMarkdown>
							</div>
						</>
					)}
				</div>
			</article>
		</PageLayout>
	)
}

export default RecipePage

interface IParams extends ParsedUrlQuery {
	id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as IParams

	const client = MyApolloClient()
	let error: ApolloError | null = null
	const recipeResponse = await client
		.query({
			query: GET_RECIPE,
			variables: {
				id: id,
			},
		})
		.catch((err) => {
			console.error(err)
			error = JSON.parse(JSON.stringify(err))
		})

	const recipeData: RecipeEntityResponse = recipeResponse?.data.recipe || null

	return {
		props: {
			recipeResponse: {
				recipeData,
				error,
			},
		},
	}
}
