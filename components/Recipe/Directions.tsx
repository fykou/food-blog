import React, { useState } from 'react'
import { ComponentRecipeDataDirectionsSection, Maybe } from '../../services/graphql-types'

interface Props {
	directionSection: Maybe<Maybe<ComponentRecipeDataDirectionsSection>[]> | undefined
}

const Directions: React.FC<Props> = (props: Props) => {
	const [directionsSectionList, setDirectionsSectionList] = useState(
		props.directionSection?.map((directionData) => ({
			...directionData,
			directions: directionData?.directions?.map((direction, index) => ({
				...direction,
				completed: false,
			})),
		}))
	)

	if (!directionsSectionList) return <p>Error</p>

	const handleToggle = (index: string | undefined) => {
		if (index === undefined) return
		const newDirectionsList = [...directionsSectionList]
		newDirectionsList.forEach((directionSection) => {
			directionSection.directions?.forEach((direction) => {
				if (direction.id === index) {
					direction.completed = !direction.completed
				}
			})
		})
		setDirectionsSectionList(newDirectionsList)
	}

	if (!props.directionSection) return <div />

	return (
		<div className='font-serif px-4 md:px-0'>
			<h2>Directions</h2>
			{directionsSectionList &&
				directionsSectionList.map((directionSection) => (
					<div key={directionSection.id}>
						<h3>{directionSection.section}</h3>
						<ol role='list' className='list-decimal pl-6 whitespace-normal'>
							{directionSection.directions?.map((direction) => (
								<li key={direction.id} className='my-2 hover:text-m_text_dark_hover'>
									<button onClick={() => handleToggle(direction.id)} className='cursor-checkbox'>
										<p
											className={`text-left font-serif ${
												direction?.completed ? 'line-through' : ''
											}`}
										>
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
