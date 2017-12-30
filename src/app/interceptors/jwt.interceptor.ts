import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const jwt = window.localStorage.getItem('crate-jwt-token');
        if (jwt) {
            const jwtRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${jwt}`
                }
              });
              return next.handle(jwtRequest);
        }
        return next.handle(request);
    }
}
