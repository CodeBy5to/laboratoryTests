import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        switch (error.status) {
            case 500:
                console.error('Error 500: Internal Server Error');
                alert('Hubo un error en el servidor. Por favor, inténtelo de nuevo más tarde.');
                break;
            case 400:
                console.error('Error 400: Bad request');
                alert('Verifique los datos');
                break;
            case 404:
                console.error('Error 404: Not found');
                alert('El archivo no existe');
                break;
            default:
                console.error(error.message);
                alert('Error inesperado de la Api');
                break;
        }
        return throwError(() => error);
      })
    );
  }
}