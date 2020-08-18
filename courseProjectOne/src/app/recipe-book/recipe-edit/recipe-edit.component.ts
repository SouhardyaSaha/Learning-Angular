import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe
  editModule: boolean = false
  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipesService.getRecipe(+params['id'])
        this.editModule = params['id'] != null
        console.log(this.editModule)
      }
    )
  }

}
