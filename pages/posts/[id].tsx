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

type Props = {
	recipe: GetRecipe
}

// const components = {
// 	Ingredients,
// 	Directions,
// 	Tips: dynamic(() => import('../../components/Tips')),
// }

const RecipePage: React.FC<Props> = ({ recipe }: Props) => {
	console.log(recipe)
	return (
		<>
			<Head>
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

			{(!recipe?.recipe?.data && (
				<div className='mt-16 flex flex-col items-center'>
					<p>Sorry, something seems to be broken.</p>
					<a className='mt-8' href='\'>
						Click here to go to the homepage
					</a>
				</div>
			)) || (
				<article className='md:prose-xl prose-lg xl:container mx-auto'>
					<div className='grid grid-cols-1 xl:grid-cols-2 gap-16 '>
						<div className='h-[66vh]'>
							<ImageComp
								title={recipe?.recipe?.data?.attributes?.title!}
								src={recipe?.recipe?.data?.attributes?.coverImage?.data?.attributes?.url!}
								formats={recipe?.recipe?.data?.attributes?.coverImage?.data?.attributes?.formats!}
								className='xl:rounded-xl'
							/>
						</div>
						<div>
							<h1 className='px-4'>{recipe?.recipe?.data?.attributes?.title}</h1>

							<p className='font-bold px-4'>yield: {recipe?.recipe?.data?.attributes?.yields}</p>

							<p className='px-4'>{recipe?.recipe?.data?.attributes?.description}</p>
						</div>

						<div className='bg-secondary'>
							<div className='px-4'>
								<Ingredients ingredients={recipe?.recipe?.data?.attributes?.ingredients} />
							</div>
						</div>

						<div className='px-4'>
							<Directions directions={recipe?.recipe?.data?.attributes?.directions} />
							<Tips tips={recipe?.recipe?.data?.attributes?.tips} />
						</div>
						<div className='m-16 prose-xl'>
							{recipe?.recipe?.data?.attributes?.other && (
								<ReactMarkdown>{recipe?.recipe?.data?.attributes?.other}</ReactMarkdown>
							)}
						</div>
					</div>
				</article>
			)}
		</>
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
