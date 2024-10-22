import { Injectable, WritableSignal, signal } from '@angular/core';

import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  products: WritableSignal<Product[]> = signal([]);

  constructor(private apiService: ApiService) {
    this.fetchProducts();
  }

  createProduct(product: Product): Observable<Product> {
    return this.apiService.createProduct(product);
  }

  fetchProducts() {
    this.apiService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }
}
