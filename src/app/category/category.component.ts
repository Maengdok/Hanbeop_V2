import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories?: Category[];
  currentCategory: Category = {};
  currentIndex = 0;

  @Output() chosenCategory = new EventEmitter<number>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.retrieveCategories();
    this.chosenCategory.emit(this.currentIndex);
  }

  retrieveCategories(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    },
    error => {
      console.log(error);
    });
  };

  sendCategory(category: Category, index: number, elem: HTMLElement): void {
    if (this.currentIndex != 0) {
      for (let i = 0; i <= 6; i++) {
        if (document.getElementById("category#" + i.toString())?.classList.contains("selectedCategory")) {
          document.getElementById("category#" + i.toString())?.classList.replace("selectedCategory", "unselectedCategory"); 
        }
      }
    }
    
    this.currentCategory = category;
    this.currentIndex = index + 1;
    elem.className = "unselectedCategory" ? "selectedCategory" : "unselectedCategory";
    this.chosenCategory.emit(this.currentIndex);
  }

  clearCategory(): void {
    if(this.currentIndex != 0) {
      for (let i = 0; i <= 6; i++) {
        if (document.getElementById("category#" + i.toString())?.classList.contains("selectedCategory")) {
          document.getElementById("category#" + i.toString())?.classList.replace("selectedCategory", "unselectedCategory"); 
        }
      }

      this.currentIndex = 0;
      this.chosenCategory.emit(this.currentIndex);
    }
  }
}
