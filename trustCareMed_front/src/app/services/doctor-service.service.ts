import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/Doctor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl='http://localhost:3000/createDoctor';
  options={
    headers:new HttpHeaders({'content-Type':'application/json'})
  } 

  constructor(private http:HttpClient ) { }

  addDoctor(doctor: Doctor): Observable<Doctor> {

    return this.http.post<Doctor>(
      'http://localhost:3000/createDoctor',doctor,this.options);
    
  }
 
}
