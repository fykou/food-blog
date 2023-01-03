export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
}

export interface AboutPage {
  __typename?: 'AboutPage';
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  profileDescription?: Maybe<Scalars['String']>;
  profileName: Scalars['String'];
  profilePicture?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface AboutPageEntity {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']>;
}

export interface AboutPageEntityResponse {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
}

export interface AboutPageInput {
  coverImage?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  profileDescription?: InputMaybe<Scalars['String']>;
  profileName?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface BooleanFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
}

export interface Category {
  __typename?: 'Category';
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface CategoryEntity {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
}

export interface CategoryEntityResponse {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
}

export interface CategoryEntityResponseCollection {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
}

export interface CategoryFiltersInput {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface CategoryInput {
  coverImage?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface ComponentRecipeDataDirections {
  __typename?: 'ComponentRecipeDataDirections';
  direction: Scalars['String'];
  id: Scalars['ID'];
  simpleName?: Maybe<Scalars['String']>;
}

export interface ComponentRecipeDataDirectionsFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentRecipeDataDirectionsFiltersInput>>>;
  direction?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentRecipeDataDirectionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRecipeDataDirectionsFiltersInput>>>;
  simpleName?: InputMaybe<StringFilterInput>;
}

export interface ComponentRecipeDataDirectionsInput {
  direction?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  simpleName?: InputMaybe<Scalars['String']>;
}

export interface ComponentRecipeDataDirectionsSection {
  __typename?: 'ComponentRecipeDataDirectionsSection';
  directions?: Maybe<Array<Maybe<ComponentRecipeDataDirections>>>;
  id: Scalars['ID'];
  section?: Maybe<Scalars['String']>;
}


export interface ComponentRecipeDataDirectionsSectionDirectionsArgs {
  filters?: InputMaybe<ComponentRecipeDataDirectionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ComponentRecipeDataDirectionsSectionFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentRecipeDataDirectionsSectionFiltersInput>>>;
  directions?: InputMaybe<ComponentRecipeDataDirectionsFiltersInput>;
  not?: InputMaybe<ComponentRecipeDataDirectionsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRecipeDataDirectionsSectionFiltersInput>>>;
  section?: InputMaybe<StringFilterInput>;
}

export interface ComponentRecipeDataDirectionsSectionInput {
  directions?: InputMaybe<Array<InputMaybe<ComponentRecipeDataDirectionsInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  section?: InputMaybe<Scalars['String']>;
}

export interface ComponentRecipeDataIngredientSection {
  __typename?: 'ComponentRecipeDataIngredientSection';
  id: Scalars['ID'];
  ingredients?: Maybe<Array<Maybe<ComponentRecipeDataIngredients>>>;
  section?: Maybe<Scalars['String']>;
}


export interface ComponentRecipeDataIngredientSectionIngredientsArgs {
  filters?: InputMaybe<ComponentRecipeDataIngredientsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ComponentRecipeDataIngredientSectionFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentRecipeDataIngredientSectionFiltersInput>>>;
  ingredients?: InputMaybe<ComponentRecipeDataIngredientsFiltersInput>;
  not?: InputMaybe<ComponentRecipeDataIngredientSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRecipeDataIngredientSectionFiltersInput>>>;
  section?: InputMaybe<StringFilterInput>;
}

export interface ComponentRecipeDataIngredientSectionInput {
  id?: InputMaybe<Scalars['ID']>;
  ingredients?: InputMaybe<Array<InputMaybe<ComponentRecipeDataIngredientsInput>>>;
  section?: InputMaybe<Scalars['String']>;
}

export interface ComponentRecipeDataIngredients {
  __typename?: 'ComponentRecipeDataIngredients';
  additionalText?: Maybe<Scalars['String']>;
  alternativeAmount?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  ingredient: Scalars['String'];
  optional?: Maybe<Scalars['Boolean']>;
  unit?: Maybe<Enum_Componentrecipedataingredients_Unit>;
}

export interface ComponentRecipeDataIngredientsFiltersInput {
  additionalText?: InputMaybe<StringFilterInput>;
  alternativeAmount?: InputMaybe<StringFilterInput>;
  amount?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentRecipeDataIngredientsFiltersInput>>>;
  ingredient?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentRecipeDataIngredientsFiltersInput>;
  optional?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRecipeDataIngredientsFiltersInput>>>;
  unit?: InputMaybe<StringFilterInput>;
}

export interface ComponentRecipeDataIngredientsInput {
  additionalText?: InputMaybe<Scalars['String']>;
  alternativeAmount?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  ingredient?: InputMaybe<Scalars['String']>;
  optional?: InputMaybe<Scalars['Boolean']>;
  unit?: InputMaybe<Enum_Componentrecipedataingredients_Unit>;
}

export interface ComponentSocialsSocial {
  __typename?: 'ComponentSocialsSocial';
  icon?: Maybe<Enum_Componentsocialssocial_Icon>;
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
}

export interface ComponentSocialsSocialFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentSocialsSocialFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSocialsSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSocialsSocialFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
}

export interface ComponentSocialsSocialInput {
  icon?: InputMaybe<Enum_Componentsocialssocial_Icon>;
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface DateTimeFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
}

export type Enum_Componentrecipedataingredients_Unit =
  | 'cup'
  | 'g'
  | 'kg'
  | 'l'
  | 'ml'
  | 'ounce'
  | 'tbsp'
  | 'tsp';

export type Enum_Componentsocialssocial_Icon =
  | 'Facebook'
  | 'Instagram'
  | 'LinkedIn'
  | 'Pintrest'
  | 'TikTok'
  | 'Twitter'
  | 'YouTube';

export interface FileInfoInput {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface FloatFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
}

export type GenericMorph = AboutPage | Category | ComponentRecipeDataDirections | ComponentRecipeDataDirectionsSection | ComponentRecipeDataIngredientSection | ComponentRecipeDataIngredients | ComponentSocialsSocial | I18NLocale | Meta | Recipe | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export interface I18NLocale {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface I18NLocaleEntity {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
}

export interface I18NLocaleEntityResponse {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
}

export interface I18NLocaleEntityResponseCollection {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
}

export interface I18NLocaleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface IdFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
}

export interface IntFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
}

export interface JsonFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
}

