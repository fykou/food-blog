/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTSOCIALSSOCIAL_ICON } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMeta
// ====================================================

export interface getMeta_meta_data_attributes_socials {
  __typename: "ComponentSocialsSocial";
  id: string;
  icon: ENUM_COMPONENTSOCIALSSOCIAL_ICON | null;
  url: string | null;
}

export interface getMeta_meta_data_attributes_favicon_data_attributes {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface getMeta_meta_data_attributes_favicon_data {
  __typename: "UploadFileEntity";
  attributes: getMeta_meta_data_attributes_favicon_data_attributes | null;
}

export interface getMeta_meta_data_attributes_favicon {
  __typename: "UploadFileEntityResponse";
  data: getMeta_meta_data_attributes_favicon_data | null;
}

export interface getMeta_meta_data_attributes {
  __typename: "Meta";
  siteName: string | null;
  orginization: string | null;
  socials: (getMeta_meta_data_attributes_socials | null)[] | null;
  favicon: getMeta_meta_data_attributes_favicon | null;
}

export interface getMeta_meta_data {
  __typename: "MetaEntity";
  attributes: getMeta_meta_data_attributes | null;
}

export interface getMeta_meta {
  __typename: "MetaEntityResponse";
  data: getMeta_meta_data | null;
}

export interface getMeta {
  meta: getMeta_meta | null;
}
