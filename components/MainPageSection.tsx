import Link from 'next/link'
import React from 'react'
import ImageComp from './ImageComp'
import RecipeVerticalPreview from './RecipeVerticalPreview'
import typeGuard from '../utils/typeGuard'
import { Category, CategoryEntity, Recipe, RecipeEntity } from '../services/graphql-types'

type Props = {
	previewData: Array<RecipeEntity> | undefined
	className?: string
}

const MainPageSection: React.FC<Props> = (props: Props) => {
	return (
		<section className={`sm:px-8 w-full flex flex-col items-center ${props.className}`}>
			<h2 className='bg-m_primary px-4 py-2 m-8 rounded-md'>Latest Recipes</h2>
			<div className='w-full flex flex-row flex-wrap justify-evenly gap-4 h-96 overflow-hidden'>
				{props.previewData &&
					props.previewData.map((entity) => {
						return (
							<RecipeVerticalPreview
								key={entity.id}
								recipe={entity.attributes}
								href={`/recipes/${entity.id}`}
								showTags
							/>
						)
					})}
			</div>
			<Link
				href={`/recipes`}
				passHref
				className='flex flex-row justify-center items-center flex-nowrap self-end font-semibold'
			>
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
			</Link>
		</section>
	)
}

export default MainPageSection
