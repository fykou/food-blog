/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTRECIPEDATAINGREDIENTS_UNIT {
  cup = "cup",
  g = "g",
  kg = "kg",
  l = "l",
  ml = "ml",
  ounce = "ounce",
  tbsp = "tbsp",
  tsp = "tsp",
}

export enum ENUM_COMPONENTSOCIALSSOCIAL_ICON {
  Facebook = "Facebook",
  Instagram = "Instagram",
  LinkedIn = "LinkedIn",
  Pintrest = "Pintrest",
  TikTok = "TikTok",
  Twitter = "Twitter",
  YouTube = "YouTube",
}

export interface BooleanFilterInput {
  and?: (boolean | null)[] | null;
  or?: (boolean | null)[] | null;
  not?: BooleanFilterInput | null;
  eq?: boolean | null;
  eqi?: boolean | null;
  ne?: boolean | null;
  startsWith?: boolean | null;
  endsWith?: boolean | null;
  contains?: boolean | null;
  notContains?: boolean | null;
  containsi?: boolean | null;
  notContainsi?: boolean | null;
  gt?: boolean | null;
  gte?: boolean | null;
  lt?: boolean | null;
  lte?: boolean | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (boolean | null)[] | null;
  notIn?: (boolean | null)[] | null;
  between?: (boolean | null)[] | null;
}

export interface CategoryFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (CategoryFiltersInput | null)[] | null;
  or?: (CategoryFiltersInput | null)[] | null;
  not?: CategoryFiltersInput | null;
}

export interface ComponentRecipeDataDirectionsFiltersInput {
  direction?: StringFilterInput | null;
  and?: (ComponentRecipeDataDirectionsFiltersInput | null)[] | null;
  or?: (ComponentRecipeDataDirectionsFiltersInput | null)[] | null;
  not?: ComponentRecipeDataDirectionsFiltersInput | null;
}

export interface ComponentRecipeDataIngredientSectionFiltersInput {
  Section?: StringFilterInput | null;
  Ingredients?: ComponentRecipeDataIngredientsFiltersInput | null;
  and?: (ComponentRecipeDataIngredientSectionFiltersInput | null)[] | null;
  or?: (ComponentRecipeDataIngredientSectionFiltersInput | null)[] | null;
  not?: ComponentRecipeDataIngredientSectionFiltersInput | null;
}

export interface ComponentRecipeDataIngredientsFiltersInput {
  ingredient?: StringFilterInput | null;
  ammount?: FloatFilterInput | null;
  unit?: StringFilterInput | null;
  optional?: BooleanFilterInput | null;
  and?: (ComponentRecipeDataIngredientsFiltersInput | null)[] | null;
  or?: (ComponentRecipeDataIngredientsFiltersInput | null)[] | null;
  not?: ComponentRecipeDataIngredientsFiltersInput | null;
}

export interface ComponentSocialsSocialFiltersInput {
  url?: StringFilterInput | null;
  icon?: StringFilterInput | null;
  and?: (ComponentSocialsSocialFiltersInput | null)[] | null;
  or?: (ComponentSocialsSocialFiltersInput | null)[] | null;
  not?: ComponentSocialsSocialFiltersInput | null;
}

export interface DateTimeFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateTimeFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface FloatFilterInput {
  and?: (number | null)[] | null;
  or?: (number | null)[] | null;
  not?: FloatFilterInput | null;
  eq?: number | null;
  eqi?: number | null;
  ne?: number | null;
  startsWith?: number | null;
  endsWith?: number | null;
  contains?: number | null;
  notContains?: number | null;
  containsi?: number | null;
  notContainsi?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (number | null)[] | null;
  notIn?: (number | null)[] | null;
  between?: (number | null)[] | null;
}

export interface IDFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: IDFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface IntFilterInput {
  and?: (number | null)[] | null;
  or?: (number | null)[] | null;
  not?: IntFilterInput | null;
  eq?: number | null;
  eqi?: number | null;
  ne?: number | null;
  startsWith?: number | null;
  endsWith?: number | null;
  contains?: number | null;
  notContains?: number | null;
  containsi?: number | null;
  notContainsi?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (number | null)[] | null;
  notIn?: (number | null)[] | null;
  between?: (number | null)[] | null;
}

export interface JSONFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: JSONFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface PaginationArg {
  page?: number | null;
  pageSize?: number | null;
  start?: number | null;
  limit?: number | null;
}

export interface RecipeFiltersInput {
  id?: IDFilterInput | null;
  title?: StringFilterInput | null;
  description?: StringFilterInput | null;
  yields?: StringFilterInput | null;
  ingredients?: JSONFilterInput | null;
  directions?: JSONFilterInput | null;
  tips?: JSONFilterInput | null;
  other?: StringFilterInput | null;
  imperial?: BooleanFilterInput | null;
  slug?: StringFilterInput | null;
  category?: CategoryFiltersInput | null;
  Directions?: ComponentRecipeDataDirectionsFiltersInput | null;
  Extra?: StringFilterInput | null;
  Servings?: IntFilterInput | null;
  tags?: TagFiltersInput | null;
  ingredientSection?: ComponentRecipeDataIngredientSectionFiltersInput | null;
  Link?: ComponentSocialsSocialFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (RecipeFiltersInput | null)[] | null;
  or?: (RecipeFiltersInput | null)[] | null;
  not?: RecipeFiltersInput | null;
}

export interface StringFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: StringFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface TagFiltersInput {
  id?: IDFilterInput | null;
  tag?: StringFilterInput | null;
  recipe?: RecipeFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (TagFiltersInput | null)[] | null;
  or?: (TagFiltersInput | null)[] | null;
  not?: TagFiltersInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
