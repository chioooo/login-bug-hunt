import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { defer, delay, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { LoginRequest, LoginResponse } from './models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);
  private readonly tokenKey = 'token';

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return defer(() => {
      console.log('[AuthService] Petición de login enviada', credentials.username);

      return of(credentials).pipe(
        delay(800),
        switchMap(({ username, password }) =>
          username === 'admin' && password === '1234'
            ? of<LoginResponse>({ token: 'fake-jwt-token', role: 'admin' })
            : throwError(() => new Error('Credenciales inválidas')),
        ),
      );
    }).pipe(tap((response) => localStorage.setItem(this.tokenKey, response.token)));
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}

