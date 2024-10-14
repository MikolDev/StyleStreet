import { Observable, catchError, of } from 'rxjs';

import { Category } from '../../shared/models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = this.baseUrl + 'products/';
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getCategories(): Observable<Category[]> {
    const url = this.baseUrl + 'categories/';
    return this.http.get<Category[]>(url)
      .pipe(
        catchError(this.handleError<Category[]>('getCategories', []))
      );
  }

  createProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + 'products/';
    console.log('api')
    return this.http.post<Product>(url, product)
      .pipe(
        catchError(this.handleError<Product>('createProduct'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
