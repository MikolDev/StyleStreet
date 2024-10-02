import { ApiService } from '../../../../core/services/api.service';
import { Component } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrl: './product-list-view.component.scss'
})
export class ProductListViewComponent {
  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().pipe(
      tap((products) => {
        this.products = products;
      })
    ).subscribe();
  }
}
