import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/recipe-book/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  item: Recipe

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (item: Recipe) => this.item = item
    )
  }

  addMultipleIngredientsToShoppingList() {
    this.recipeService.addMultipleToShoppingList(this.item.ingredients)
  }

}
