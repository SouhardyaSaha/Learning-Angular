import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeHomeComponent } from './recipe-book/recipe-home/recipe-home.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/recipes',
  },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RecipeHomeComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id/detail',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  },

  {
    path: 'shopping-list', component: ShoppingListComponent
  },

  {
    path: 'error', component: ErrorPageComponent, data: { message: 'Page Not Found' }
  },

  {
    path: '**', redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
