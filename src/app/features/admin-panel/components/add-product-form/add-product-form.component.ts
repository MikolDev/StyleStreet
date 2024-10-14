import { Component, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { CategoriesDataService } from '../../../../shared/services/categories/categories-data.service';
import { Category } from '../../../../shared/models/category';
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
  }

  onSubmit(productFormDirective: FormGroupDirective) {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      if (!formValue.price) {
        formValue.price = 0;
      }
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
