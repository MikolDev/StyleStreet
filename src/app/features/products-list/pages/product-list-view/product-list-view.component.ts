import { Component, ViewChild, effect } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../../../shared/models/product';
import { ProductDetailsViewComponent } from '../product-details-view/product-details-view.component';
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

  constructor(public dialog: MatDialog, private productsListService: ProductsListService) {
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

  showProduct(clickedProduct: Product) {
    const dialogRef = this.dialog.open(ProductDetailsViewComponent, {
      width: '90vw',
      data: { product: clickedProduct }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TOAST
    });
  }
}
