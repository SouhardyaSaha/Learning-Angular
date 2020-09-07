import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeHomeComponent } from './recipe-book/recipe-home/recipe-home.component';
import { AuthComponent } from "./auth/auth.component";
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

import { RecipeLoadResolver } from './recipe-book/recipe-load-resolver.service';

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/recipes',
  },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    canActivate: [AuthGuard],
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
        resolve: {
          recipe: RecipeLoadResolver
        },
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        resolve: {
          recipe: RecipeLoadResolver
        },
        component: RecipeEditComponent
      }
    ]
  },

  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },

  {
    path: 'error',
    component: ErrorPageComponent,
    data: { message: 'Page Not Found' }
  },

  {
    path: '**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
