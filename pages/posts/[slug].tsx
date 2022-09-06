import { GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'

import Directions from '../../components/Directions'
import Ingredients from '../../components/Ingredients'
import Layout from '../../components/Layout'
import ImageComp from '../../components/ImageComp'
import { IRecipe } from '../../types/recipe'

type Props = {
	errorCode: any
	recipe: IRecipe
}

interface IParams extends ParsedUrlQuery {
	slug: string
}

const components = {
	Ingredients,
	Directions,
	Tips: dynamic(() => import('../../components/Tips')),
}

const ReactMarkdown = dynamic(() => import('react-markdown'), {})

const RecipePage: React.FC<Props> = ({ recipe, errorCode }: Props) => {
	return (
		<Layout pageTitle={recipe?.attributes.title || errorCode}>
			<Head>
				<meta
					name='description'
					content={recipe?.attributes.description || errorCode}
					key='description'
				/>
				<meta
					property='og:description'
					content={recipe?.attributes.description || errorCode}
					key='ogDescription'
				/>
			</Head>

			{(errorCode && (
				<div className='mt-16 flex flex-col items-center'>
					<p>Sorry, something seems to be broken.</p>
					<p>Status - {errorCode}</p>
					<a className='mt-8' href='\'>
						Click here to go to the homepage
					</a>
				</div>
			)) || (
				<article className='prose prose-green'>
					<div className='mb-4'>
						<ImageComp
							title={recipe.attributes.title!}
							src={recipe.attributes.coverImage?.data?.attributes.url!}
						/>
					</div>

					<h1 className='px-4'>{recipe.attributes.title}</h1>

					<p className='font-bold px-4'>yield: {recipe.attributes.yields}</p>

					<p className='px-4'>{recipe.attributes.description}</p>

					<div className='bg-secondary'>
						<div className='px-4'>
							<Ingredients ingredients={recipe.attributes.ingredients} />
						</div>
					</div>

					<div className='px-4'>
						<Directions directions={recipe.attributes.directions} />
					</div>

					<div className='px-4'>
						<components.Tips tips={recipe.attributes.tips} />
					</div>
					<div className='px-4'>
						{/* eslint-disable-next-line react/no-children-prop */}
						<ReactMarkdown children={recipe.attributes.other} />
					</div>
				</article>
			)}
		</Layout>
	)
}

export default RecipePage

export const getServerSideProps: GetStaticProps = async (context) => {
	const { slug } = context.params as IParams

	const data = await fetch(
		`${process.env.API_URL}/api/recipes/?filters[slug]=${slug}&populate=*`
	)

	const errorCode = data.ok ? false : data.status
	let recipe = null
	if (errorCode) {
		console.error(errorCode, data.statusText, 'on', data.url)
	} else {
		const json = await data.json()
		recipe = json.data[0]
	}
	return {
		props: { errorCode, recipe },
	}
}

export const getServerSidePaths: GetStaticPaths = async ({ res }: any) => {
	const data = await fetch(`${process.env.API_URL}/api/recipes?populate=*`)

	const errorCode = data.ok ? false : data.status

	if (errorCode) {
		res.status = errorCode
		console.error(errorCode, data.statusText, 'on', data.url)
	}

	const json = await data.json()

	const recipes = json.data

	const paths = recipes.map((recipe: IRecipe) => ({
		params: {
			slug: recipe.attributes.slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}
