import { Component, Input } from '@angular/core';

import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'div[app-product-tile]',
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {
  }
}