export interface Meta {
  __typename?: 'Meta';
  createdAt?: Maybe<Scalars['DateTime']>;
  favicon?: Maybe<UploadFileEntityResponse>;
  organization?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  siteName?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<ComponentSocialsSocial>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}


export interface MetaSocialsArgs {
  filters?: InputMaybe<ComponentSocialsSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface MetaEntity {
  __typename?: 'MetaEntity';
  attributes?: Maybe<Meta>;
  id?: Maybe<Scalars['ID']>;
}

export interface MetaEntityResponse {
  __typename?: 'MetaEntityResponse';
  data?: Maybe<MetaEntity>;
}

export interface MetaInput {
  favicon?: InputMaybe<Scalars['ID']>;
  organization?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  siteName?: InputMaybe<Scalars['String']>;
  socials?: InputMaybe<Array<InputMaybe<ComponentSocialsSocialInput>>>;
}

export interface Mutation {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createRecipe?: Maybe<RecipeEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteMeta?: Maybe<MetaEntityResponse>;
  deleteRecipe?: Maybe<RecipeEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateMeta?: Maybe<MetaEntityResponse>;
  updateRecipe?: Maybe<RecipeEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
}


export interface MutationChangePasswordArgs {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
}


export interface MutationCreateCategoryArgs {
  data: CategoryInput;
}


export interface MutationCreateRecipeArgs {
  data: RecipeInput;
}


export interface MutationCreateTagArgs {
  data: TagInput;
}


export interface MutationCreateUploadFileArgs {
  data: UploadFileInput;
}


export interface MutationCreateUploadFolderArgs {
  data: UploadFolderInput;
}


export interface MutationCreateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
}


export interface MutationCreateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
}


export interface MutationDeleteCategoryArgs {
  id: Scalars['ID'];
}


export interface MutationDeleteRecipeArgs {
  id: Scalars['ID'];
}


