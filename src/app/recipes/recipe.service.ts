import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Meal', 'This a simple test', 'https://www.bbcgoodfood.com/si' +
      'tes/default/files/recipe-collections/collection-image/2013/05/goulash.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),

      ]),
    new Recipe('big fat burger', 'difficult recipe ever', 'https://www.bbcgoodfood.com/si' +
      'tes/default/files/recipe-collections/collection-image/2013/05/goulash.jpg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Meats', 1),
      ]),
  ];
  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    // slice means the actual copy of recipes array, we can only get the copy rather than the real array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
