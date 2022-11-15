import { useEffect, useState } from 'react'

// components/Directions.tsx
type Props = {
	directions: string[]
}

type Direction = {
	direction: string
	completed: boolean
	id: number
}

const Directions: React.FC<Props> = ({ directions }: Props) => {
	const [directionsList, setDirectionsList] = useState<Direction[]>(
		directions.map((direction, index) => {
			return {
				direction,
				completed: false,
				id: index,
			}
		})
	)

	const handleToggle = (index: number) => {
		const newDirectionsList = [...directionsList]
		newDirectionsList[index].completed = !newDirectionsList[index].completed
		setDirectionsList(newDirectionsList)
	}

	return (
		<>
			<h3 className='my-8 text-3xl'>Directions</h3>
			<ol role='list' className='list-decimal'>
				{directionsList.map((direction, index) => (
					<li key={index} className='my-2 hover:text-m_text_dark_hover'>
						<button onClick={() => handleToggle(direction.id)} className='cursor-checkbox'>
							<p className={`text-left ${direction.completed ? 'line-through' : ''}`}>
								{direction.direction}
							</p>
						</button>
					</li>
				))}
			</ol>
		</>
	)
}

export default Directions
