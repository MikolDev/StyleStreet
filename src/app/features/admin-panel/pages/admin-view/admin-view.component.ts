import { AddProductFormComponent } from '../../components/add-product-form/add-product-form.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss'
})
export class AdminViewComponent {

  constructor(public dialog: MatDialog) {}

  openAddProductDialog() {
    const dialogRef = this.dialog.open(AddProductFormComponent, {
      width: '600px'
    })

    dialogRef.afterClosed().subscribe(result => {
      // TOAST
    });
  }
}
