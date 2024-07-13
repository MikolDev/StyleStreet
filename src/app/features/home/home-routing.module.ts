import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './pages/home-view/home-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
