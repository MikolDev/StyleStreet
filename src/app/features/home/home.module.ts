import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryTileComponent } from './components/category-tile/category-tile.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { NgModule } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    HomeViewComponent,
    CategoriesListComponent,
    CategoryTileComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
