import { FormControl, FormGroup } from '@angular/forms';

import { CategoriesDataService } from '../../../../shared/services/categories/categories-data.service';
import { Category } from '../../../../shared/models/category';
import { Component } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'div[app-products-list-filter]',
  templateUrl: './products-list-filter.component.html',
  styleUrl: './products-list-filter.component.scss'
})
export class ProductsListFilterComponent {
  categories: Category[] = [];
  filtersForm = new FormGroup({
    category: new FormControl(0)
  })

  constructor(
    private categoriesDataService: CategoriesDataService,
    private productsListService: ProductsListService
  ) {
    this.categories = this.categoriesDataService.categories();
  }

  categoryChanged() {
    const category = this.filtersForm.get('category')?.value;
    if (category != null) {
      if (category == -1) {
        // all
        this.productsListService.fetchProducts()
      } else {
        this.productsListService.fetchProducts(category);
      }
    }
  }
}
