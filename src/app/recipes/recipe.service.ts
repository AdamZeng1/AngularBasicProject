import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This a simple test', 'https://www.bbcgoodfood.com/si' +
      'tes/default/files/recipe-collections/collection-image/2013/05/goulash.jpg'),
    new Recipe('great Menu you have', 'difficult recipe ever', 'https://www.bbcgoodfood.com/si' +
      'tes/default/files/recipe-collections/collection-image/2013/05/goulash.jpg'),
  ];

  getRecipes() {
    // slice means the actual copy of recipes array, we can only get the copy rather than the real array
    return this.recipes.slice();
  }
}
