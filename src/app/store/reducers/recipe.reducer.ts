import {initialRecipesState, RecipesState} from '../state/recipes.state';
import {Action, createReducer, on, State} from '@ngrx/store';
import * as RecipeActions from '../actions/recipe.action';

const recipeReducers = createReducer(
  initialRecipesState,
  on(RecipeActions.searchRecipe, state => ({...state})),
  on(RecipeActions.selectRecipe, (state, {recipe}) => ({...state, selectedRecipe: recipe})),
  on(RecipeActions.searchResultRecipe, (state, {payload}) => ({...state, recipes: payload})),
);

export function reducer(state: RecipesState | undefined, action: Action) {
  return recipeReducers(state, action);
}
