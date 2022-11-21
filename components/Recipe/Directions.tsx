import { useEffect, useState } from 'react'
import { GetRecipe_recipe_data_attributes_Directions } from '../../services/graphql/__generated__/GetRecipe'

// components/Directions.tsx
type Props = {
	directions: (GetRecipe_recipe_data_attributes_Directions | null)[] | null | undefined
}

type Direction = {
	directionData: GetRecipe_recipe_data_attributes_Directions | null
	completed: boolean
	id: number
}

const Directions: React.FC<Props> = (props: Props) => {
	const [directionsList, setDirectionsList] = useState<Direction[]>(
		props.directions?.map((directionData, index) => ({
			directionData,
			completed: false,
			id: index,
		})) ?? []
	)

	const handleToggle = (index: number) => {
		const newDirectionsList = [...directionsList]
		newDirectionsList[index].completed = !newDirectionsList[index].completed
		setDirectionsList(newDirectionsList)
	}

	if (!props.directions) return <div />

	return (
		<div className='font-serif px-4 md:px-0'>
			<h2>Directions</h2>
			<ol role='list' className='list-decimal pl-6 whitespace-normal'>
				{directionsList.map((direction, index) => (
					<li key={index} className='my-2 hover:text-m_text_dark_hover'>
						<button onClick={() => handleToggle(direction.id)} className='cursor-checkbox'>
							<p className={`text-left font-serif ${direction.completed ? 'line-through' : ''}`}>
								{direction.directionData?.direction}
							</p>
						</button>
					</li>
				))}
			</ol>
		</div>
	)
}

export default Directions
