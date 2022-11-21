import { ApolloError } from '@apollo/client'
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import ErrorComponent from '../components/ErrorComponent'
import Layout from '../components/Layout'
import RecipeGrid from '../components/RecipeGrid'
import { GraphQLClient } from '../services/graphql'
import { GET_RECIPES } from '../services/graphql/queries'
import { GetRecipes } from '../services/graphql/__generated__/GetRecipes'

type Props = {
	recipeResponse: RecipeResponse
}

type RecipeResponse = {
	recipeData: GetRecipes
	error?: ApolloError
}

const RecipesPage = (props: Props) => {
	if (props.recipeResponse.error != null)
		return (
			<Layout>
				<ErrorComponent error={props.recipeResponse.error} />
			</Layout>
		)
	return (
		<Layout>
			<Head>
				<title>Recipes | Emilys Kitchen</title>
				<meta name='description' content='Recipe page for Emilys Kitchen' key='description' />
				<meta property='og:description' content='Recipe page for Emilys Kitchen' key='ogDescription' />
			</Head>
			<div className='flex flex-col justify-center items-center text-m_text_dark font-serif'>
				<RecipeGrid props={props.recipeResponse.recipeData} />
			</div>
		</Layout>
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

	console.log(filter)

	const client = GraphQLClient()
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
			console.log(err)
			error = JSON.parse(JSON.stringify(err))
		})

	const recipeData: GetRecipes = recipeResponse?.data || null

	return {
		props: {
			recipeResponse: {
				recipeData,
				error,
			},
		},
	}
}
