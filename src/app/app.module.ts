import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes/recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './recipes/search/search.component';
import {StoreModule} from '@ngrx/store';

import * as fromRecipes from './store/reducers/recipe.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({recipe: fromRecipes}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
