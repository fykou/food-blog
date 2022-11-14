import Link from 'next/link'
import React, { useRef } from 'react'
import ImageComp from './ImageComp'
import { GetRecipes } from '../services/graphql/__generated__/GetRecipes'

type Props = {
	props: GetRecipes
}

const RecipeGrid = ({ props }: Props) => {
	const listInnerRef = useRef<HTMLDivElement>(null)
	const onScroll = () => {
		if (listInnerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
			if (scrollTop + clientHeight === scrollHeight) {
				// This will be triggered after hitting the last element.
				// API call should be made here while implementing pagination.
			}
		}
	}

	return (
		<div
			ref={listInnerRef}
			onScroll={onScroll}
			className='prose-xl flex flex-row flex-wrap container justify-evenly mx-auto 2xl:max-w-[1980px] m-8'
		>
			{props &&
				props.recipes?.data.map((recipe) => (
					<Link key={recipe.id} href={`/posts/${recipe.id}`}>
						<a className='text-gray-600 max-w-sm body-font p-4 m-4'>
							<div className='flex flex-col justify-center items-center'>
								<div className='w-64 h-96'>
									<ImageComp
										slug={recipe.attributes?.slug!}
										title={recipe.attributes?.title!}
										src={recipe.attributes?.coverImage?.data?.attributes?.url}
										formats={recipe.attributes?.coverImage?.data?.attributes?.formats}
										className='rounded-lg'
									/>
								</div>

								<div className='text-center'>
									<a>
										<h3>{recipe.attributes?.title!}</h3>
									</a>

									{/* <p>{recipe.attributes.description!}</p> */}
									<a
										href={`/posts/${recipe.attributes?.slug!}`}
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
