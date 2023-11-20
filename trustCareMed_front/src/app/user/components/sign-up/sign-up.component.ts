import { Component } from '@angular/core';
import { Doctor } from 'src/app/interfaces/Doctor';
import { DoctorService } from 'src/app/services/doctor-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formData: Doctor = {
    
    id :0,
    name: '',
    email: '',
    phone: 0,
    cin: '',
    matricule: '',
    password:'',
   dateOfBirth:'',
    speciality: '',
    role: '',
    adress:'',

  };

  
  constructor(private doctorService: DoctorService){}

  onSubmit(){
    this.doctorService.addDoctor(this.formData).subscribe(()=>{
      this.formData={
        id:0,
        name: '',
        email: '',
        phone:0 ,
        cin: '',
        matricule: '',
        password:'',
       dateOfBirth:'',
        speciality: '',
        role: '',
        adress:'',
    
      }

    })
  }

}
