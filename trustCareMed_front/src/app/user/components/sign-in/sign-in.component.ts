import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string= '';
  password: string = '';
  userType: string= '';

  signIn() {
    // Ajoutez votre logique de connexion ici
    console.log(`Connecté en tant que ${this.email} (${this.userType})`);
  }

}
