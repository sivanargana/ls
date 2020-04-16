import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
@Injectable()
export class HI implements HttpInterceptor {
    constructor(private router: Router, private api: ApiService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        const authreq = req.clone({ setHeaders: { Authorization: token } })
        return next.handle(authreq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401) {
                    console.log('Unauthorized')
                    localStorage.removeItem('token');
                    this.router.navigate(['/sign-in']);
                    this.api.toast.fire({
                        icon: 'error',
                        title: 'Unauthorized'
                    })

                }
                if (error.status == 400) {
                    console.log('Bad Request')
                    this.api.toast.fire({
                        icon: 'error',
                        title: 'Bad Request'
                    })
                }
                return throwError(error);
            })
        );
    }
}
