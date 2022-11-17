/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg, RecipeFiltersInput, ENUM_COMPONENTSOCIALSSOCIAL_ICON } from "./../../../__generated__/globalTypes";

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

export interface GetRecipes_recipes_data_attributes_tags_data_attributes {
  __typename: "Tag";
  tag: string | null;
}

export interface GetRecipes_recipes_data_attributes_tags_data {
  __typename: "TagEntity";
  attributes: GetRecipes_recipes_data_attributes_tags_data_attributes | null;
  id: string | null;
}

export interface GetRecipes_recipes_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetRecipes_recipes_data_attributes_tags_data[];
}

export interface GetRecipes_recipes_data_attributes_Link {
  __typename: "ComponentSocialsSocial";
  icon: ENUM_COMPONENTSOCIALSSOCIAL_ICON | null;
  url: string | null;
}

export interface GetRecipes_recipes_data_attributes {
  __typename: "Recipe";
  title: string | null;
  description: string | null;
  publishedAt: any | null;
  coverImage: GetRecipes_recipes_data_attributes_coverImage | null;
  tags: GetRecipes_recipes_data_attributes_tags | null;
  Link: (GetRecipes_recipes_data_attributes_Link | null)[] | null;
}

export interface GetRecipes_recipes_data {
  __typename: "RecipeEntity";
  id: string | null;
  attributes: GetRecipes_recipes_data_attributes | null;
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
  filters?: RecipeFiltersInput | null;
}