export interface MutationDeleteTagArgs {
  id: Scalars['ID'];
}


export interface MutationDeleteUploadFileArgs {
  id: Scalars['ID'];
}


export interface MutationDeleteUploadFolderArgs {
  id: Scalars['ID'];
}


export interface MutationDeleteUsersPermissionsRoleArgs {
  id: Scalars['ID'];
}


export interface MutationDeleteUsersPermissionsUserArgs {
  id: Scalars['ID'];
}


export interface MutationEmailConfirmationArgs {
  confirmation: Scalars['String'];
}


export interface MutationForgotPasswordArgs {
  email: Scalars['String'];
}


export interface MutationLoginArgs {
  input: UsersPermissionsLoginInput;
}


export interface MutationMultipleUploadArgs {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
}


export interface MutationRegisterArgs {
  input: UsersPermissionsRegisterInput;
}


export interface MutationRemoveFileArgs {
  id: Scalars['ID'];
}


export interface MutationResetPasswordArgs {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
}


export interface MutationUpdateAboutPageArgs {
  data: AboutPageInput;
}


export interface MutationUpdateCategoryArgs {
  data: CategoryInput;
  id: Scalars['ID'];
}


export interface MutationUpdateFileInfoArgs {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
}


export interface MutationUpdateMetaArgs {
  data: MetaInput;
}


export interface MutationUpdateRecipeArgs {
  data: RecipeInput;
  id: Scalars['ID'];
}


export interface MutationUpdateTagArgs {
  data: TagInput;
  id: Scalars['ID'];
}


export interface MutationUpdateUploadFileArgs {
  data: UploadFileInput;
  id: Scalars['ID'];
}


export interface MutationUpdateUploadFolderArgs {
  data: UploadFolderInput;
  id: Scalars['ID'];
}


export interface MutationUpdateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
}


export interface MutationUpdateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
}


export interface MutationUploadArgs {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
}

export interface Pagination {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
}

export interface PaginationArg {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
}

export type PublicationState =
  | 'LIVE'
  | 'PREVIEW';

export interface Query {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  meta?: Maybe<MetaEntityResponse>;
  recipe?: Maybe<RecipeEntityResponse>;
  recipes?: Maybe<RecipeEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
}


export interface QueryAboutPageArgs {
  publicationState?: InputMaybe<PublicationState>;
}


