import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() showRecipe = new EventEmitter<boolean>();
  @Output() showShoppingList = new EventEmitter<boolean>();

  onShowRecipe() {
    this.showRecipe.emit(true); // true means show recipe
  }

  onShowShoppingList() {
    this.showShoppingList.emit(false); // false means show recipe
  }
}
