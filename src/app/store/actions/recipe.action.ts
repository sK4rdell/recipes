import {createAction, props} from '@ngrx/store';
import {RecipeModel} from '../../models/recipes/recipe.model';
import {RecipeQueriesModel} from '../../models/recipes/recipe-queries.model';

export const selectRecipeAction = '[Recipe] select';
export const queryRecipeAction =  '[Recipe] search';
export const queryResultRecipeAction = '[Recipe] search results';


export const selectRecipe = createAction(selectRecipeAction, props<{recipe: RecipeModel}>());
export const searchRecipe = createAction(queryRecipeAction, props<{query: RecipeQueriesModel}>());
export const searchResultRecipe = createAction(queryRecipeAction, props<{payload: RecipeModel[]}>());
