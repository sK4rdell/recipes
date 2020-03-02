import {RouterReducerState} from '@ngrx/router-store';
import {initialRecipesState, RecipesState} from './recipes.state';

export interface AppState {
  router?: RouterReducerState;
  recipes?: RecipesState;
}

export const initialAppState: AppState = {
  recipes: initialRecipesState,
};

export const getInitialState = () => initialAppState;
