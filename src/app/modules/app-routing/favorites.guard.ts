import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from '../common/services/auth.service';

@Injectable()
export class FavoritesGuard implements CanActivate {


  constructor(private _auth: AuthService, private routes: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(this._auth.isAuth);
    if (this._auth.isAuth) return true;
    this.routes.navigate(['']);
    return false;
  }
}