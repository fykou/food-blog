import { gql } from '@apollo/client'

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
				attributes {
					name
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
					socialLinks {
						icon
						url
						id
					}
				}
				id
			}
		}
	}
`

export const GET_RECIPE = gql`
	query GetRecipe($id: ID!) {
		recipe(id: $id) {
			data {
				attributes {
					name
					description
					servings
					extra
					publishedAt
					coverImage {
						data {
							attributes {
								url
								formats
							}
						}
					}
					socialLinks {
						icon
						url
						id
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
								name
							}
						}
					}
					ingredientsSection {
						id
						section
						ingredients {
							amount
							id
							ingredient
							optional
							unit
						}
					}
					directionsSection {
						id
						section
						directions {
							simpleName
							id
							direction
						}
					}
					servingUnit
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
					name
					coverImage {
						data {
							attributes {
								url
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
					organization
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
