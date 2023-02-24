/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useRef } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorageHook'
import { ComponentRecipeDataIngredients, ComponentRecipeDataIngredientSection, Maybe } from '../../services/graphql-types'
import { convertUnits } from '../../utils/convertUnits'
import { Unit } from '../../utils/enums'

interface Props {
    recipeId: string
    ingredientsSection: Maybe<Array<Maybe<ComponentRecipeDataIngredientSection>>> | undefined
    className?: string
}

// interface Ingredient extends ComponentRecipeDataIngredients{
//     completed: boolean
//     isMetric: boolean
//     metricAmount: {
//         converted: {
//             amount: Unit
//             unit: string
//         }
//         original: {
//             amount: Unit
//             unit: string
//         }
//     }
//     imperialAmount: {
//         converted: {
//             amount: Unit
//             unit: string
//         }
//         original: {
//             amount: Unit
//             unit: string
//         }
//     }
// }
// interface Ingredients extends ComponentRecipeDataIngredientSection {
//     ingredients?: Maybe<Array<Maybe<Ingredient>>> | undefined;
//     completed: boolean
// }

// create a dictionary of units and wether or not they are metric
const isMetricUnits = {
    [Unit.g]: true,
    [Unit.kg]: true,
    [Unit.ml]: true,
    [Unit.l]: true,
    [Unit.tsp]: false,
    [Unit.tbsp]: false,
    [Unit.cup]: false,
    [Unit.ounce]: false,
    [Unit.other]: false,
}

const Ingredients: React.FC<Props> = (props: Props) => {
    const metricToggleRef = useRef<HTMLLabelElement>(null)
    const [showImperial, setShowImperial] = useLocalStorage<boolean>('showImperial', false)

    const [ingredientsSectionList, setIngredientsSectionList] = useLocalStorage(
        `ingredientsSectionList - id:${props.recipeId}`,
        props.ingredientsSection?.map((ingredientData) => ({
            ...ingredientData,
            completed: false,
            ingredients: ingredientData?.ingredients?.map((ingredient) => ({
                ...ingredient,
                completed: false,
                isMetric: isMetricUnits[ingredient?.unit as Unit],
                metricAmount: convertUnits(ingredient?.unit as Unit, ingredient?.amount as number, true, ingredient?.ingredient),
                imperialAmount: convertUnits(ingredient?.unit as Unit, ingredient?.amount as number, false, ingredient?.ingredient),
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

    const resetIngredients = () => {
        setIngredientsSectionList(
            ingredientsSectionList?.map((ingredientData) => ({
                ...ingredientData,
                completed: false,
                ingredients: ingredientData?.ingredients?.map((ingredient) => ({
                    ...ingredient,
                    completed: false,
                })),
            })),
        )
        localStorage.removeItem(`ingredientsSectionList - id:${props.recipeId}`)
    }

    const displayUnitAndAmount = (ingredient: any) => {
        if (ingredient.alternativeAmount) return String(ingredient.alternativeAmount).charAt(0).toUpperCase() + String(ingredient.alternativeAmount).slice(1)
        if (showImperial) return String(ingredient.imperialAmount.converted.amount) + ' ' + String(ingredient.imperialAmount.converted.unit)
        return String(ingredient.metricAmount.converted.amount) + ' ' + String(ingredient.metricAmount.converted.unit)
    }

    if (props.ingredientsSection == null || props.ingredientsSection.length < 1) return null

    return (
        <div className={`flex flex-col gap-2 font-serif px-4 sm:px-0 ${props.className}`}>
            <label ref={metricToggleRef} className='relative inline-flex items-center cursor-pointer'>
                <input
                    type='checkbox'
                    value=''
                    className='sr-only peer'
                    onChange={() => setShowImperial(!showImperial)}
                    checked={showImperial}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-m_secondary" />
                <span className='ml-3 w-16 text-sm font-medium'>{showImperial ? 'imperial' : 'metric'}</span>
            </label>

            <button
                className='text-left bg-m_tertiary w-fit hover:bg-m_tertiary_hover text-white p-1 px-2 rounded-full'
                onClick={() => {
                    resetIngredients()
                }}
            >
                reset checks
            </button>
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
                                    <p className={`text-left font-serif whitespace-pre-line ${ingredient.completed ? 'line-through' : ''}`}>
                                        {displayUnitAndAmount(ingredient)} {' '} {ingredient.ingredient?.toLocaleLowerCase()} <span className='text-gray-500'> {ingredient.additionalText ? ' - ' + ingredient.additionalText?.toLocaleLowerCase() : ''}</span>
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
