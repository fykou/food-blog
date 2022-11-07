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
		<div className='prose-xl flex flex-row flex-wrap container justify-evenly mx-auto 2xl:max-w-[1980px] m-8'>
			{recipes &&
				recipes.map((recipe) => (
					<Link key={recipe.id} href={`/posts/${recipe.attributes.slug!}`}>
						<a className='text-gray-600 max-w-sm body-font p-4 m-4'>
							<div className='flex flex-col justify-center items-center'>
								<div className='w-64 h-96'>
									<ImageComp
										slug={recipe.attributes.slug!}
										title={recipe.attributes.title!}
										src={
											recipe.attributes.coverImage.data
												?.attributes.url
										}
										formats={
											recipe.attributes.coverImage.data
												?.attributes.formats
										}
										className='rounded-lg'
									/>
								</div>

								<div className='text-center'>
									<a>
										<h3>{recipe.attributes.title!}</h3>
									</a>

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
						</a>
					</Link>
				))}
		</div>
	)
}

export default RecipeGrid