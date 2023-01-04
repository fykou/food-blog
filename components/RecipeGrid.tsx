import Link from 'next/link'
import React, { useRef } from 'react'
import { RecipeEntityResponseCollection } from '../services/graphql-types'
import ImageComp from './ImageComp'

type Props = {
	props: RecipeEntityResponseCollection
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
			className='flex flex-row flex-wrap container justify-evenly mx-auto 2xl:max-w-[1980px] m-8'
		>
			{props &&
				props.data?.map((recipe) => (
					<Link
						key={recipe.id}
						passHref
						href={`/recipes/${recipe.id}`}
						className='text-gray-600 max-w-sm body-font p-4 m-4'
					>
						<div className='flex flex-col justify-center items-center'>
							<div className='w-64 h-96'>
								<ImageComp
									title={recipe.attributes?.name!}
									src={recipe.attributes?.coverImage?.data?.attributes?.url}
									format={recipe.attributes?.coverImage?.data?.attributes?.formats}
									className='rounded-lg'
								/>
							</div>

							<div className='text-center'>
								<div>
									<h3>{recipe.attributes?.name!}</h3>
								</div>

								{/* <p>{recipe.attributes?.description!}</p> */}
								<div className='text-indigo-500 inline-flex items-center'>
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
								</div>
							</div>
						</div>
					</Link>
				))}
		</div>
	)
}

export default RecipeGrid
