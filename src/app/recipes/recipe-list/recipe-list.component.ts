import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This a simple test', 'https://www.bbcgoodfood.com/si' +
      'tes/default/files/recipe-collections/collection-image/2013/05/goulash.jpg'),
    new Recipe('A Test Recipe', 'This a simple test', 'https://www.bbcgoodfood.com/si' +
      'tes/default/files/recipe-collections/collection-image/2013/05/goulash.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
