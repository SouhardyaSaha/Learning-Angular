import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/recipe-book/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  item: Recipe

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.item = this.recipeService.getRecipe(+params['id'])
      }
    )
  }

  addMultipleIngredientsToShoppingList() {
    this.recipeService.addMultipleToShoppingList(this.item.ingredients)
  }

  onEdit() {
    // this.router.navigate(['/recipes', this.item.id, 'edit'])
    this.router.navigate(['../edit'], {relativeTo: this.route})
  }

  onDelete() {
    console.log('item delte');

  }

}
