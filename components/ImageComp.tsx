import Image from 'next/image'
import Link from 'next/link'

type Props = {
	title: string
	src: string
	formats?: any
	slug?: string
	className?: string
}

const ImageComp: React.FC<Props> = ({
	title,
	src,
	slug,
	formats,
	className,
}: Props) => {
	let imageurl = null

	if (formats) {
		imageurl = formats.small.url
	} else {
		imageurl = src ? `${src}` : '/placeholder.png'
	}

	return (
		<>
			<div className='w-full h-full relative'>
				<Image
					src={imageurl}
					alt={`Cover Image for ${title}`}
					blurDataURL={imageurl}
					quality={40}
					placeholder='blur'
					layout='fill'
					objectFit='cover'
					className={className}
				/>
			</div>
		</>
	)
}

export default ImageComp
