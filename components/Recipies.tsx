import Link from 'next/link'
import { IRecipe } from '../types/recipe'
import Thumbnail from './Thumbnail'

type Props = {
	recipes: IRecipe[]
}

const link = 'posts/'

const Recipe: React.FC<Props> = ({ recipes: recipes }: Props) => {
	return (
		<>
			<h1 className='text-4xl font-bold mb-4'>Recipes</h1>

			<div className='space-y-12'>
				{recipes &&
					recipes.map((recipe) => (
						<section key={recipe.id} className='text-gray-600 body-font'>
							<div className='container px-5 py-24 mx-auto flex flex-col'>
								<div className='lg:w-4/6 mx-auto'>
									<div className='rounded-lg h-64 overflow-hidden'>
										<Thumbnail
											slug={recipe.attributes.slug}
											title={recipe.attributes.title}
											src={recipe.attributes.thumbnail}
										/>
									</div>
									<div className='flex flex-col sm:flex-row mt-10'>
										<div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
											<div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
												<svg
													fill='none'
													stroke='currentColor'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													className='w-10 h-10'
													viewBox='0 0 24 24'
												>
													<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
													<circle
														cx='12'
														cy='7'
														r='4'
													></circle>
												</svg>
											</div>
											<div className='flex flex-col items-center text-center justify-center'>
												<h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
													Emily Karabeika
												</h2>
												<div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
												<p className='text-base'>
													Lorom ipsum dolor sit amet,
													consectetur adipisicing elit.
												</p>
											</div>
										</div>
										<div className='sm:w-2/3 sm:pl-8 sm:pt-0 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
											<div className='text-2xl mb-4'>
												<Link
													href={`/posts/${recipe.attributes.slug}`}
												>
													<a>{recipe.attributes.title}</a>
												</Link>
											</div>
											<p className='leading-relaxed text-lg mb-4'>
												{recipe.attributes.description}
											</p>
											<a
												href={`/posts/${recipe.attributes.slug}`}
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
							</div>
						</section>
					))}
			</div>
		</>
	)
}

export default Recipe
