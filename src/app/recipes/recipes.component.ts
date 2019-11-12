import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeDetail: { name: string, description: string, imagePath: string };

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeDetail = recipe;
      }
    );
  }
}
