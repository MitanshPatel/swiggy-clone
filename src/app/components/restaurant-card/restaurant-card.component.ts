import { Component, Input } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() restaurant_data!: Restaurant;

  constructor(private router: Router){}

  navigateToRestaurant(){
    this.router.navigate(['/restaurant', this.restaurant_data.restaurant_name]);
  }
}
