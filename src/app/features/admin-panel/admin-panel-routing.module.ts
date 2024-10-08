import { RouterModule, Routes } from '@angular/router';

import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: AdminViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
