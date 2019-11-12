import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredientCreated = new EventEmitter<{ name: string, amount: number }>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 2),
    new Ingredient('Apples', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
