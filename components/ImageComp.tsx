// components/Thumbnail.tsx
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	title: string
	src: string
	slug?: string
}

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
	src = src ? `${src}` : '/placeholder.png'
	let image = (
		<Image
			src={src}
			alt={`Cover Image for ${title}`}
			layout='fill'
			objectFit='cover'
		/>
	)

	return (
		<>
			{slug ? (
				<Link href={`/posts/${slug}`}>
					<a className='w-56 h-36' aria-label={title}>
						<div className='w-full h-full relative'>{image}</div>
					</a>
				</Link>
			) : (
				<div className='w-full h-96 relative'>{image}</div>
			)}
		</>
	)
}

export default Thumbnail
