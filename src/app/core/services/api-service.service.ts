import { Observable, catchError, of } from 'rxjs';

import { Category } from '../../shared/models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://api.escuelajs.co/api/v1/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = this.baseUrl + 'products';
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getCategories(): Observable<Category[]> {
    const url = this.baseUrl + 'categories';
    return this.http.get<Category[]>(url)
      .pipe(
        catchError(this.handleError<Category[]>('getCategories', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
