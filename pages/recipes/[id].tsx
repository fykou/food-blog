import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import Directions from '../../components/Recipe/Directions'
import ImageComp from '../../components/ImageComp'
import ReactMarkdown from 'react-markdown'
import { GraphQLClient } from '../../services/graphql'
import { GET_RECIPE } from '../../services/graphql/queries'
import { GetRecipe } from '../../services/graphql/__generated__/GetRecipe'
import Layout from '../../components/Layout'
import IngredientSection from '../../components/Recipe/IngredientSection'
import ErrorComponent from '../../components/ErrorComponent'
import { ApolloError } from '@apollo/client'

type Props = {
	recipeResponse: RecipeResponse
}

type RecipeResponse = {
	recipeData: GetRecipe
	error?: ApolloError
}

const RecipePage: React.FC<Props> = (props: Props) => {
	if (props.recipeResponse.error != null)
		return (
			<Layout>
				<ErrorComponent error={props.recipeResponse.error} />
			</Layout>
		)

	if (props.recipeResponse.recipeData.recipe?.data == null)
		return (
			<Layout>
				<ErrorComponent error={new Error("Sorry, we couldn't find that recipe.")} />
			</Layout>
		)

	return (
		<Layout>
			<Head>
				<title>{props.recipeResponse?.recipeData.recipe?.data?.attributes?.title} | Emilys Kitchen</title>
				<meta
					name='description'
					content={props.recipeResponse?.recipeData.recipe?.data?.attributes?.description || ''}
					key='description'
				/>
				<meta
					property='og:description'
					content={props.recipeResponse?.recipeData.recipe?.data?.attributes?.description || ''}
					key='ogDescription'
				/>
			</Head>

			<article className='max-w-screen-laptop self-center md:mx-16 md:mt-8 mb-16'>
				<div className='grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.5fr)] grid-flow-row gap-8 w-screen md:px-16'>
					<div className='aspect-[3/4]'>
						<ImageComp
							title={props.recipeResponse?.recipeData.recipe?.data?.attributes?.title!}
							src={
								props.recipeResponse?.recipeData.recipe?.data?.attributes?.coverImage?.data?.attributes
									?.url!
							}
							formats={
								props.recipeResponse?.recipeData.recipe?.data?.attributes?.coverImage?.data?.attributes
									?.formats!
							}
							className='md:rounded-xl'
						/>
					</div>
					<div className='font-serif whitespace-normal px-4 md:px-0'>
						<h1 className='py-4'>{props.recipeResponse?.recipeData.recipe?.data?.attributes?.title}</h1>
						<p className='py-4'>{props.recipeResponse?.recipeData.recipe?.data?.attributes?.description}</p>

						{(props.recipeResponse?.recipeData.recipe?.data?.attributes?.Servings ||
							props.recipeResponse?.recipeData.recipe?.data?.attributes?.servingUnit) && (
							<span className='py-4 font-bold'>
								<p className='py-4'>
									Servings: {props.recipeResponse?.recipeData.recipe?.data?.attributes?.Servings}{' '}
									{props.recipeResponse?.recipeData.recipe?.data?.attributes?.servingUnit}
								</p>
							</span>
						)}
					</div>

					<IngredientSection
						sections={props.recipeResponse?.recipeData.recipe?.data?.attributes?.ingredientSection}
					/>

					<Directions directions={props.recipeResponse?.recipeData.recipe?.data?.attributes?.Directions} />

					{props.recipeResponse?.recipeData.recipe?.data?.attributes?.Extra && (
						<>
							<div />
							<div className='prose max-w-none whitespace-normal text-m_text_dark font-serif w-full px-4 md:px-0'>
								<ReactMarkdown>
									{props.recipeResponse?.recipeData.recipe?.data?.attributes?.Extra}
								</ReactMarkdown>
							</div>
						</>
					)}
				</div>
			</article>
		</Layout>
	)
}

export default RecipePage

interface IParams extends ParsedUrlQuery {
	id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as IParams

	const client = GraphQLClient()
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

	const recipeData: GetRecipe = recipeResponse?.data || null

	return {
		props: {
			recipeResponse: {
				recipeData,
				error,
			},
		},
	}
}
