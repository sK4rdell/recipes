import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

import {queryRecipeAction} from '../actions/recipe.action';
import {RecipeService} from '../../services/recipe.service';

import {recipeActions} from '../actions';

@Injectable()
export class RecipeEffects {

  loadRecipes$ = createEffect(() => this.actions$.pipe(
    ofType(recipeActions.searchRecipe),
    mergeMap(action => this.recipeService.getRecipes(action.query)
      .pipe(
        map(recipes => ({type: recipeActions.queryResultRecipeAction, payload: recipes})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {
  }
}
