import { Injectable } from '@angular/core';
import { IProduct } from '../products/product-list/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
httpClientUrl = 'api/products/products.json';

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.httpClient
    .get<IProduct[]>(this.httpClientUrl)
    .pipe(
      tap(seeData => console.log(JSON.stringify(seeData))),
      catchError(this.handlerError)
    );
  }

  private handlerError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
     return throwError(errorMessage);
  }
}
