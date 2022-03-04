// components/Thumbnail.tsx
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	title: string
	src: string
	slug?: string
}

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
	const image = (
		<Image src={src} alt={`Cover Image for ${title}`} width={1280} height={720} />
	)
	return (
		<>
			{src ? (
				slug ? (
					<Link href={`/posts/${slug}`}>
						<a aria-label={title}>{image}</a>
					</Link>
				) : (
					image
				)
			) : (
				<i>Cover Image for {title}</i>
			)}
		</>
	)
}

export default Thumbnail
