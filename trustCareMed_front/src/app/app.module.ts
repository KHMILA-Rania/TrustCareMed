import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './user/components/home-page/home-page.component';

import { FooterComponent } from './user/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { NavbarComponent } from './user/components/navbar/navbar.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './doctor/components/profile/profile.component';
import { DemandesConsultationComponent } from './doctor/components/demandes-consultation/demandes-consultation.component';
import { ContactUsComponent } from './doctor/components/contact-us/contact-us.component';
import { VosPatientsComponent } from './doctor/components/vos-patients/vos-patients.component';
import { NavbarDoctorComponent } from './doctor/components/navbar-doctor/navbar-doctor.component';
import { ChatdoctorComponent } from './doctor/components/chatdoctor/chatdoctor.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    SignInComponent,
    ProfileComponent,
    DemandesConsultationComponent,
    ContactUsComponent,
    VosPatientsComponent,
    NavbarDoctorComponent,
    ChatdoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
