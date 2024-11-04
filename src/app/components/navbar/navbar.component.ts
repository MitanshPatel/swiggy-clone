import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { error } from 'console';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isSignUpModalOpen = false;
  isLogin = false;


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

  constructor(private http: HttpClient) { }

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
          alert('Login successful');
          console.log('User logged in:', user);
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
}


interface SignUpData {
  name: string;
  email: string;
  password: string;
}