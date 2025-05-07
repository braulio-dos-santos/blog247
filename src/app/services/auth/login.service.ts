import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private API_URL = 'http://localhost:3333/api/v1/users/login';

  constructor(private http: HttpClient) {}

  execute(email: string, password: string) {
    return this.http.post<any>(this.API_URL, { email, password }).pipe(
      tap((response) => {
        const token = response?.userToken?.token;
        if (token) {
          localStorage.setItem('user_token', token);
        }
      })
    );
  }
}
