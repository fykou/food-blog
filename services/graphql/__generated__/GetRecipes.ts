/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetRecipes
// ====================================================

export interface GetRecipes_recipes_meta_pagination {
  __typename: "Pagination";
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface GetRecipes_recipes_meta {
  __typename: "ResponseCollectionMeta";
  pagination: GetRecipes_recipes_meta_pagination;
}

export interface GetRecipes_recipes_data_attributes_coverImage_data_attributes {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface GetRecipes_recipes_data_attributes_coverImage_data {
  __typename: "UploadFileEntity";
  attributes: GetRecipes_recipes_data_attributes_coverImage_data_attributes | null;
}

export interface GetRecipes_recipes_data_attributes_coverImage {
  __typename: "UploadFileEntityResponse";
  data: GetRecipes_recipes_data_attributes_coverImage_data | null;
}

export interface GetRecipes_recipes_data_attributes {
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
  coverImage: GetRecipes_recipes_data_attributes_coverImage | null;
}

export interface GetRecipes_recipes_data {
  __typename: "RecipeEntity";
  attributes: GetRecipes_recipes_data_attributes | null;
  id: string | null;
}

export interface GetRecipes_recipes {
  __typename: "RecipeEntityResponseCollection";
  meta: GetRecipes_recipes_meta;
  data: GetRecipes_recipes_data[];
}

export interface GetRecipes {
  recipes: GetRecipes_recipes | null;
}

export interface GetRecipesVariables {
  pagination?: PaginationArg | null;
  sort?: (string | null)[] | null;
}
