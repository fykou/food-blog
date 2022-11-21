import gql from 'graphql-tag'

// Define queries here

export const GET_RECIPES = gql`
	query GetRecipes($pagination: PaginationArg, $sort: [String], $filters: RecipeFiltersInput) {
		recipes(pagination: $pagination, sort: $sort, filters: $filters) {
			meta {
				pagination {
					total
					page
					pageSize
					pageCount
				}
			}
			data {
				id
				attributes {
					title
					description
					publishedAt
					coverImage {
						data {
							attributes {
								url
								formats
							}
						}
					}
					tags {
						data {
							attributes {
								tag
							}
							id
						}
					}
					Link {
						icon
						url
					}
				}
			}
		}
	}
`

export const GET_RECIPE = gql`
	query GetRecipe($id: ID!) {
		recipe(id: $id) {
			data {
				attributes {
					title
					description
					Servings
					servingUnit
					Extra
					publishedAt
					coverImage {
						data {
							attributes {
								url
								formats
							}
						}
					}
					Directions {
						direction
						id
					}
					Link {
						icon
						id
						url
					}
					tags {
						data {
							attributes {
								tag
							}
							id
						}
					}
					category {
						data {
							attributes {
								title
							}
						}
					}
					ingredientSection {
						id
						Section
						Ingredients {
							id
							ingredient
							unit
							optional
							ammount
						}
					}
				}
			}
		}
	}
`

export const GET_CATEGORIES = gql`
	query GetCategories {
		categories {
			data {
				id
				attributes {
					title
					coverImage {
						data {
							attributes {
								url
								formats
								caption
							}
						}
					}
				}
			}
		}
	}
`

export const GET_ABOUT = gql`
	query getAbout {
		aboutPage {
			data {
				attributes {
					profileName
					description
					profileDescription
					coverImage {
						data {
							attributes {
								url
								formats
								caption
							}
						}
					}
					profilePicture {
						data {
							attributes {
								url
								formats
								caption
							}
						}
					}
				}
			}
		}
	}
`

export const GET_META = gql`
	query getMeta {
		meta {
			data {
				attributes {
					siteName
					orginization
					socials {
						id
						icon
						url
					}
					favicon {
						data {
							attributes {
								url
								formats
							}
						}
					}
				}
			}
		}
	}
`
