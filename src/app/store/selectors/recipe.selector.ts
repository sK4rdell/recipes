import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {RecipesState} from '../state/recipes.state';

const recipeState = createFeatureSelector<AppState, RecipesState>('recipes');

export const selectAllRecipes = createSelector(
  recipeState,
  (state: RecipesState) => state.recipes
  );

export const selectSelectedRecipe = createSelector(
  recipeState,
  (state: RecipesState) => state.selectedRecipe
);
