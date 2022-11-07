import { GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'

import Directions from '../../components/Directions'
import Ingredients from '../../components/Ingredients'
import Layout from '../../components/Layout'
import ImageComp from '../../components/ImageComp'
import { IRecipe } from '../../types/recipe'
import ReactMarkdown from 'react-markdown'
import { Grid } from '@mantine/core'

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

const RecipePage: React.FC<Props> = ({ recipe, errorCode }: Props) => {
	if (errorCode) {
		return (
			<div className='mt-16 flex flex-col items-center'>
				<p>Sorry, something seems to be broken.</p>
				<p>Status - {errorCode}</p>
			</div>
		)
	}
	return (
		<>
			<Head>
				<meta name='description' content={recipe?.attributes.description || errorCode} key='description' />
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
				<article className='md:prose-xl prose-lg xl:container mx-auto'>
					<div className='grid grid-cols-1 xl:grid-cols-2 gap-16 '>
						<div className='h-[66vh]'>
							<ImageComp
								title={recipe.attributes.title!}
								src={recipe.attributes.coverImage?.data?.attributes.url!}
								formats={recipe.attributes.coverImage?.data?.attributes.formats!}
								className='xl:rounded-xl'
							/>
						</div>
						<div>
							<h1 className='px-4'>{recipe.attributes.title}</h1>

							<p className='font-bold px-4'>yield: {recipe.attributes.yields}</p>

							<p className='px-4'>{recipe.attributes.description}</p>
						</div>

						<div className='bg-secondary'>
							<div className='px-4'>
								<Ingredients ingredients={recipe.attributes.ingredients} />
							</div>
						</div>

						<div className='px-4'>
							<Directions directions={recipe.attributes.directions} />
							<components.Tips tips={recipe.attributes.tips} />
						</div>
						<div className='m-16 prose-xl'>
							<ReactMarkdown>{recipe.attributes.other}</ReactMarkdown>
						</div>
					</div>
				</article>
			)}
		</>
	)
}

export default RecipePage

export const getServerSideProps: GetStaticProps = async (context) => {
	const { slug } = context.params as IParams

	const data = await fetch(`${process.env.API_URL}/api/recipes/?filters[slug]=${slug}&populate=*`)

	let errorCode = data.ok ? false : data.status
	let recipe = null
	if (errorCode) {
		console.error(errorCode, data.statusText, 'on', data.url)
	} else {
		const json = await data.json()
		if (json.data.length > 0) {
			recipe = json.data[0]
		} else {
			errorCode = 404
		}
	}
	return {
		props: { errorCode, recipe },
	}
}
