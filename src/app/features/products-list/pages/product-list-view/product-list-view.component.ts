import { ApiService } from '../../../../core/services/api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrl: './product-list-view.component.scss'
})
export class ProductListViewComponent {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((products) => {
      console.log(products)
    })
  }

}
