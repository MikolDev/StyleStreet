import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ProductDetailsViewComponent } from './pages/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './pages/product-list-view/product-list-view.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { ProductsListFilterComponent } from './components/products-list-filter/products-list-filter.component';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListViewComponent,
    ProductTileComponent,
    ProductDetailsViewComponent,
    ProductsListFilterComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIcon,
    MatButtonModule
  ]
})
export class ProductsListModule { }
