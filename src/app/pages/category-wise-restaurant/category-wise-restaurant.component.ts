import { Component } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant.interface';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { NgFor } from '@angular/common';
import { RestaurantCardComponent } from '../../components/restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-category-wise-restaurant',
  standalone: true,
  imports: [NgFor, RestaurantCardComponent],
  templateUrl: './category-wise-restaurant.component.html',
  styleUrl: './category-wise-restaurant.component.css'
})
export class CategoryWiseRestaurantComponent {
  category_name: string = '';
  restaurants: Restaurant[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.category_name = this.route.snapshot.paramMap.get('category_name') || '';
    this.restaurants = this.restaurantService.getRestaurantsByCategory(this.category_name);
  }
}
