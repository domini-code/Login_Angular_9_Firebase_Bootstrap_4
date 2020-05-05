import { AuthService } from '@auth/services/auth.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  userEmail = new FormControl('');
  constructor(private authSvc: AuthService, private router: Router) {}

  async onReset() {
    try {
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Email sent, check your inbox!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
