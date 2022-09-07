import Link from 'next/link'
import React, { Component } from 'react'
import { IRecipe } from '../types/recipe'
import ImageComp from './ImageComp'
import Slider from 'react-slick'
import { Grid } from '@mantine/core'

type Props = {
	recipes: IRecipe[]
}

const RecipeGrid = ({ recipes }: Props) => {
	return (
		<Grid columns={12} className='m-8'>
			{recipes &&
				recipes.map((recipe) => (
					<Grid.Col
						xl={2}
						md={3}
						sm={4}
						xs={6}
						key={recipe.id}
						className='text-gray-600 body-font p-4'
					>
						<div className='mx-auto flex flex-col justify-center items-center'>
							<ImageComp
								slug={recipe.attributes.slug!}
								title={recipe.attributes.title!}
								src={recipe.attributes.coverImage.data?.attributes.url}
								formats={
									recipe.attributes.coverImage.data?.attributes
										.formats
								}
								clickable={true}
							/>

							<div className='text-center'>
								<h5 className='text-xl'>
									<Link href={`/posts/${recipe.attributes.slug!}`}>
										<a>{recipe.attributes.title!}</a>
									</Link>
								</h5>
								{/* <p>{recipe.attributes.description!}</p> */}
								<a
									href={`/posts/${recipe.attributes.slug!}`}
									className='text-indigo-500 inline-flex items-center'
								>
									Learn More
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
							</div>
						</div>
					</Grid.Col>
				))}
		</Grid>
	)
}

export default RecipeGrid
