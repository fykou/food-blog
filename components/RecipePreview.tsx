import Link from 'next/link'
import React, { Component } from 'react'
import { IRecipe } from '../types/recipe'
import ImageComp from './ImageComp'
import Slider from 'react-slick'
import { Grid } from '@mantine/core'

type Props = {
	recipes: IRecipe[]
}

const RecipePreview = ({ recipes }: Props) => {
	return (
		<section className='w-full max-w-screen-laptop px-16 flex flex-col justify-center items-center'>
			<h2 className='text-3xl bg-m_primary px-4 py-2 rounded-md'>Latest Recipes</h2>
			<div className='w-full flex flex-row space-6 space-x-6 flex-wrap justify-evenly mx-8 my-4 overflow-hidden h-[436px]'>
				{recipes &&
					recipes.slice(0, 4).map((recipe) => (
						<Link key={recipe.id} href={`/posts/${recipe.attributes.slug!}`}>
							<a className='max-w-sm p-1'>
								<div className='flex flex-col justify-center items-center truncate'>
									<div className='w-64 h-96'>
										<ImageComp
											slug={recipe.attributes.slug!}
											title={recipe.attributes.title!}
											src={recipe.attributes.coverImage.data?.attributes.url}
											formats={recipe.attributes.coverImage.data?.attributes.formats}
											className='rounded-lg'
										/>
									</div>

									<h3 className='max-w-[16rem] text-xl p-2 truncate'>{recipe.attributes.title}</h3>
								</div>
							</a>
						</Link>
					))}
			</div>
			<Link href={`/recipes`}>
				<a className='flex flex-row justify-center items-center flex-nowrap self-end text-xl font-semibold'>
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
