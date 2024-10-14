import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private apiService: ApiService) {}

  createProduct(product: Product): Observable<Product> {
    return this.apiService.createProduct(product);
  }
}
