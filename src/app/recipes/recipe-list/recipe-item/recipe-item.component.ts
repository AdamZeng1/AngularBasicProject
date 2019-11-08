import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: { name: string, description: string, imagePath: string };
  @Output() showDetail = new EventEmitter<{ name: string, description: string, imagePath: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  onShowDetail() {
    this.showDetail.emit(this.recipe);
  }

}
