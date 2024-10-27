import { Component, ViewChild, effect } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../../../shared/models/product';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrl: './product-list-view.component.scss'
})
export class ProductListViewComponent {
  products: Product[] = [];
  paginatorDataSource = new MatTableDataSource(this.products);
  lowValue = 0;
  highValue = 20;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productsListService: ProductsListService) {
    effect(() => {
      this.products = this.productsListService.products();
    });
  }

  ngAfterViewInit(): void {
    this.paginatorDataSource.paginator = this.paginator;
  }

  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

}
