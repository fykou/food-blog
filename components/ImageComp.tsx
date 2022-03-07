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
			className='rounded-lg'
			src={src}
			alt={`Cover Image for ${title}`}
			width={1280 / 3}
			height={720 / 3}
		/>
	)

	return (
		<>
			{slug ? (
				<Link href={`/posts/${slug}`}>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</>
	)
}

export default Thumbnail
