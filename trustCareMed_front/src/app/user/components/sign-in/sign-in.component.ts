import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  email: string= '';
  password: string = '';
  userType: string= '';
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router,private authService:AuthService) {
   
   
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password: ['', Validators.required],
      role:['',Validators.required]
    });
  }

  signIn() {
    // Ajoutez votre logique de connexion ici
    if (this.loginForm.valid) {
      const { email, password, role } = this.loginForm.value;
      console.log("just before connecting");
      this.http.post('http://localhost:3000/login', { email, password, role }).subscribe({
        next: (response: any) => {
          if (role === 'patient') {
            this.authService.updateLoginStatus(true, false);
            this.router.navigate(['home/patient']);
          } else if (role === 'doctor') {
            this.authService.updateLoginStatus(false, true);
            this.router.navigate(['home/doctor']);
          }





        
        
      
        

        },
        complete:()=>{
          console.log('Subscription completed');
        }
        
      
     
    });
    
  
  }}}



