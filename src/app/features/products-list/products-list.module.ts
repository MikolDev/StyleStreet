import { CommonModule } from '@angular/common';
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
    ReactiveFormsModule
  ]
})
export class ProductsListModule { }
