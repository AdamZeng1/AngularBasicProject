import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: { name: string, description: string, imagePath: string };

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onShowDetail() {
   this.recipeService.recipeSelected.emit(this.recipe);
  }

}
