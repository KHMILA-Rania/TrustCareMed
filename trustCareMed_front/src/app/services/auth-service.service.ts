import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedPatientSource=new BehaviorSubject<boolean>(  false);

  isLoggedPatient=this.isLoggedPatientSource.asObservable();

  private isLoggedDoctorSource = new BehaviorSubject<boolean>(false);
  isLoggedDoctor = this.isLoggedDoctorSource.asObservable();

  updateLoginStatus(patientStatus: boolean, doctorStatus: boolean) {
    this.isLoggedPatientSource.next(patientStatus);
    this.isLoggedDoctorSource.next(doctorStatus);
  }
 
}
