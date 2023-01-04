import Image from 'next/image'
import { Maybe, Scalars } from '../services/graphql-types'
import { ExclusifyUnion } from '../utils/exclusifyUnionType'

interface Props {
	src: string
	alt: string | null
	formatData?: Maybe<Scalars['JSON']>
	format?: ExclusifyUnion<Thumbnail | Small | Medium | Large | Original>
	className?: string
}

type Thumbnail = {
	thumbnail: boolean
}

type Small = {
	small: boolean
}

type Medium = {
	medium: boolean
}

type Large = {
	large: boolean
}

type Original = {
	original: boolean
}

const ImageComp: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full h-full relative'>
			<Image
				src={props.src}
				alt={`cannot show image for ${props.alt}`}
				className={props.className}
				style={{ objectFit: 'cover' }}
				fill
			/>
		</div>
	)
}

export default ImageComp
