import { Injectable } from '@angular/core';
import { User } from '../interface/user.inteface';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { UserAuthResponse } from '../interface/auth.interface';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { UserModel } from './user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(userData: User) {
    return this.http
      .post<UserAuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        },
        {
          params: new HttpParams().set(
            'key',
            'AIzaSyDcRNV0JCwASP9EwnlxAV_M26mh6shMb8M'
          ),
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthentication(resData))
      );
  }

  login(userData: User) {
    return this.http
      .post<UserAuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        },
        {
          params: new HttpParams().set(
            'key',
            'AIzaSyDcRNV0JCwASP9EwnlxAV_M26mh6shMb8M'
          ),
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthentication(resData))
      );
  }

  autoLogin() {
    const userData: any = localStorage.getItem('userData');
    if (!userData) {
      return;
    }
    const userDetails: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: Date;
    } = JSON.parse(userData);

    const loadUser = new UserModel(
      userDetails.email,
      userDetails.id,
      userDetails._token,
      userDetails._tokenExpirationDate
    );

    if (loadUser.token) {
      this.user.next(loadUser);
    }
    this.router.navigate(['/home']);
  }

  logut() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }
  handleAuthentication(res: UserAuthResponse) {
    const expiresIn = new Date(new Date().getTime() + res.expiresIn * 1000);
    const userDetails = new UserModel(
      res.email,
      res.localId,
      res.idToken,
      expiresIn
    );

    this.user.next(userDetails);

    localStorage.setItem('userData', JSON.stringify(userDetails));
  }

  handleError(errRes: HttpErrorResponse) {
    switch (errRes.error.error.message) {
      case 'EMAIL_EXISTS':
        return throwError('Email is already exists!');
      case 'EMAIL_NOT_FOUND':
        return throwError('Email is incorrect!');
      case 'INVALID_PASSWORD':
        return throwError('Password is incorrect!');
      default:
        return throwError('Something went wrong!');
    }
  }
}
