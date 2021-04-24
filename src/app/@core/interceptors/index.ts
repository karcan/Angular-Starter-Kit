import { HttpTokenInterceptor } from './http-token.interceptor';
import { HttpLogInterceptor } from './http-log.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HttpEnsureSSLInterceptor } from './http-ensure-ssl.interceptor';
import { HttpBusyInterceptor } from './http-busy.interceptor';
import { HttpAuthInterceptor } from './http-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpLogInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpEnsureSSLInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpBusyInterceptor, multi: true},




]
