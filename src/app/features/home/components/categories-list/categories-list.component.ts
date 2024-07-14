import { ApiService } from '../../../../core/services/api-service.service';
import { Category } from '../../../../shared/models/category';
import { Component } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
  categories: Category[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().pipe(
      tap((categories) => {
        this.categories = categories;
      })
    ).subscribe();
  }

}
