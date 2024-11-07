import { KeyValuePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FoodItem, MenuCategory, Restaurant } from '../../interfaces/restaurant.interface';
import { FavService } from '../../services/fav/fav.service';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [NgFor, KeyValuePipe, RouterLink],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favorites: { [key: string]: Restaurant } = {};
  restaurant_data!: Restaurant;
  menu_list!: MenuCategory[];

  constructor(private restaurantService: RestaurantService
    , private favService: FavService) { }

  ngOnInit(): void {
    this.favorites = this.favService.loadFavorites();
    
  }

  toggleFavorite(category: MenuCategory, item: FoodItem, restaurant: string): void {
    this.restaurant_data = this.restaurantService.getMenuList(restaurant);
    this.menu_list = this.restaurant_data.menu.map(category => ({
      ...category,
      isOpen: true,
      food_items: category.food_items.map(item => ({ ...item, count: 0 }))
    }));
  
    const categoryIndex = this.menu_list.findIndex(cat => cat.menu_category === category.menu_category);
    const itemIndex = this.menu_list[categoryIndex]?.food_items.findIndex(food => food.food_name === item.food_name);
  
    if (categoryIndex > -1 && itemIndex > -1) {
      this.favService.toggleFavorite(categoryIndex, itemIndex, this.restaurant_data, this.menu_list);
      
    }
    this.favorites = this.favService.loadFavorites();
  }

  isFavorite(item: FoodItem, restaurant: string): boolean {
    this.restaurant_data = this.restaurantService.getMenuList(restaurant);
    return this.favService.isFavorite(item, this.restaurant_data);
  }
}
