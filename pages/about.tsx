import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { GraphQLClient } from '../services/graphql'
import { GET_ABOUT } from '../services/graphql/queries'
import { getAbout } from '../services/graphql/__generated__/getAbout'
import ImageComp from '../components/ImageComp'
import { ApolloError } from '@apollo/client'
import ErrorComponent from '../components/ErrorComponent'

type Props = {
	aboutResponse: aboutResponse
}

type aboutResponse = {
	aboutData: getAbout
	error: ApolloError | null
}

const about: React.FC<Props> = (props: Props) => {
	if (props.aboutResponse.error != null) return <ErrorComponent error={props.aboutResponse.error} />
	return (
		<Layout>
			<Head>
				<title>About | Emilys Kitchen</title>
				<meta name='description' content='About' key='description' />
				<meta property='og:description' content='About' key='ogDescription' />
			</Head>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 pb-24 mx-auto flex flex-col'>
					<div className='lg:w-4/6 mx-auto'>
						<div className='rounded-lg h-64 overflow-hidden'>
							<ImageComp
								title={
									props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.coverImage?.data
										?.attributes?.caption!
								}
								src={
									props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.coverImage?.data
										?.attributes?.url!
								}
								formats={
									props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.coverImage?.data
										?.attributes?.formats!
								}
							/>
						</div>
						<div className='flex flex-col sm:flex-row mt-10'>
							<div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
								<div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
									<ImageComp
										title={
											props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.profilePicture
												?.data?.attributes?.caption!
										}
										src={
											props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.profilePicture
												?.data?.attributes?.url!
										}
										formats={
											props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.profilePicture
												?.data?.attributes?.formats!
										}
									/>
								</div>
								<div className='flex flex-col items-center text-center justify-center'>
									<h2 className='font-medium title-font mt-4 text-gray-900'>
										{props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.profileName}
									</h2>
									<div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
									<p className='text-base'>
										{props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.profileDescription}
									</p>
								</div>
							</div>
							<div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
								<p className='leading-relaxed mb-4'>
									{props.aboutResponse?.aboutData.aboutPage?.data?.attributes?.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default about

export const getServerSideProps: GetStaticProps = async () => {
	const client = GraphQLClient()
	let error: ApolloError | null = null
	const aboutResponse = await client
		.query({
			query: GET_ABOUT,
		})
		.catch((err) => {
			console.log(err)
			error = JSON.parse(JSON.stringify(err))
		})

	const aboutData: getAbout = aboutResponse?.data || null

	return {
		props: {
			aboutResponse: {
				aboutData,
				error,
			},
		},
	}
}
