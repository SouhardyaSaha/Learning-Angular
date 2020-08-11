import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients:Ingredient[] = [
    new Ingredient('Apple', 20),
    new Ingredient('Tomatoes', 120),

  ]
  constructor() {

  }

  ngOnInit(): void {
  }

  onNewAddedItem(ingredient : Ingredient) {
    this.Ingredients.push(ingredient)
  }

}
