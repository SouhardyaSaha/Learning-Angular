import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistsService } from '../shopping-list/shoppinglists.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'New Item',
      `it's just delicious`,
      'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/04/2ambdxg.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Sause', 12)
      ]
    ),
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

  newRecipesAdded = new Subject<Recipe[]>()

  constructor(private shoppinglistsService: ShoppinglistsService) { }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(id: number) {
    const recipe = this.recipes[+id]
    return recipe
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    console.log(this.recipes.slice());

    this.newRecipesAdded.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[+index] = recipe
    this.newRecipesAdded.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.newRecipesAdded.next(this.recipes.slice())
  }

  addMultipleToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistsService.addMultipletoList(ingredients)
  }

}
