import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  throwError as observableThrowError,
} from 'rxjs';
import { catchError, map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import * as decode from 'jwt-decode';
import { transformError } from '../common/common';

export interface IUser {
  id: string;
  email: string;
}

export interface IAuthStatus {
  isAuthenticathed: boolean;
  user: IUser;
}

export interface IServerAuthResponse {
  accessToken: string;
  user: IUser;
}

const defaultAuthStatus = {
  isAuthenticathed: false,
  user: null,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService extends CacheService {
  authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthStatus);

  constructor(private httpClient: HttpClient) {
    super();
    this.authStatus.subscribe((authStatus) =>
      this.setItem('authStatus', authStatus)
    );
  }

  private prodAuthProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    return this.httpClient.post<IServerAuthResponse>(
      `${environment.urlBackend}/login`,
      {
        email,
        password,
      }
    );
  }

  login(email: string, password: string): Observable<IAuthStatus> {
    this.logout();

    const loginResponse = this.prodAuthProvider(email, password).pipe(
      map((data) => {
        this.setToken(data.accessToken);
        const user = {
          id: data.user.id,
          email: data.user.email,
        };
        return { isAuthenticathed: true, user } as IAuthStatus;
      }),
      share(),
      catchError(transformError)
    );

    loginResponse.subscribe(
      (res) => {
        this.authStatus.next(res);
        this.authStatus.subscribe((authStatus) =>
          this.setItem('authStatus', authStatus)
        );
      },
      (err) => {
        this.logout();
        return observableThrowError(err);
      }
    );

    return loginResponse;
  }

  logout() {
    this.clearToken();
    this.authStatus.next(defaultAuthStatus);
  }

  private setToken(jwt: string) {
    this.setItem('jwt', jwt);
  }

  private getDecodedToken(): IAuthStatus {
    return decode(this.getItem('jwt'));
  }

  getToken(): string {
    return this.getItem('jwt');
  }

  getAuthStatus(): IAuthStatus {
    return this.getItem('authStatus');
  }

  private clearToken() {
    this.removeItem('jwt');
  }
}
