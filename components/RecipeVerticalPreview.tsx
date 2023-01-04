import Link from 'next/link'
import React from 'react'
import typeGuard from '../utils/typeGuard'
import ImageComp from './ImageComp'

type Props = {
	recipe: GetRecipes_recipes_data | GetCategories_categories_data
	href?: string
	className?: string
	showTags?: boolean
}

const ImagePreview: React.FC<Props> = (props: Props) => {
	return (
		<>
			<div className='aspect-[3/4] w-full'>
				<ImageComp
					title={props.recipe.attributes?.title!}
					src={props.recipe.attributes?.coverImage?.data?.attributes?.url}
					format={props.recipe.attributes?.coverImage?.data?.attributes?.formats}
					className='rounded-md'
				/>
			</div>

			<h3 className='truncate'>{props.recipe.attributes?.title}</h3>
		</>
	)
}

const RecipeVerticalPreview: React.FC<Props> = (props: Props) => {
	const { className = '' } = props

	return (
		<div className={`${className} flex flex-col w-60`}>
			<div>
				{props.href ? (
					<Link href={props.href} passHref>
						<ImagePreview {...props} />
					</Link>
				) : (
					<ImagePreview {...props} />
				)}
			</div>

			<div className='my-1 gap-1 flex flex-wrap min-h-[1rem]'>
				{props.showTags &&
					typeGuard<GetRecipes_recipes_data>(props.recipe, 'attributes') &&
					props.recipe.attributes?.tags?.data.map((tag) => (
						<Link
							href={`/recipes?tag=${tag.attributes?.tag}`}
							key={tag.id}
							className='border rounded-md text-xs bg-m_primary hover:bg-m_primary_hover px-1 truncate cursor-pointer'
						>
							{tag.attributes?.tag}
						</Link>
					))}
			</div>
		</div>
	)
}

export default RecipeVerticalPreview
