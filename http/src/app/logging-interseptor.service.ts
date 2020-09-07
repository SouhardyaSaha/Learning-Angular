import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(req.url === 'someurl') {
    //   // a certain use case for a certain url
    // }
    const modifiedReq = req.clone({
      headers: req.headers.append('form-logging', 'new')
    })
    console.log('Outgoing Request to url: ', req.url);
    console.log(modifiedReq.headers);

    return next.handle(modifiedReq)
      .pipe(
        tap(
          event => {
            if(event.type === HttpEventType.Response) {
              console.log('Incoming Response!');
              console.log(event.body);
            }
          }
        )
      )
  }
}
