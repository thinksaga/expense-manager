import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    console.log('Url: ' + url);
    let val = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == 'true') {
      if (url == '/login') this.router.parseUrl('/expenses');
      else return true;
    } else {
      return this.router.parseUrl('/login');
    }
    return true;
  }
}
