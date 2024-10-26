import { Injectable, WritableSignal, signal } from '@angular/core';

import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  products: WritableSignal<Product[]> = signal([]);

  constructor(private apiService: ApiService) {}

  createProduct(product: Product): Observable<Product> {
    return this.apiService.createProduct(product);
  }

  fetchProducts(categoryId?: number) {
    this.apiService.getProducts(categoryId).subscribe((products) => {
      this.products.set(products);
    });
  }
}
