// pages/index.tsx
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Navigation'

import Layout from '../components/Layout'
import Recipe from '../components/Recipies'
import Thumbnail from '../components/Thumbnail'
import { IPost } from '../types/post'
import { SITE_NAME } from '../utils/constants'
import { getAllPosts } from '../utils/mdxUtils'

type Props = {
	posts: IPost[]
}

const Home: React.FC<Props> = ({ posts }: Props) => {
	return (
		<>
			<Layout>
				<Head>
					<title>{SITE_NAME}</title>
				</Head>

				<Recipe posts={posts}></Recipe>
			</Layout>
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts(['slug', 'date', 'thumbnail', 'title', 'description'])

	return { props: { posts } }
}
