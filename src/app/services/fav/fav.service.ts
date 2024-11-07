import { Injectable } from '@angular/core';
import { FoodItem, MenuCategory, Restaurant } from '../../interfaces/restaurant.interface';
import { RestaurantService } from '../restaurant/restaurant.service';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  favorites: { [key: string]: Restaurant } = {};

  constructor() {
  }

  loadFavorites(): { [key: string]: Restaurant }{
    var favorite = localStorage.getItem('favorites');
    if (favorite) {
      this.favorites = JSON.parse(favorite);
    }
    return this.favorites;
  }

  saveFavorites(favorite: { [key: string]: Restaurant }): void {
    localStorage.setItem('favorites', JSON.stringify(favorite));
  }

  isFavorite(item: FoodItem, restaurant_data:Restaurant): boolean {
    const restaurantName = restaurant_data.restaurant_name;
    return this.favorites[restaurantName]?.menu.some(favCategory =>
      favCategory.food_items.some(favItem => favItem.food_name === item.food_name)
    );
  }

  toggleFavorite(categoryIndex: number, itemIndex: number,  restaurant_data:Restaurant, menu_list : MenuCategory[]): void {
    const item = menu_list[categoryIndex]?.food_items[itemIndex];
    if (item) {
      const restaurantName = restaurant_data.restaurant_name;
      if (!this.favorites[restaurantName]) {
        this.favorites[restaurantName] = {
          ...restaurant_data,
          menu: []
        };
      }

      const categoryIndexInFavorites = this.favorites[restaurantName].menu.findIndex(
        favCategory => favCategory.menu_category === menu_list[categoryIndex].menu_category
      );

      if (categoryIndexInFavorites > -1) {
        const foodIndexInFavorites = this.favorites[restaurantName].menu[categoryIndexInFavorites].food_items.findIndex(
          favItem => favItem.food_name === item.food_name
        );

        if (foodIndexInFavorites > -1) {
          this.favorites[restaurantName].menu[categoryIndexInFavorites].food_items.splice(foodIndexInFavorites, 1);
          if (this.favorites[restaurantName].menu[categoryIndexInFavorites].food_items.length === 0) {
            this.favorites[restaurantName].menu.splice(categoryIndexInFavorites, 1);
          }
        } else {
          this.favorites[restaurantName].menu[categoryIndexInFavorites].food_items.push(item);
        }
      } else {
        this.favorites[restaurantName].menu.push({
          menu_category: menu_list[categoryIndex].menu_category,
          food_items: [item]
        });
      }

      if (this.favorites[restaurantName].menu.length === 0) {
        delete this.favorites[restaurantName];
      }

      this.saveFavorites(this.favorites);
    }
  }
}
