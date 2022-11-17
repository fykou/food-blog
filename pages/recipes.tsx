import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import RecipeGrid from '../components/RecipeGrid'
import { GraphQLClient } from '../services/graphql'
import { GET_RECIPES } from '../services/graphql/queries'
import { GetRecipes } from '../services/graphql/__generated__/GetRecipes'

type Props = {
	recipes: GetRecipes
}

const RecipesPage = ({ recipes }: Props) => {
	return (
		<Layout>
			<Head>
				<title>Recipes | Emilys Kitchen</title>
				<meta name='description' content='Recipe page for Emilys Kitchen' key='description' />
				<meta property='og:description' content='Recipe page for Emilys Kitchen' key='ogDescription' />
			</Head>
			<div className='flex flex-col justify-center items-center text-m_text_dark font-serif'>
				<RecipeGrid props={recipes} />
			</div>
		</Layout>
	)
}

export default RecipesPage

export const getServerSideProps: GetStaticProps = async () => {
	const client = GraphQLClient()
	const data = await client.query({
		query: GET_RECIPES,
		variables: {
			pagination: {
				limit: 1000,
				start: 0,
			},
		},
	})

	const recipes: GetRecipes = await data?.data

	return { props: { recipes } }
}
