import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuCategory, Restaurant, FoodItem } from '../../interfaces/restaurant.interface';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { CartService } from '../../services/cart/cart.service';
import { FavService } from '../../services/fav/fav.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rest_name: string = '';
  restaurant_data!: Restaurant;
  menu_list!: MenuCategory[];
  favorites: { [key: string]: Restaurant } = {};

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService,
    private favService: FavService
  ) {}

  ngOnInit(): void {
    this.rest_name = this.route.snapshot.paramMap.get('restaurant_name') || '';
    this.restaurant_data = this.restaurantService.getMenuList(this.rest_name);
    this.menu_list = this.restaurant_data.menu.map(category => ({
      ...category,
      isOpen: true,
      food_items: category.food_items.map(item => ({ ...item, count: 0 }))
    }));
    this.favorites = this.favService.loadFavorites();
  }

  toggleCategory(index: number): void {
    this.menu_list[index].isOpen = !this.menu_list[index].isOpen;
  }

  incrementCount(categoryIndex: number, itemIndex: number): void {
    const item = this.menu_list[categoryIndex]?.food_items[itemIndex];
    if (item) {
      item.count = (item.count ?? 0) + 1;
    }
  }

  decrementCount(categoryIndex: number, itemIndex: number): void {
    const item = this.menu_list[categoryIndex]?.food_items[itemIndex];
    if (item && item.count! > 0) {
      item.count!--;
    }
  }

  addToCart(categoryIndex: number, itemIndex: number): void {
    const item = this.menu_list[categoryIndex]?.food_items[itemIndex];
    if (item && item.count! > 0) {
      this.cartService.addToCart(this.restaurant_data, item);
    }
  }

  toggleFavorite(categoryIndex: number, itemIndex: number): void {
    this.favService.toggleFavorite(categoryIndex, itemIndex, this.restaurant_data, this.menu_list);
    this.favorites = this.favService.loadFavorites();
  }

  isFavorite(item: FoodItem): boolean {
    return this.favService.isFavorite(item, this.restaurant_data);
  }
}