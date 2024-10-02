import { Injectable, WritableSignal, signal } from '@angular/core';

import { ApiService } from '../../../core/services/api.service';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesDataService {
  categories: WritableSignal<Category[]> = signal([])

  constructor(private apiService: ApiService) {
    this.apiService.getCategories().subscribe((categories) => {
      this.categories.set(categories);
    });
  }

  getCategoriesNames(): string[] {
    const names: string[] = [];
    this.categories().forEach(category => {
      names.push(category.name);
    })
    return names;
  }
}
