import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ProductsAdminListComponent } from './components/products-admin-list/products-admin-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminViewComponent,
    AddProductFormComponent,
    ProductsAdminListComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class AdminPanelModule { }
