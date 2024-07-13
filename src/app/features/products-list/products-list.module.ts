import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailsViewComponent } from './pages/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './pages/product-list-view/product-list-view.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
  declarations: [
    ProductListViewComponent,
    ProductTileComponent,
    ProductDetailsViewComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule
  ]
})
export class ProductsListModule { }
