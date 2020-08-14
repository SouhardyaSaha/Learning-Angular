import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistsService } from '../shopping-list/shoppinglists.service';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      `it's just delicious`,
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Sause', 12)
      ]
    ),
  ]

  selectedRecipe = new EventEmitter<Recipe>()

  constructor(private shoppinglistsService: ShoppinglistsService) {}

  getRecipes() {
    return this.recipes.slice()
  }

  addToRecipes(recipe: Recipe) {
    this.recipes.push(recipe)
  }

  addMultipleToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistsService.addMultipletoList(ingredients)
  }
}
