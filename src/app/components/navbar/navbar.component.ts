import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { LoginService } from '../../services/login/login.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isSignUpModalOpen = false;
  isLogin = false;
  username: string = '';
  cartItemCount: number = 0;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    this.updateCartItemCount();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showSignUpModal() {
    this.isSignUpModalOpen = true;
  }

  hideSignUpModal() {
    this.isSignUpModalOpen = false;
  }

  showLogin() {
    this.isLogin = true;
  }

  hideLogin() {
    this.isLogin = false;
  }

  async onSubmitSignUp(form: any): Promise<void> {
    if (form.valid) {
      const formData: SignUpData = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password
      };

      if (formData.password !== form.value.confirmPassword) {
        alert('Password and Confirm Password do not match');
        return;
      }

      try {
        const res = await lastValueFrom(this.http.post("https://6728bad36d5fa4901b6ab08e.mockapi.io/auth", formData));
        console.log(res);
        this.hideSignUpModal();
      } catch (e) {
        console.log(e);
      }
    } else {
      console.error('Form is invalid');
    }
  }

  async onSubmitLogIn(form: any): Promise<void> {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;

      try {
        const users = await lastValueFrom(this.http.get<any[]>("https://6728bad36d5fa4901b6ab08e.mockapi.io/auth"));
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          this.username = user.name;
          this.loginService.logIn(user);
          this.hideSignUpModal();
        } else {
          alert('Invalid email or password');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.error('Form is invalid');
    }
  }

  logOut(): void {
    this.loginService.logOut();
    this.username = ''; // Clear the username
    alert('Logged out successfully');
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  updateCartItemCount(): void {
    const cart = this.cartService.getCart();
    this.cartItemCount = cart ? cart.items.reduce((count, item) => count + (item.count ?? 0), 0) : 0;
  }
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
}