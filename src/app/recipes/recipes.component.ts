import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetail: { name: string, description: string, imagePath: string };

  constructor() {
  }

  ngOnInit() {
  }

  showRecipeDetail(recipe: { name: string, description: string, imagePath: string }) {
    this.recipeDetail = recipe;
  }

}
