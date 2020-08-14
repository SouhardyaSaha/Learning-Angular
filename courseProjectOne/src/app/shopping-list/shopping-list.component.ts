import { Component, OnInit } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";

import { ShoppinglistsService } from './shoppinglists.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients: Ingredient[] = []
  constructor(private shoppinglistService: ShoppinglistsService) { }
  ngOnInit() {
    this.Ingredients = this.shoppinglistService.getList()
    this.shoppinglistService.newIngredientsAdded.subscribe(
      (ingredients: Ingredient[]) => this.Ingredients = ingredients
    )
  }

  onNewAddedItem(ingredient: Ingredient) {
    this.shoppinglistService.addToList(ingredient)
  }

}
