import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from '../common/services/auth.service';

@Injectable()
export class FavoritesGuard implements CanActivate {


  constructor(private _auth: AuthService, private routes: Router) {

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {


    console.log(this._auth);


    console.log("!!!");
    return true;


    // if (isAuth) {
    //   return true;
    // } else {
    //   this.routes.navigate(['']);
    //   return false;
    // }

  }
}