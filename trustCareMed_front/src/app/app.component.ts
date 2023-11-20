

import { Component } from '@angular/core';
import { AuthService } from './services/auth-service.service';// Import your authentication service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedPatient = false;

  constructor(private authService: AuthService) {
    // Subscribe to authentication service to update login status
    this.authService.isLoggedPatient.subscribe((status) => {
      console.log('Login Status Updated:', status);
      this.isLoggedPatient = status;
    });
  }
}
