import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IAuthStatus } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  protected currentAuthStatus: IAuthStatus;

  constructor(protected authService: AuthService, protected router: Router) {
    this.authService.authStatus.subscribe((authStatus) => {
      this.currentAuthStatus = authStatus;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLogin(next);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLogin(next);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  protected checkLogin(route?: ActivatedRouteSnapshot) {
    // let roleMatch = true;
    let params: any;

    if (!this.currentAuthStatus.isAuthenticathed) {
      // this.showAlert(this.currentAuthStatus.isAuthenticathed)
      this.router.navigate(['login', params || {}]);
      return false;
    }
    return true;
  }
}

