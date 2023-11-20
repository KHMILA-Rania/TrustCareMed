import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject=new BehaviorSubject<boolean>(  false);

  isLoggedPatient=this.isLoggedInSubject.asObservable();

  updateLoginStatus(status:boolean):void {
    this.isLoggedInSubject.next(status);
  }
 
}
