import Link from 'next/link'
import React from 'react'
import { Category, Recipe, TagEntity } from '../services/graphql-types'
import { ImageQuality } from '../utils/types'
import ImageComp from './ImageComp'
import TextAndArrow from './TextAndArrow'

interface CardProps {
    attributes: Recipe | Category
    id: string
    title?: boolean
    learnMore?: boolean
    imageQuality?: ImageQuality
    className?: string
    tags?: boolean
    tagCollection?: TagEntity[]
}

/**
 * @param attributes Recipe | Category
 * @param id string
 * @param title boolean
 * @param learnMore boolean
 * @param imageQuality ImageQuality (default: { small: true })
 * @param className string
 * @returns JSX.Element
 * @description
 * Card is a component that displays a recipe card.
 * It takes in a recipe object and displays the image by default.
 * It also takes in a boolean to display the title, and learn more button.
 * It also takes in an imageQuality object to specify the image quality.
 * @example
 * <Card attributes={recipe} id={recipe.id} title learnMore imageQuality={{ small: true }} />
 *
 */
export const Card = (props: CardProps) => {
    const imageData = props.attributes?.coverImage?.data?.attributes
    return (
        <div
            key={props.id}
            className={`flex flex-col text-center items-center justify-center w-full h-full overflow-hidden ${props.className}`}
            style={{ minWidth: '24px', minHeight: '24px' }}
        >
            <Link href={`/recipes/${props.id}`} className='w-full h-full'>
                <ImageComp
                    imageData={imageData}
                    format={props.imageQuality ?? { small: true }}
                    className='rounded-md'
                />
            </Link>
            {props.title && (
                <Link href={`/recipes/${props.id}`} className='w-full'>
                    <h3 className='text-ellipsis whitespace-nowrap overflow-hidden w-full'>{props.attributes?.name}</h3>
                </Link>
            )}

            {props.tagCollection != null && (
                <div className='h-5 flex flex-wrap justify-center overflow-hidden'>
                    {props.tagCollection?.map((tag) => (
                        <Link
                            key={tag.id}
                            href={`/recipes?tag=${tag.attributes?.tag}`}
                            className='border rounded-md text-xs bg-m_primary hover:bg-m_primary_hover px-1 truncate cursor-pointer'
                        >
                            {tag.attributes?.tag}
                        </Link>
                    ))}
                </div>
            )}

            {props.learnMore && <TextAndArrow text='Learn More' className='text-indigo-500' />}
        </div>
    )
}
