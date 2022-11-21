/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTSOCIALSSOCIAL_ICON, ENUM_COMPONENTRECIPEDATAINGREDIENTS_UNIT } from "./../../../__generated__/globalTypes";

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

export interface GetRecipe_recipe_data_attributes_Directions {
  __typename: "ComponentRecipeDataDirections";
  direction: string;
  id: string;
}

export interface GetRecipe_recipe_data_attributes_Link {
  __typename: "ComponentSocialsSocial";
  icon: ENUM_COMPONENTSOCIALSSOCIAL_ICON | null;
  id: string;
  url: string | null;
}

export interface GetRecipe_recipe_data_attributes_tags_data_attributes {
  __typename: "Tag";
  tag: string | null;
}

export interface GetRecipe_recipe_data_attributes_tags_data {
  __typename: "TagEntity";
  attributes: GetRecipe_recipe_data_attributes_tags_data_attributes | null;
  id: string | null;
}

export interface GetRecipe_recipe_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetRecipe_recipe_data_attributes_tags_data[];
}

export interface GetRecipe_recipe_data_attributes_category_data_attributes {
  __typename: "Category";
  title: string;
}

export interface GetRecipe_recipe_data_attributes_category_data {
  __typename: "CategoryEntity";
  attributes: GetRecipe_recipe_data_attributes_category_data_attributes | null;
}

export interface GetRecipe_recipe_data_attributes_category {
  __typename: "CategoryEntityResponse";
  data: GetRecipe_recipe_data_attributes_category_data | null;
}

export interface GetRecipe_recipe_data_attributes_ingredientSection_Ingredients {
  __typename: "ComponentRecipeDataIngredients";
  id: string;
  ingredient: string;
  unit: ENUM_COMPONENTRECIPEDATAINGREDIENTS_UNIT | null;
  optional: boolean | null;
  ammount: number;
}

export interface GetRecipe_recipe_data_attributes_ingredientSection {
  __typename: "ComponentRecipeDataIngredientSection";
  id: string;
  Section: string | null;
  Ingredients: (GetRecipe_recipe_data_attributes_ingredientSection_Ingredients | null)[] | null;
}

export interface GetRecipe_recipe_data_attributes {
  __typename: "Recipe";
  title: string | null;
  description: string | null;
  Servings: number | null;
  servingUnit: string | null;
  Extra: string | null;
  publishedAt: any | null;
  coverImage: GetRecipe_recipe_data_attributes_coverImage | null;
  Directions: (GetRecipe_recipe_data_attributes_Directions | null)[] | null;
  Link: (GetRecipe_recipe_data_attributes_Link | null)[] | null;
  tags: GetRecipe_recipe_data_attributes_tags | null;
  category: GetRecipe_recipe_data_attributes_category | null;
  ingredientSection: (GetRecipe_recipe_data_attributes_ingredientSection | null)[] | null;
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