export interface QueryCategoriesArgs {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface QueryCategoryArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryI18NLocaleArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryI18NLocalesArgs {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface QueryMetaArgs {
  publicationState?: InputMaybe<PublicationState>;
}


export interface QueryRecipeArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryRecipesArgs {
  filters?: InputMaybe<RecipeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface QueryTagArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryTagsArgs {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface QueryUploadFileArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryUploadFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface QueryUploadFolderArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryUploadFoldersArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface QueryUsersPermissionsRoleArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryUsersPermissionsRolesArgs {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface QueryUsersPermissionsUserArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryUsersPermissionsUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Recipe {
  __typename?: 'Recipe';
  category?: Maybe<CategoryEntityResponse>;
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  directionsSection?: Maybe<Array<Maybe<ComponentRecipeDataDirectionsSection>>>;
  extra?: Maybe<Scalars['String']>;
  ingredientsSection?: Maybe<Array<Maybe<ComponentRecipeDataIngredientSection>>>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  servingUnit?: Maybe<Scalars['String']>;
  servings?: Maybe<Scalars['Int']>;
  socialLinks?: Maybe<Array<Maybe<ComponentSocialsSocial>>>;
  tags?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}


export interface RecipeDirectionsSectionArgs {
  filters?: InputMaybe<ComponentRecipeDataDirectionsSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface RecipeIngredientsSectionArgs {
  filters?: InputMaybe<ComponentRecipeDataIngredientSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface RecipeSocialLinksArgs {
  filters?: InputMaybe<ComponentSocialsSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface RecipeTagsArgs {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface RecipeEntity {
  __typename?: 'RecipeEntity';
  attributes?: Maybe<Recipe>;
  id?: Maybe<Scalars['ID']>;
}

export interface RecipeEntityResponse {
  __typename?: 'RecipeEntityResponse';
  data?: Maybe<RecipeEntity>;
}

export interface RecipeEntityResponseCollection {
  __typename?: 'RecipeEntityResponseCollection';
  data: Array<RecipeEntity>;
  meta: ResponseCollectionMeta;
}

export interface RecipeFiltersInput {
  and?: InputMaybe<Array<InputMaybe<RecipeFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  directionsSection?: InputMaybe<ComponentRecipeDataDirectionsSectionFiltersInput>;
  extra?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  ingredientsSection?: InputMaybe<ComponentRecipeDataIngredientSectionFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RecipeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecipeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  servingUnit?: InputMaybe<StringFilterInput>;
  servings?: InputMaybe<IntFilterInput>;
  socialLinks?: InputMaybe<ComponentSocialsSocialFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface RecipeInput {
  category?: InputMaybe<Scalars['ID']>;
  coverImage?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  directionsSection?: InputMaybe<Array<InputMaybe<ComponentRecipeDataDirectionsSectionInput>>>;
  extra?: InputMaybe<Scalars['String']>;
  ingredientsSection?: InputMaybe<Array<InputMaybe<ComponentRecipeDataIngredientSectionInput>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  servingUnit?: InputMaybe<Scalars['String']>;
  servings?: InputMaybe<Scalars['Int']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentSocialsSocialInput>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
}

export interface ResponseCollectionMeta {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
}

export interface StringFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
}

export interface Tag {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']>;
  tag: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface TagEntity {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']>;
}

export interface TagEntityResponse {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
}

export interface TagEntityResponseCollection {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
}

export interface TagFiltersInput {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  tag?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface TagInput {
  tag?: InputMaybe<Scalars['String']>;
}

export interface TagRelationResponseCollection {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
}

export interface UploadFile {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
}

export interface UploadFileEntity {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
}

export interface UploadFileEntityResponse {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
}

export interface UploadFileEntityResponseCollection {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
}

export interface UploadFileFiltersInput {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
}

export interface UploadFileInput {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
}

export interface UploadFileRelationResponseCollection {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
}

export interface UploadFolder {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
}


export interface UploadFolderChildrenArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface UploadFolderFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface UploadFolderEntity {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
}

export interface UploadFolderEntityResponse {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
}

export interface UploadFolderEntityResponseCollection {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
}

export interface UploadFolderFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UploadFolderInput {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
}

export interface UploadFolderRelationResponseCollection {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
}

export interface UsersPermissionsCreateRolePayload {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
}

export interface UsersPermissionsDeleteRolePayload {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
}

export interface UsersPermissionsLoginInput {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
}

export interface UsersPermissionsLoginPayload {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
}

export interface UsersPermissionsMe {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
}

export interface UsersPermissionsMeRole {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
}

export interface UsersPermissionsPasswordPayload {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
}

export interface UsersPermissionsPermission {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface UsersPermissionsPermissionEntity {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
}

export interface UsersPermissionsPermissionFiltersInput {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UsersPermissionsPermissionRelationResponseCollection {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
}

export interface UsersPermissionsRegisterInput {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}

export interface UsersPermissionsRole {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
}


export interface UsersPermissionsRolePermissionsArgs {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface UsersPermissionsRoleUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface UsersPermissionsRoleEntity {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
}

export interface UsersPermissionsRoleEntityResponse {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
}

export interface UsersPermissionsRoleEntityResponseCollection {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsRoleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
}

export interface UsersPermissionsRoleInput {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
}

export interface UsersPermissionsUpdateRolePayload {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
}

export interface UsersPermissionsUser {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
}

export interface UsersPermissionsUserEntity {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
}

export interface UsersPermissionsUserEntityResponse {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
}

export interface UsersPermissionsUserEntityResponseCollection {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsUserFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
}

export interface UsersPermissionsUserInput {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
}

export interface UsersPermissionsUserRelationResponseCollection {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
}
