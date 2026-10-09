import { Injectable } from '@angular/core';
import { defer, delay, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { LoginRequest, LoginResponse } from './models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
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
}
