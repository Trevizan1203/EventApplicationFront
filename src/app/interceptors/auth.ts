import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenJwt = sessionStorage.getItem('token');
    console.log("cheguei");
    console.log("teste", req);
    if (tokenJwt) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenJwt}`
        }
      });
      console.log("testeNOVo", req);
    }
    return next.handle(req);
  }
}
