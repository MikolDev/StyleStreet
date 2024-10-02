import { FormControl, FormGroup } from '@angular/forms';

import { CategoriesDataService } from '../../../../shared/services/categories/categories-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss'
})
export class AddProductFormComponent {
  categoriesNames: string[] = [];
  productForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private categoriesDataService: CategoriesDataService) {}

  ngOnInit(): void {
    this.categoriesNames = this.categoriesDataService.getCategoriesNames();
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.productForm.reset()
  }
}
