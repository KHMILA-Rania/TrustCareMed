import { Component } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    cin: '',
    matricule: '',
    address: '',
    dob: '',
    specialty: '',
    gender: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
  }

}
