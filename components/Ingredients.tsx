import { useState } from 'react'

// components/Ingredients.tsx
type Props = {
	ingredients: string[]
}

type Ingredient = {
	ingredient: string
	completed: boolean
	id: number
}

const Ingredients: React.FC<Props> = ({ ingredients }: Props) => {
	const [ingredientsList, setIngredientsList] = useState<Ingredient[]>(
		ingredients.map((ingredient, index) => {
			return {
				ingredient,
				completed: false,
				id: index,
			}
		})
	)

	const handleToggle = (index: number) => {
		const newIngredientsList = [...ingredientsList]
		newIngredientsList[index].completed = !newIngredientsList[index].completed
		setIngredientsList(newIngredientsList)
	}

	return (
		<>
			<h3 className='my-8 text-3xl'>Ingredients</h3>
			<ul>
				{ingredientsList.map((ingredient, index) => (
					<li key={index} className='my-2 hover:text-m_text_dark_hover'>
						<button onClick={() => handleToggle(ingredient.id)} className='cursor-checkbox'>
							<p className={`text-left ${ingredient.completed ? 'line-through' : ''}`}>
								{ingredient.ingredient}
							</p>
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Ingredients
