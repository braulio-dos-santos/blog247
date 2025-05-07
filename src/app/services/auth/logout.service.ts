import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LogoutService {
  private API_URL = 'http://localhost:3333/api/v1/users/logout';

  constructor(private http: HttpClient, private router: Router) {}

  execute() {
    return this.http.post<any>(this.API_URL, {}).pipe(
      tap(() => {
        localStorage.removeItem('user_token');
        this.router.navigate(['/login']);
      })
    );
  }
}