import { GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import ReactMarkdown from 'react-markdown'

import Directions from '../../components/Directions'
import Ingredients from '../../components/Ingredients'
import Layout from '../../components/Layout'
import Thumbnail from '../../components/Thumbnail'
import { IRecipe } from '../../types/recipe'

type Props = {
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

const RecipePage: React.FC<Props> = ({ recipe }: Props) => {
	return (
		<Layout pageTitle={recipe.attributes.title}>
			<Head>
				<meta
					name='description'
					content={recipe.attributes.description}
					key='description'
				/>
				<meta
					property='og:description'
					content={recipe.attributes.description}
					key='ogDescription'
				/>
			</Head>

			<article className='prose prose-green'>
				<div className='mb-4'>
					<Thumbnail
						title={recipe.attributes.title}
						src={recipe.attributes.thumbnail}
					/>
				</div>

				<h1>{recipe.attributes.title}</h1>

				<p className='font-bold'>yield: {recipe.attributes.yields}</p>

				<p>{recipe.attributes.description}</p>

				<Ingredients ingredients={recipe.attributes.ingredients} />

				<Directions directions={recipe.attributes.directions} />

				<div className='mt-4'>
					<components.Tips tips={recipe.attributes.tips} />
				</div>

				{/* eslint-disable-next-line react/no-children-prop */}
				<ReactMarkdown children={recipe.attributes.other} />
			</article>
		</Layout>
	)
}

export default RecipePage

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as IParams

	const res = await fetch(`http://localhost:1337/api/recipes/?filters[slug]=${slug}`)

	const json = await res.json()

	const recipe = json.data[0]

	return {
		props: { recipe },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('http://localhost:1337/api/recipes/')

	const json = await res.json()

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
