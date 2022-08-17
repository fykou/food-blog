import Link from 'next/link'
import React, { Component } from 'react'
import { IRecipe } from '../types/recipe'
import ImageComp from './ImageComp'
import Slider from 'react-slick'

type Props = {
	recipes: IRecipe[]
}

// create a class that takes a property called recipes and returns a component

export default class Responsive extends Component<Props> {
	render() {
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		}
		return (
			<div className='flex flex-col items-center'>
				<h1 className='text-3xl font-bold no-underline text-gray-800'>
					Recipes
				</h1>
				<div className='container w-screen px-16 mx-auto mt-8'>
					<Slider {...settings}>
						{this.props.recipes &&
							this.props.recipes.map((recipe) => (
								<div
									key={recipe.id}
									className='text-gray-600 body-font p-4'
								>
									<div className='mx-auto flex flex-col justify-center items-center'>
										<ImageComp
											slug={recipe.attributes.slug!}
											title={recipe.attributes.title!}
											src={
												recipe.attributes.coverImage.data
													?.attributes.url
											}
										/>

										<div className='hidden md:block text-center'>
											<h5 className='text-xl'>
												<Link
													href={`/posts/${recipe.attributes
														.slug!}`}
												>
													<a>{recipe.attributes.title!}</a>
												</Link>
											</h5>
											{/* <p>{recipe.attributes.description!}</p> */}
											<a
												href={`/posts/${recipe.attributes
													.slug!}`}
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
								</div>
							))}
					</Slider>
				</div>
			</div>
		)
	}
}
