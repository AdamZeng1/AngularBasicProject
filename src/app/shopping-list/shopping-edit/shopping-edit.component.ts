import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientCreated = new EventEmitter<{name: string, amount: number}>();
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.ingredientCreated.emit({name: nameInput.value, amount: this.amountInputRef.nativeElement.value});
  }

}
