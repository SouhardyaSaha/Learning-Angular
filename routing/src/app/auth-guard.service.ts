import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivateChild, CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  // async for testing
  // async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
  //   try {
  //     const isLoggedin = await this.authService.isAuthenticated()
  //     if (isLoggedin) return true
  //     else this.router.navigate(['/']);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // Course COde
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if(authenticated) return true
        else this.router.navigate(['/'])
      }
    )
  }

  // for chilren routes
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }
}
