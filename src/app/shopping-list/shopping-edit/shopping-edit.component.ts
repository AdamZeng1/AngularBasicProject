import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.shoppingListService.addIngredient({name: nameInput.value, amount: this.amountInputRef.nativeElement.value});
    // this.shoppingListService.ingredientCreated.emit({name: nameInput.value, amount: this.amountInputRef.nativeElement.value});
  }

}
