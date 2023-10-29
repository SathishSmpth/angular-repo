import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './auth.service';
import { Observable, exhaustMap, take } from 'rxjs';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: UserAuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }

        const modifiedReq = req.clone({
          headers: new HttpHeaders().set(
            'Authorization',
            `Bearer ${user.token}`
          ), 
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
