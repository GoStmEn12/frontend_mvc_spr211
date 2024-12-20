import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[FormsModule,RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl:'./register.component.css'
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.user).subscribe(() => {
      alert('Регистрация успешна!');
    });
  }
}
