/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories_data_attributes {
  __typename: "Category";
  Name: string | null;
}

export interface GetCategories_categories_data {
  __typename: "CategoryEntity";
  attributes: GetCategories_categories_data_attributes | null;
}

export interface GetCategories_categories {
  __typename: "CategoryEntityResponseCollection";
  data: GetCategories_categories_data[];
}

export interface GetCategories {
  categories: GetCategories_categories | null;
}
