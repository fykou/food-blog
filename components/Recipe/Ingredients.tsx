import { useState } from 'react'
import { ComponentRecipeDataIngredientSection, Maybe } from '../../services/graphql-types'

// components/Ingredients.tsx
type Props = {
	ingredientsSection: Maybe<Array<Maybe<ComponentRecipeDataIngredientSection>>> | undefined
	className?: string
}

const Ingredients: React.FC<Props> = (props: Props) => {
	const [ingredientsSectionList, setIngredientsSectionList] = useState(
		props.ingredientsSection?.map((ingredientData) => ({
			...ingredientData,
			ingredients: ingredientData?.ingredients?.map((ingredient, index) => ({
				...ingredient,
				completed: false,
			})),
		}))
	)

	if (!ingredientsSectionList) return <p>Error</p>

	const handleToggle = (sectionID: string | undefined, ingredientID: string | undefined) => {
		const newIngredientsList = [...ingredientsSectionList]
		newIngredientsList.forEach((ingredientSection) => {
			if (ingredientSection.id === sectionID) {
				ingredientSection.ingredients?.forEach((ingredient) => {
					if (ingredient.id === ingredientID) {
						ingredient.completed = !ingredient.completed
					}
				})
			}
		})
		setIngredientsSectionList(newIngredientsList)
	}

	return (
		<ul className={props.className}>
			{ingredientsSectionList &&
				ingredientsSectionList.map((ingredientSection) => (
					<div key={ingredientSection.id}>
						<h3>{ingredientSection.section}</h3>
						<ul>
							{ingredientSection.ingredients?.map((ingredient) => (
								<li key={ingredient.id} className='my-2 hover:text-m_text_dark_hover'>
									<button
										onClick={() => handleToggle(ingredientSection.id, ingredient.id)}
										className='cursor-checkbox'
									>
										<p
											className={`text-left font-serif ${
												ingredient.completed ? 'line-through' : ''
											}`}
										>
											{ingredient.amount} {ingredient.unit} {ingredient.ingredient}
										</p>
									</button>
								</li>
							))}
						</ul>
					</div>
				))}
		</ul>
	)
}

export default Ingredients
