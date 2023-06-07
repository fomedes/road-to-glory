import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, logout } from '../actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlUserApi: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {
    this.urlUserApi = 'http://127.0.0.1:8000/api/users/login';
  }

  login(email: string, password: string): void {
    console.log(`${email}, ${password}`);

    this.http.post<any>(`${this.urlUserApi}`, { email, password }).subscribe(
      (response) => {
        const userId = response;

        localStorage.setItem('userId', userId);
        localStorage.setItem('isLoggedIn', 'true');
        this.store.dispatch(login());

        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');

    this.store.dispatch(logout());
  }
}
