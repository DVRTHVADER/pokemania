import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = new LoginModel('', '', false);
  isLoading = false;

  constructor(private router: Router) {}

  login(): void {
    // simple validation
    if (!this.loginModel.username || !this.loginModel.password) {
      alert('Enter trainer name and secret code');
      return;
    }

    // show loader
    this.isLoading = true;

    // simulate auth delay
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']); // ✅ must match routes
    }, 1200);
  }
}
