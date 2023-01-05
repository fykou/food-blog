import Image from 'next/image'
import React from 'react'
import { Maybe, UploadFile } from '../services/graphql-types'
import { ImageQuality } from '../utils/types'

interface Props {
	imageData?: Maybe<UploadFile>
	format?: ImageQuality
	className?: string
	placeholder?: boolean
}

const ImageComp: React.FC<Props> = (props: Props) => {
	let imageSource
	if (props.format) {
		switch (true) {
			case 'thumbnail' in props.format:
				imageSource = props.imageData?.formats?.thumbnail?.url
				break
			case 'small' in props.format:
				imageSource = props.imageData?.formats?.small?.url
				break
			case 'medium' in props.format:
				imageSource = props.imageData?.formats?.medium?.url
				break
			case 'large' in props.format:
				imageSource = props.imageData?.formats?.large?.url
				break
			case 'original' in props.format:
				imageSource = props.imageData?.url
				break
			default:
				imageSource = props.imageData?.url
		}
	}
	if (!imageSource) imageSource = props.imageData?.url

	return (
		<div className='w-full h-full relative'>
			<Image
				placeholder='blur'
				blurDataURL={props.imageData?.formats?.thumbnail?.url || '/../'}
				src={props.placeholder ? '/../public/placeholder.png' : imageSource || '/ '}
				quality={75}
				alt={`${props.imageData?.alternativeText || props.imageData?.name || 'could not find image'}`}
				className={`${props.className} whitespace-pre-wrap shadow-inner shadow-gray-500`}
				style={{ objectFit: 'cover' }}
				fill
				sizes='(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw'
			/>
		</div>
	)
}

export default ImageComp
