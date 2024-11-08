import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart/cart.service';
import { FoodItem, Restaurant } from '../../interfaces/restaurant.interface';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cart: { restaurant: Restaurant, items: FoodItem[] } | null = null;
  username: string = '';

  constructor(
    public cartService: CartService,
    private loginService: LoginService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.username = this.loginService.getUsername();
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  updateCartItemCount(item: FoodItem, count: number): void {
    this.cartService.updateItemCount(item, count);
    this.cart = this.cartService.getCart();
  }

  async orderFood(): Promise<void> {
    if (!this.cart) {
      alert('Your cart is empty.');
      return;
    }

    const orderDetails = {
      restaurantName: this.cart.restaurant.restaurant_name,
      items: this.cart.items,
      date: new Date().toISOString()
    };

    try {
      const response = await this.http.post('https://6728bad36d5fa4901b6ab08e.mockapi.io/order-history', orderDetails).toPromise();
      console.log('Order placed successfully:', response);
      alert('Order placed successfully!');
      this.cartService.clearCart();
      this.cart = null;
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  }
}