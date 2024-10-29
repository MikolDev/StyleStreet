import { Component, Inject } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesDataService } from '../../../../shared/services/categories/categories-data.service';
import { Category } from '../../../../shared/models/category';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrl: './product-details-view.component.scss'
})
export class ProductDetailsViewComponent {
  product!: Product;
  category!: Category | undefined;

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private categoriesDataService: CategoriesDataService
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {
    this.category = this.categoriesDataService.categories().find(category => category.id == this.product.category);
  }
}
