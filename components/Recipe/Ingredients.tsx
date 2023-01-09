import React from 'react'
import { useState } from 'react'
import { ComponentRecipeDataIngredientSection, Maybe } from '../../services/graphql-types'

type Props = {
    ingredientsSection: Maybe<Array<Maybe<ComponentRecipeDataIngredientSection>>> | undefined
}

const Ingredients: React.FC<Props> = (props: Props) => {
    const [ingredientsSectionList, setIngredientsSectionList] = useState(
        props.ingredientsSection?.map((ingredientData) => ({
            ...ingredientData,
            completed: false,
            ingredients: ingredientData?.ingredients?.map((ingredient) => ({
                ...ingredient,
                completed: false,
            })),
        })),
    )

    if (ingredientsSectionList == null) return <p>Error</p>

    const handleToggle = (sectionID: string | undefined, ingredientID?: string | undefined) => {
        const newIngredientsList = [...ingredientsSectionList]
        newIngredientsList.forEach((ingredientSection) => {
            if (ingredientSection.id === sectionID) {
                if (ingredientID === undefined) {
                    ingredientSection.completed = !ingredientSection.completed
                    return
                }
                ingredientSection.ingredients?.forEach((ingredient) => {
                    if (ingredient.id === ingredientID) {
                        ingredient.completed = !ingredient.completed
                    }
                })
            }
        })
        setIngredientsSectionList(newIngredientsList)
    }

    if (props.ingredientsSection == null || props.ingredientsSection.length < 1) return null

    return (
        <div className='font-serif px-4 md:px-0'>
            <h2>Ingredients</h2>

            {ingredientsSectionList?.map((ingredientSection) => (
                <div key={ingredientSection.id} className='mb-4'>
                    {ingredientSection.section && (
                        <button onClick={() => handleToggle(ingredientSection.id)} className='cursor-checkbox'>
                            <h3 className={`text-left font-serif ${ingredientSection.completed ? 'line-through' : ''}`}>
                                {ingredientSection.section}
                            </h3>
                        </button>
                    )}
                    <ul className='pl-4'>
                        {ingredientSection.ingredients?.map((ingredient) => (
                            <li key={ingredient.id} className='my-2 hover:text-m_text_dark_hover'>
                                <button
                                    onClick={() => handleToggle(ingredientSection.id, ingredient.id)}
                                    className='cursor-checkbox'
                                >
                                    <p className={`text-left font-serif ${ingredient.completed ? 'line-through' : ''}`}>
                                        {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
                                    </p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Ingredients
