import { Injectable } from '@angular/core';
import { FoodItem, Restaurant } from '../../interfaces/restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly localStorageKey = 'cart';
  private cart: { restaurant: Restaurant, items: FoodItem[] } | null = null;

  constructor() {
    this.loadCart();
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  private loadCart(): void {
    if (this.isLocalStorageAvailable()) {
      const cart = localStorage.getItem(this.localStorageKey);
      if (cart) {
        this.cart = JSON.parse(cart);
      }
    }
  }

  private saveCart(): void {
    if (this.isLocalStorageAvailable() && this.cart) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart));
    }
  }

  addToCart(restaurant: Restaurant, item: FoodItem): void {
    if (this.cart && this.cart.restaurant.restaurant_name !== restaurant.restaurant_name) {
      alert('You can only order from one restaurant at a time.');
      return;
    }

    if (!this.cart) {
      this.cart = { restaurant, items: [] };
    }

    const existingItem = this.cart.items.find(cartItem => cartItem.food_name === item.food_name);
    if (existingItem) {
      existingItem.count = (existingItem.count ?? 0) + (item.count ?? 0);
    } else {
      this.cart.items.push({ ...item });
    }

    this.saveCart();
  }

  updateItemCount(item: FoodItem, count: number): void {
    if (this.cart) {
      const existingItem = this.cart.items.find(cartItem => cartItem.food_name === item.food_name);
      if (existingItem) {
        existingItem.count = count;
        if (existingItem.count <= 0) {
          this.cart.items = this.cart.items.filter(cartItem => cartItem.food_name !== item.food_name);
        }
        this.saveCart();
      }
    }
  }

  getTotal(): number {
    if (!this.cart) {
      return 0;
    }
    return this.cart.items.reduce((total, item) => total + (item.food_price * (item.count ?? 0)), 0);
  }

  getCart(): { restaurant: Restaurant, items: FoodItem[] } | null {
    return this.cart;
  }

  clearCart(): void {
    this.cart = null;
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.localStorageKey);
    }
  }
}