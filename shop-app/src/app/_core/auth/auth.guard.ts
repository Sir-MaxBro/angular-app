import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { RoutingKeys } from '../routing/routing-keys.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isUserLogin: boolean = this.authService.isUserLogin();
    if (isUserLogin) {
      return true;
    }

    this.router.navigate([RoutingKeys.Auth], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
