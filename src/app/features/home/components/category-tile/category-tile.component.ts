import { Component, Input } from '@angular/core';

import { Category } from '../../../../shared/models/category';

@Component({
  selector: 'div[app-category-tile]',
  templateUrl: './category-tile.component.html',
  styleUrl: './category-tile.component.scss'
})
export class CategoryTileComponent {
  @Input() category?: Category;

}
