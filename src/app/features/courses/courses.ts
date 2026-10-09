import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  private readonly auth = inject(AuthService);

  onLogout(): void {
    this.auth.logout();
  }
}

