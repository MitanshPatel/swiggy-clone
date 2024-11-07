import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { FoodCategoryService } from '../../services/category/food-category.service';
import { NgFor } from '@angular/common';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { Restaurant } from '../../interfaces/restaurant.interface';
import { RestaurantCardComponent } from '../../components/restaurant-card/restaurant-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RestaurantCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  categories: Category[] = [];
  restaurant_data: Restaurant[] = [];
  foodCategoryService: FoodCategoryService = new FoodCategoryService();
  restaurantService: RestaurantService = new RestaurantService();

  ngOnInit(): void{
    this.categories = this.foodCategoryService.getCategories();
    this.restaurant_data = this.restaurantService.getRestaurantList();
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
