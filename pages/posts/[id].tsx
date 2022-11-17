import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import Directions from '../../components/Directions'
import Ingredients from '../../components/Ingredients'
import ImageComp from '../../components/ImageComp'
import ReactMarkdown from 'react-markdown'
import Tips from '../../components/Tips'
import { GraphQLClient } from '../../services/graphql'
import { GET_RECIPE } from '../../services/graphql/queries'
import { GetRecipe } from '../../services/graphql/__generated__/GetRecipe'
import Layout from '../../components/Layout'
import IngredientSection from '../../components/IngredientSection'

type Props = {
	recipe: GetRecipe
}

// const components = {
// 	Ingredients,
// 	Directions,
// 	Tips: dynamic(() => import('../../components/Tips')),
// }

const RecipePage: React.FC<Props> = ({ recipe }: Props) => {
	return (
		<Layout>
			<Head>
				<title>{recipe.recipe?.data?.attributes?.title} | Emilys Kitchen</title>
				<meta
					name='description'
					content={recipe?.recipe?.data?.attributes?.description || ''}
					key='description'
				/>
				<meta
					property='og:description'
					content={recipe?.recipe?.data?.attributes?.description || ''}
					key='ogDescription'
				/>
			</Head>

			<article className='max-w-screen-laptop self-center md:mx-16 md:mt-8 mb-16'>
				<div className='grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.5fr)] grid-flow-row gap-8'>
					<div className='aspect-[3/4]'>
						<ImageComp
							title={recipe?.recipe?.data?.attributes?.title!}
							src={recipe?.recipe?.data?.attributes?.coverImage?.data?.attributes?.url!}
							formats={recipe?.recipe?.data?.attributes?.coverImage?.data?.attributes?.formats!}
							className='md:rounded-xl'
						/>
					</div>
					<div className='font-serif whitespace-normal px-4 md:px-0'>
						<h1 className='py-4'>{recipe?.recipe?.data?.attributes?.title}</h1>

						<p className='py-4'>{recipe?.recipe?.data?.attributes?.description}</p>

						<span className='py-4 font-bold'>
							{recipe?.recipe?.data?.attributes?.Servings && (
								<span className='py-4'>Servings: {recipe?.recipe?.data?.attributes?.Servings}</span>
							)}
						</span>
					</div>

					<div className='font-serif bg-m_secondary bg-opacity-25 rounded-lg md:sticky top-4'>
						<div className='px-4'>
							<IngredientSection sections={recipe?.recipe?.data?.attributes?.ingredientSection} />
						</div>
					</div>

					<div className='font-serif px-4 md:px-0'>
						<Directions directions={recipe?.recipe?.data?.attributes?.Directions} />
					</div>
					<div></div>
					<div className='prose max-w-none whitespace-normal text-m_text_dark font-serif w-full px-4 md:px-0'>
						{recipe?.recipe?.data?.attributes?.Extra && (
							<ReactMarkdown>{recipe?.recipe?.data?.attributes?.Extra}</ReactMarkdown>
						)}
					</div>
				</div>
			</article>
		</Layout>
	)
}

export default RecipePage

interface IParams extends ParsedUrlQuery {
	id: string
}

export const getServerSideProps: GetStaticProps = async (context) => {
	const { id } = context.params as IParams

	const client = GraphQLClient()
	const response = await client.query({
		query: GET_RECIPE,
		variables: {
			id: id,
		},
	})

	const recipe: GetRecipe = response?.data

	return { props: { recipe } }
}
