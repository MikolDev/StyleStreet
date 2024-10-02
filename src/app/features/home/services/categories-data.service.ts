import { Injectable, WritableSignal, signal } from '@angular/core';

import { ApiService } from '../../../core/services/api.service';
import { Category } from '../../../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesDataService {
  categories: WritableSignal<Category[]> = signal([])

  constructor(private apiService: ApiService) {
    this.apiService.getCategories().subscribe((categories) => {
      this.categories.set(categories)
    });
  }
}
