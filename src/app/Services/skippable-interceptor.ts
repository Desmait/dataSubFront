import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

export let InterceptorSkipHeader: string;
InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class SkippableInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has(InterceptorSkipHeader)) {
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({headers}));
    }
    const tokenizedReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);

  }

}
