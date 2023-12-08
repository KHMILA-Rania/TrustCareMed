import { Injectable } from '@angular/core';
import { Patient } from '../interfaces/Patient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  options={
    headers:new HttpHeaders({'content-Type':'application/json'})
  } 
  
  constructor(private http:HttpClient) { }

    //adddd 
    addPatient(patient: Patient): Observable<Patient> {

      return this.http.post<Patient>(
        'http://localhost:3000/createPatient',patient,this.options);
      
    }
}
