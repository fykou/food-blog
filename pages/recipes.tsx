import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import RecipeGrid from '../components/RecipeGrid'
import { IRecipe } from '../types/recipe'

type Props = {
	errorCode: any
	recipes: IRecipe[]
}

const RecipesPage = ({ recipes, errorCode }: Props) => {
	return (
		<Layout>
			<div className='flex flex-col justify-center items-center text-m_text_dark font-serif'>
				{(errorCode && (
					<div className='mt-16 flex flex-col items-center'>
						<p>Sorry, something seems to be broken.</p>
						<p>Status - {errorCode}</p>
					</div>
				)) || <RecipeGrid recipes={recipes}></RecipeGrid>}
			</div>
		</Layout>
	)
}

export default RecipesPage

export const getServerSideProps: GetStaticProps = async () => {
	const data = await fetch(`${process.env.API_URL}/api/recipes?populate=*`)

	const errorCode = data.ok ? false : data.status

	if (errorCode) {
		console.error(errorCode, data.statusText, 'on', data.url)
	}

	const json = await data.json()

	const recipes = json.data

	return { props: { errorCode, recipes } }
}
