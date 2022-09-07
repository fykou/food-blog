import Image from 'next/image'
import Link from 'next/link'

type Props = {
	title: string
	src: string
	formats?: any
	slug?: string
	clickable?: boolean
}

const ImageComp: React.FC<Props> = ({
	title,
	src,
	slug,
	formats,
	clickable = false,
}: Props) => {
	let imageurl = null

	if (formats) {
		imageurl = formats.small.url
	} else {
		imageurl = src ? `${src}` : '/placeholder.png'
	}
	let image = (
		<Image
			src={imageurl}
			alt={`Cover Image for ${title}`}
			blurDataURL={imageurl}
			quality={40}
			placeholder='blur'
			layout='fill'
			objectFit='cover'
			className='rounded-md'
		/>
	)

	return (
		<>
			{slug ? (
				clickable ? (
					<Link href={`/posts/${slug}`}>
						<a className='w-56 h-56' aria-label={title}>
							<div className='w-full h-full relative'>{image}</div>
						</a>
					</Link>
				) : (
					<a className='w-56 h-36' aria-label={title}>
						<div className='w-full h-full relative'>{image}</div>
					</a>
				)
			) : (
				<div className='w-full h-96 relative'>{image}</div>
			)}
		</>
	)
}

export default ImageComp
