/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
  caption: string | null;
}

export interface GetCategories_categories_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: GetCategories_categories_data_attributes_image_data_attributes | null;
}

export interface GetCategories_categories_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: GetCategories_categories_data_attributes_image_data | null;
}

export interface GetCategories_categories_data_attributes {
  __typename: "Category";
  name: string;
  image: GetCategories_categories_data_attributes_image | null;
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
