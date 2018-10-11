import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const routeUrl = route.routeConfig.path;
    if (!this.auth.isAuthenticated()) {
      if (routeUrl !== '' &&  routeUrl !== 'login') {
        console.error('Effettuare prima il login');
      }
      if (routeUrl !== 'login') {
        this.router.navigate(['login']);
      } else {
        return true;
      }
      return false;
    }
    if (routeUrl === 'login') {
      this.router.navigate(['homepage']);
    }
    return true;
  }
}
