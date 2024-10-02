import { CategoriesDataService } from '../../../../shared/services/categories/categories-data.service';
import { Category } from '../../../../shared/models/category';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  categories: Category[] = [];
  imgSource: string = '';
  currentIndex: number = 0;

  constructor(private categoriesDataService: CategoriesDataService) {}

  ngOnInit(): void {
    this.categories = this.categoriesDataService.categories();
    console.log(this.categories)

    // interval(5000).subscribe(() => {
    //   console.log(this.categories)
    //   this.imgSource = this.categories[this.currentIndex].image;
    //   if (this.currentIndex == this.categories.length - 1) {
    //     this.currentIndex = 0;
    //   } else {
    //     this.currentIndex += 1;
    //   }
    // });
  }
}
