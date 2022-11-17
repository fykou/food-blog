import Link from 'next/link'
import React from 'react'
import ImageComp from './ImageComp'
import { GetRecipes } from '../services/graphql/__generated__/GetRecipes'
import RecipeVerticalPreview from './RecipeVerticalPreview'

type Props = {
	recipeData: GetRecipes
	className?: string
}

const RecipePreview: React.FC<Props> = ({ recipeData, className }: Props) => {
	return (
		<section className={`sm:px-8 flex flex-col items-center ${className}`}>
			<h2 className='bg-m_primary px-4 py-2 m-8 rounded-md'>Latest Recipes</h2>
			<div className='w-full flex flex-row flex-wrap justify-evenly gap-4 h-96 overflow-hidden'>
				{recipeData &&
					recipeData.recipes?.data.map((recipe) => (
						<RecipeVerticalPreview key={recipe.id} recipe={recipe} showTags />
					))}
			</div>
			<Link href={`/recipes`}>
				<a className='flex flex-row justify-center items-center flex-nowrap self-end font-semibold'>
					See more
					<svg
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='w-4 h-4 ml-2'
						viewBox='0 0 24 24'
					>
						<path d='M5 12h14M12 5l7 7-7 7'></path>
					</svg>
				</a>
			</Link>
		</section>
	)
}

export default RecipePreview
