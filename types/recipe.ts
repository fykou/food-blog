export interface IRecipe {
	id: number
	attributes: {
		title: string
		slug: string
		date: string
		thumbnail: string
		description: string
		yields: string
		ingredients: string[]
		directions: string[]
		imperial: boolean
		coverImage: any
		tips: string[]
		other: string
	}
}
