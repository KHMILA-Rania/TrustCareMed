import { Component } from '@angular/core';
import { Doctor } from 'src/app/interfaces/Doctor';
import { Patient } from 'src/app/interfaces/Patient'; 
import { DoctorService } from 'src/app/services/doctor-service.service';
import { PatientServiceService } from 'src/app/services/patient-service.service'; 


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formData: Doctor |Patient = {
    
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

  
  constructor(private doctorService: DoctorService,
              private patientService: PatientServiceService // Inject PatientService
    ){}

  onSubmit(){

    if (this.formData.role === 'doctor') {
      this.doctorService.addDoctor(this.formData as Doctor).subscribe(() => {
        this.resetFormData();
      });
    } else if (this.formData.role === 'patient') {
      this.patientService.addPatient(this.formData as Patient).subscribe(() => {
        this.resetFormData();
      });
    }
  }

  private resetFormData() {
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

    
  }

}
