import React, { useState } from 'react'
import { ComponentRecipeDataDirectionsSection, Maybe } from '../../services/graphql-types'

interface Props {
    directionSection: Maybe<Maybe<ComponentRecipeDataDirectionsSection>[]> | undefined
}

const Directions: React.FC<Props> = (props: Props) => {
    const [directionsSectionList, setDirectionsSectionList] = useState(
        props.directionSection?.map((directionData) => ({
            ...directionData,
            completed: false,
            directions: directionData?.directions?.map((direction) => ({
                ...direction,
                completed: false,
            })),
        })),
    )

    if (directionsSectionList == null) return null

    const handleToggle = (sectionID: string | undefined, directionID?: string | undefined) => {
        const newDirectionsList = [...directionsSectionList]
        newDirectionsList.forEach((directionSection) => {
            if (directionSection.id === sectionID) {
                if (directionID === undefined) {
                    directionSection.completed = !directionSection.completed
                    return
                }
                directionSection.directions?.forEach((direction) => {
                    if (direction.id === directionID) {
                        direction.completed = !direction.completed
                    }
                })
            }
        })
        setDirectionsSectionList(newDirectionsList)
    }

    if (props.directionSection == null || props.directionSection.length < 1) return null

    return (
        <div className='font-serif px-4 md:px-0'>
            <h2>Directions</h2>
            {directionsSectionList.map((directionSection) => (
                <div key={directionSection.id} className='mb-4'>
                    {directionSection.section && (
                        <button onClick={() => handleToggle(directionSection.id)} className='cursor-checkbox'>
                            <h3 className={`text-left font-serif ${directionSection?.completed ? 'line-through' : ''}`}>
                                {directionSection.section}
                            </h3>
                        </button>
                    )}
                    <ol role='list' className='list-decimal pl-6 whitespace-normal'>
                        {directionSection.directions?.map((direction) => (
                            <li key={direction.id} className='my-2 hover:text-m_text_dark_hover'>
                                <button
                                    onClick={() => handleToggle(directionSection.id, direction.id)}
                                    className='cursor-checkbox'
                                >
                                    <p className={`text-left font-serif ${direction?.completed ? 'line-through' : ''}`}>
                                        {direction?.direction}
                                    </p>
                                </button>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    )
}

export default Directions
