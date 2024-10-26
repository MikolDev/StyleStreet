import { Component, effect } from '@angular/core';

import { Product } from '../../../../shared/models/product';
import { ProductsDataService } from '../../../../shared/services/products/products-data.service';

@Component({
  selector: 'app-products-admin-list',
  templateUrl: './products-admin-list.component.html',
  styleUrl: './products-admin-list.component.scss'
})
export class ProductsAdminListComponent {
  products: Product[] = [];
  columns = [
    {
      header: 'ID',
      key: 'id'
    },
    {
      header: 'Title',
      key: 'title'
    },
    {
      header: 'Price',
      key: 'price'
    },
    {
      header: 'Category',
      key: 'category'
    }
  ];
  displayedColumns: string[] = [];

  constructor(private productsDataService: ProductsDataService) {
    this.productsDataService.fetchProducts();
    effect(() => {
      this.products = this.productsDataService.products();
    });
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((column) => column.key);
  }
}
