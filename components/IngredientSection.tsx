import React from 'react'
import { GetRecipe_recipe_data_attributes_ingredientSection } from '../services/graphql/__generated__/GetRecipe'
import Ingredients from './Ingredients'

type Props = {
	sections: (GetRecipe_recipe_data_attributes_ingredientSection | null)[] | null | undefined
}

const IngredientSection = (props: Props) => {
	return (
		<div>
			<h2>Ingredients</h2>
			{props.sections?.map((section) => (
				<div key={section?.id} className='my-2'>
					<h3>{section?.Section}</h3>

					<Ingredients className='pl-4' ingredients={section?.Ingredients} />
				</div>
			))}
		</div>
	)
}

export default IngredientSection
