import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // true means recipe, false means shopping list
  display = true;

  onRecipeDisplay(status: boolean) {
    this.display = status;
  }
}
