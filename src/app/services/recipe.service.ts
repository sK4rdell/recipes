import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

/*
x?i=onions,garlic&q=omelet&p=3

  Optional Parameters:
  i : comma delimited ingredients
q : normal search query
p : page
format=xml : if you want xml instead of json
*/

const API_URL = 'http://www.recipepuppy.com/api/';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getRecipes({ingredients, query, page}): Observable<any> {
    const qs = new HttpParams()
      .set('i', ingredients.join(','))
      .set('q', query)
      .set('p', page.toString());

    return this.http.get(API_URL, {...qs})
      .pipe(
        catchError(err => {
            console.log(err);
            return throwError(err);
          }
        )
      );
  }

}
