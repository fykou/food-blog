import Link from 'next/link'
import React from 'react'
import { GetRecipes_recipes_data } from '../services/graphql/__generated__/GetRecipes'
import ImageComp from './ImageComp'

type Props = {
	recipe: GetRecipes_recipes_data
	className?: string
	showTags?: boolean
}

const RecipeVerticalPreview = (props: Props) => {
	const { className = '' } = props

	return (
		<div className={`${className} flex flex-col w-60`}>
			<div>
				<Link href={`/posts/${props.recipe.id}`}>
					<a>
						<div className='aspect-[3/4] w-60'>
							<ImageComp
								title={props.recipe.attributes?.title!}
								src={props.recipe.attributes?.coverImage?.data?.attributes?.url}
								formats={props.recipe.attributes?.coverImage?.data?.attributes?.formats}
								className='rounded-md'
							/>
						</div>

						<h3 className='truncate'>{props.recipe.attributes?.title}</h3>
					</a>
				</Link>
			</div>

			<div className='my-1 gap-1 flex flex-wrap'>
				{props.showTags &&
					props.recipe.attributes?.tags?.data.map((tag) => (
						<a
							className='border rounded-md text-xs bg-m_primary hover:bg-m_primary_hover px-1 truncate cursor-pointer'
							key={tag.id}
						>
							{tag.attributes?.tag}
						</a>
					))}
			</div>
		</div>
	)
}

export default RecipeVerticalPreview
