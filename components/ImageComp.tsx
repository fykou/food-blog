import Image from 'next/image'
import Link from 'next/link'

type Props = {
	title: string
	src: string
	formats?: any
	slug?: string
	className?: string
}

const ImageComp: React.FC<Props> = ({ title, src, slug, formats, className }: Props) => {
	let largeimg = null
	let smallimg = null

	if (formats) {
		largeimg = formats.large.url
		smallimg = formats.small.url
	} else {
		largeimg = src ? `${src}` : '/placeholder.png'
	}

	return (
		<>
			<div className='w-full h-full relative'>
				<Image
					src={largeimg}
					alt={`Cover Image for ${title}`}
					blurDataURL={smallimg}
					quality={100}
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
