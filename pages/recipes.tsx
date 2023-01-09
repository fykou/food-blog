import { ApolloError } from '@apollo/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { Card } from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'
import PageLayout from '../components/PageLayout'
import { MyApolloClient } from '../services/graphql'
import { RecipeEntityResponseCollection } from '../services/graphql-types'
import { GET_RECIPES } from '../services/graphql/queries'

type Props = {
	recipeResponse: RecipeResponse
}

type RecipeResponse = {
	recipeData: RecipeEntityResponseCollection
	error?: ApolloError
}

const RecipesPage = (props: Props) => {
	if (props.recipeResponse.error != null)
		return (
			<PageLayout>
				<ErrorComponent error={props.recipeResponse.error} />
			</PageLayout>
		)
	return (
		<PageLayout>
			<Head>
				<title>Recipes | Emilys Kitchen</title>
				<meta name='description' content='Recipe page for Emilys Kitchen' key='description' />
				<meta property='og:description' content='Recipe page for Emilys Kitchen' key='ogDescription' />
			</Head>
			<div className='grid gap-2 grid-cols-[repeat(auto-fill,16rem)] max-w-screen-laptop justify-around w-full self-center p-8 text-m_text_dark font-serif '>
				{props.recipeResponse.recipeData.data?.map((recipe) => {
					if (recipe == null) return null
					if (recipe.attributes == null) return null
					if (recipe.id == null) return null
					return (
						<Card
							key={recipe.id}
							id={recipe.id}
							attributes={recipe.attributes}
							title
							tagCollection={recipe.attributes.tags?.data}
							imageQuality={{ small: true }}
							className='w-64 h-[25.25rem]'
						/>
					)
				})}
			</div>
		</PageLayout>
	)
}
export default RecipesPage

interface IParams extends ParsedUrlQuery {
	category: string
	tag: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { category } = context.query as IParams
	const { tag } = context.query as IParams

	const categoryFilter = category ? { category: { title: { eq: `${category}` } } } : {}
	const tagFilter = tag ? { tags: { tag: { eq: `${tag}` } } } : {}
	const filter = { ...categoryFilter, ...tagFilter }

	const client = MyApolloClient()
	let error: ApolloError | null = null
	const recipeResponse = await client
		.query({
			query: GET_RECIPES,
			variables: {
				pagination: {
					limit: 1000,
					start: 0,
				},
				filters: filter,
			},
		})
		.catch((err) => {
			error = JSON.parse(JSON.stringify(err))
		})

	const recipeData: RecipeEntityResponseCollection = recipeResponse?.data.recipes || null

	return {
		props: {
			recipeResponse: {
				recipeData,
				error,
			},
		},
	}
}
