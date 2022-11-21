/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories_data_attributes_coverImage_data_attributes {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
  caption: string | null;
}

export interface GetCategories_categories_data_attributes_coverImage_data {
  __typename: "UploadFileEntity";
  attributes: GetCategories_categories_data_attributes_coverImage_data_attributes | null;
}

export interface GetCategories_categories_data_attributes_coverImage {
  __typename: "UploadFileEntityResponse";
  data: GetCategories_categories_data_attributes_coverImage_data | null;
}

export interface GetCategories_categories_data_attributes {
  __typename: "Category";
  title: string;
  coverImage: GetCategories_categories_data_attributes_coverImage | null;
}

export interface GetCategories_categories_data {
  __typename: "CategoryEntity";
  id: string | null;
  attributes: GetCategories_categories_data_attributes | null;
}

export interface GetCategories_categories {
  __typename: "CategoryEntityResponseCollection";
  data: GetCategories_categories_data[];
}

export interface GetCategories {
  categories: GetCategories_categories | null;
}
