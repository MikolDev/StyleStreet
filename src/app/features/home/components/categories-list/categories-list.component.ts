import { CategoriesDataService } from '../../services/categories-data.service';
import { Category } from '../../../../shared/models/category';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
  categories: Category[] = [];

  constructor(private categoriesDataService: CategoriesDataService) { }

  ngOnInit(): void {
    this.categories = this.categoriesDataService.categories();
  }

}
