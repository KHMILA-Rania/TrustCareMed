import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './user/components/home-page/home-page.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { AboutComponent } from './user/components/about/about.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';
import { FooterComponent } from './user/components/footer/footer.component';
import { ChatdoctorComponent } from './doctor/components/chatdoctor/chatdoctor.component';
import { ChatPatientComponent } from './patient/components/chat-patient/chat-patient.component';
import { HomeComponent } from './patient/components/home/home.component';
import { OurDoctorsComponent } from './patient/components/our-doctors/our-doctors.component';
import { DoctorDetailsComponent } from './patient/components/doctor-details/doctor-details.component';
import { RendezvousComponent } from './patient/components/rendezvous/rendezvous.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'home/signup', component: SignUpComponent},
  {path:'home/contact', component:ContactComponent},
  {path:'home/sign-in', component:SignInComponent},
  {path:'home/patient',component:HomeComponent},
  {path: 'home/doctor',component:HomeComponent},
  {path:'home/chat-patient',component:ChatPatientComponent},
  {path:'home/chatdoctor',component:ChatdoctorComponent},
  {path:'home/patient/rendez-vous',component:RendezvousComponent},

  {path:'home/patient/doctors',component: OurDoctorsComponent}
 
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
