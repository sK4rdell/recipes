import {RecipeModel} from '../../models/recipes/recipe.model';

export interface RecipesState {
  recipes: RecipeModel[];
  selectedRecipe: RecipeModel;
}

export const initialRecipesState: RecipesState = {
  recipes: null,
  selectedRecipe: null,
};
