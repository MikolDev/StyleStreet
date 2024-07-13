import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductDetailsViewComponent } from './pages/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './pages/product-list-view/product-list-view.component';

const routes: Routes = [
  { path: '', component: ProductListViewComponent },
  { path: 'details', component: ProductDetailsViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListRoutingModule { }
