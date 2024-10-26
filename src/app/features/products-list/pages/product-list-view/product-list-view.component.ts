import { Component, effect } from '@angular/core';

import { Product } from '../../../../shared/models/product';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrl: './product-list-view.component.scss'
})
export class ProductListViewComponent {
  products: Product[] = [];

  constructor(private productsListService: ProductsListService) {
    effect(() => {
      this.products = this.productsListService.products();
    });
  }

}
