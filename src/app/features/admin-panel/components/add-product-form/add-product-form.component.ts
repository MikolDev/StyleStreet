import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { CategoriesDataService } from '../../../../shared/services/categories/categories-data.service';
import { Category } from '../../../../shared/models/category';
import { Component } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductsDataService } from '../../../../shared/services/products/products-data.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss'
})
export class AddProductFormComponent {
  categories: Category[] = [];
  productForm = new FormGroup({
    title: new FormControl('', [ Validators.required ]),
    price: new FormControl(0, [ Validators.required ]),
    category: new FormControl(0, [ Validators.required ]),
    image: new FormControl('', [ Validators.required ]),
    description: new FormControl('', [ Validators.required ])
  });

  constructor(
    private categoriesDataService: CategoriesDataService,
    private productsDataService: ProductsDataService
  ) {}

  ngOnInit(): void {
    this.categories = this.categoriesDataService.categories();
    // clearing initial '0' value
    this.productForm.get('price')?.reset();
  }

  onSubmit(productFormDirective: FormGroupDirective) {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      const product = formValue as Product;
      this.productsDataService.createProduct(product).subscribe({
        next: (product) => {
          console.log(product);
          this.productForm.reset();
          productFormDirective.resetForm();
        },
        error: (err) => console.log(err)
      });
    }
  }
}
