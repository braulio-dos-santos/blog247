import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { LogoutService } from './logout.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private loginService: LoginService,
    private logoutService: LogoutService
  ) {}

  login(email: string, password: string) {
    return this.loginService.execute(email, password);
  }

  logout() {
    return this.logoutService.execute();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user_token');
  }

  getToken(): string | null {
    return localStorage.getItem('user_token');
  }
}
