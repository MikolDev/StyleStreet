import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ProductListViewComponent } from './product-list/pages/product-list-view/product-list-view.component';


@NgModule({
  declarations: [
    ProductListViewComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
