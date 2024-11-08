import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly localStorageKey = 'user';

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  logIn(user: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  logOut(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  getUser(): any {
    const user = localStorage.getItem(this.localStorageKey);
    return user ? JSON.parse(user) : null;
  }

  getUsername(): string {
    const user = this.getUser();
    return user ? user.name : '';
  }
}