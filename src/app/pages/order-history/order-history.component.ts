import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: any[] = [];

  constructor(private http: HttpClient, private loginService: LoginService) {}

  async ngOnInit() {
    if (this.isLoggedIn()) {
      const data = await lastValueFrom(this.http.get<any[]>("https://6728bad36d5fa4901b6ab08e.mockapi.io/order-history"));
      console.log(data);
      this.orderHistory = data;
    }
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  getTotalPrice(order: any): number {
    return order.items.reduce((total: number, item: any) => total + (item.food_price * item.count), 0);
  }
}