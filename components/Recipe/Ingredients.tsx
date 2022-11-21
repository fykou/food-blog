import { useState } from 'react'
import { GetRecipe_recipe_data_attributes_ingredientSection_Ingredients } from '../../services/graphql/__generated__/GetRecipe'

// components/Ingredients.tsx
type Props = {
	ingredients: (GetRecipe_recipe_data_attributes_ingredientSection_Ingredients | null)[] | null | undefined
	className?: string
}

type Ingredient = {
	ingredientData: GetRecipe_recipe_data_attributes_ingredientSection_Ingredients | null
	completed: boolean
	id: number
}

const Ingredients: React.FC<Props> = ({ ingredients, className }: Props) => {
	const [ingredientsList, setIngredientsList] = useState<Ingredient[]>(
		ingredients?.map((ingredientData, index) => ({
			ingredientData,
			completed: false,
			id: index,
		})) ?? []
	)

	const handleToggle = (index: number) => {
		const newIngredientsList = [...ingredientsList]
		newIngredientsList[index].completed = !newIngredientsList[index].completed
		setIngredientsList(newIngredientsList)
	}

	return (
		<ul className={className}>
			{ingredientsList.map((ingredient, index) => (
				<li key={index} className='my-2 hover:text-m_text_dark_hover'>
					<button onClick={() => handleToggle(ingredient.id)} className='cursor-checkbox'>
						<p className={`text-left font-serif ${ingredient.completed ? 'line-through' : ''}`}>
							{ingredient.ingredientData?.ammount} {ingredient.ingredientData?.unit}{' '}
							{ingredient.ingredientData?.ingredient}
						</p>
					</button>
				</li>
			))}
		</ul>
	)
}

export default Ingredients
