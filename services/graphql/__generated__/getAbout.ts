/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAbout
// ====================================================

export interface getAbout_aboutPage_data_attributes_coverImage_data_attributes {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
  caption: string | null;
}

export interface getAbout_aboutPage_data_attributes_coverImage_data {
  __typename: "UploadFileEntity";
  attributes: getAbout_aboutPage_data_attributes_coverImage_data_attributes | null;
}

export interface getAbout_aboutPage_data_attributes_coverImage {
  __typename: "UploadFileEntityResponse";
  data: getAbout_aboutPage_data_attributes_coverImage_data | null;
}

export interface getAbout_aboutPage_data_attributes_profilePicture_data_attributes {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
  caption: string | null;
}

export interface getAbout_aboutPage_data_attributes_profilePicture_data {
  __typename: "UploadFileEntity";
  attributes: getAbout_aboutPage_data_attributes_profilePicture_data_attributes | null;
}

export interface getAbout_aboutPage_data_attributes_profilePicture {
  __typename: "UploadFileEntityResponse";
  data: getAbout_aboutPage_data_attributes_profilePicture_data | null;
}

export interface getAbout_aboutPage_data_attributes {
  __typename: "AboutPage";
  profileName: string | null;
  description: string | null;
  profileDescription: string | null;
  coverImage: getAbout_aboutPage_data_attributes_coverImage | null;
  profilePicture: getAbout_aboutPage_data_attributes_profilePicture | null;
}

export interface getAbout_aboutPage_data {
  __typename: "AboutPageEntity";
  attributes: getAbout_aboutPage_data_attributes | null;
}

export interface getAbout_aboutPage {
  __typename: "AboutPageEntityResponse";
  data: getAbout_aboutPage_data | null;
}

export interface getAbout {
  aboutPage: getAbout_aboutPage | null;
}
