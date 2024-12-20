import { Component } from '@angular/core';
import { AppRoutingModule, routes } from './app.routes'; // Маршрутизация
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
//   imports: [ AppRoutingModule],
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    constructor(private authService: AuthService, private router : Router) {}

    logout(): void {
      this.authService.logout();
      this.router.navigate(['/login']);
    }

}
