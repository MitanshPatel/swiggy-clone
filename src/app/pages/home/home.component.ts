import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { FoodCategoryService } from '../../services/category/food-category.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  categories: Category[] = [];
  foodCategoryService: FoodCategoryService = new FoodCategoryService();

  ngOnInit(): void{
    this.categories = this.foodCategoryService.getCategories();
  }

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -350,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 350, 
      behavior: 'smooth'
    });
  }
}
