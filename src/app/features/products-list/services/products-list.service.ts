import { Injectable, computed } from '@angular/core';

import { ProductsDataService } from '../../../shared/services/products/products-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  products = computed(() => this.productsDataService.products());

  constructor(private productsDataService: ProductsDataService) {
    this.fetchProducts();
  }

  fetchProducts(categoryId?: number) {
    this.productsDataService.fetchProducts(categoryId);
  }
}
