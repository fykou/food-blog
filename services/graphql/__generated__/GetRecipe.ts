/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecipe
// ====================================================

export interface GetRecipe_recipe_data_attributes_coverImage_data_attributes {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface GetRecipe_recipe_data_attributes_coverImage_data {
  __typename: "UploadFileEntity";
  attributes: GetRecipe_recipe_data_attributes_coverImage_data_attributes | null;
}

export interface GetRecipe_recipe_data_attributes_coverImage {
  __typename: "UploadFileEntityResponse";
  data: GetRecipe_recipe_data_attributes_coverImage_data | null;
}

export interface GetRecipe_recipe_data_attributes {
  __typename: "Recipe";
  title: string | null;
  slug: string;
  description: string | null;
  directions: any | null;
  yields: string | null;
  ingredients: any | null;
  tips: any | null;
  other: string | null;
  publishedAt: any | null;
  coverImage: GetRecipe_recipe_data_attributes_coverImage | null;
}

export interface GetRecipe_recipe_data {
  __typename: "RecipeEntity";
  attributes: GetRecipe_recipe_data_attributes | null;
}

export interface GetRecipe_recipe {
  __typename: "RecipeEntityResponse";
  data: GetRecipe_recipe_data | null;
}

export interface GetRecipe {
  recipe: GetRecipe_recipe | null;
}

export interface GetRecipeVariables {
  id: string;
}
