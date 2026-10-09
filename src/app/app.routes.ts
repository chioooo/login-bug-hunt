import { Routes } from '@angular/router';
import { Courses } from './features/courses/courses';
import { Login } from './features/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'courses', component: Courses },
];
