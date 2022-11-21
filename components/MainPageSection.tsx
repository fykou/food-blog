import Link from 'next/link'
import React from 'react'
import ImageComp from './ImageComp'
import { GetRecipes } from '../services/graphql/__generated__/GetRecipes'
import RecipeVerticalPreview from './RecipeVerticalPreview'
import { GetCategories } from '../services/graphql/__generated__/GetCategories'
import typeGuard from '../utils/typeGuard'

type Props = {
	previewData: GetRecipes | GetCategories
	className?: string
}

const MainPageSection: React.FC<Props> = (props: Props) => {
	return (
		<section className={`sm:px-8 w-full flex flex-col items-center ${props.className}`}>
			<h2 className='bg-m_primary px-4 py-2 m-8 rounded-md'>Latest Recipes</h2>
			<div className='w-full flex flex-row flex-wrap justify-evenly gap-4 h-96 overflow-hidden'>
				{props.previewData &&
					typeGuard<GetRecipes>(props.previewData, 'recipes') &&
					props.previewData.recipes?.data.map((recipe) => (
						<RecipeVerticalPreview
							key={recipe.id}
							recipe={recipe}
							href={`/recipes/${recipe.id}`}
							showTags
						/>
					))}

				{props.previewData &&
					typeGuard<GetCategories>(props.previewData, 'categories') &&
					props.previewData.categories?.data.map((category) => (
						<RecipeVerticalPreview
							key={category.id}
							recipe={category}
							href={`/recipes?category=${category.attributes?.title}`}
						/>
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

export default MainPageSection
