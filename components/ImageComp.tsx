import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Maybe, UploadFile } from '../services/graphql-types'
import { ImageQuality } from '../utils/types'

interface Props {
    imageData?: Maybe<UploadFile>
    format?: ImageQuality
    className?: string
    placeholder?: boolean
}

const ImageComp: React.FC<Props> = (props: Props) => {
    const ref = useRef<HTMLImageElement>(null)
    const [src] = useState<string>(() => {
        if (props.placeholder) {
            return '/placeholder.png'
        }
        if (props.format != null) {
            switch (true) {
                case 'thumbnail' in props.format:
                    return props.imageData?.formats?.thumbnail?.url
                case 'small' in props.format:
                    return props.imageData?.formats?.small?.url
                case 'medium' in props.format:
                    return props.imageData?.formats?.medium?.url
                case 'large' in props.format:
                    return props.imageData?.formats?.large?.url
                case 'original' in props.format:
                    return props.imageData?.url
            }
        }
        return props.imageData?.url
    })


    return (
        <div className='w-full h-full relative'>
            <Image
                ref={ref}
                src={src || '/.'}
                quality={75}
                alt={`${props.imageData?.alternativeText ?? props.imageData?.name ?? 'could not find image'}`}
                className={`${props.className} whitespace-pre-wrap shadow-inner shadow-gray-500`}
                style={{ objectFit: 'cover' }}
                onError={() => ref.current?.classList.add('p-2')}
                fill
                sizes='(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw'
            />
        </div>
    )
}

export default ImageComp
