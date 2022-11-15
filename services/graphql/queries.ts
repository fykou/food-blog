import gql from 'graphql-tag'

// Define queries here

export const GET_RECIPES = gql`
	query GetRecipes($pagination: PaginationArg, $sort: [String]) {
		recipes(pagination: $pagination, sort: $sort) {
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
					title
					slug
					description
					directions
					yields
					ingredients
					tips
					other
					publishedAt
					coverImage {
						data {
							attributes {
								url
								formats
							}
						}
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
					title
					slug
					description
					directions
					yields
					ingredients
					tips
					other
					publishedAt
					coverImage {
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

export const GET_CATEGORIES = gql`
	query GetCategories {
		categories {
			data {
				attributes {
					Name
				}
			}
		}
	}
`
