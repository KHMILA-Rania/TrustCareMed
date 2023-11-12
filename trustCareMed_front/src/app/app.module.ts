import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomePageComponent } from './components/home-page/home-page.component';

import { FooterComponent } from './components/footer/footer.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

=======
import { HomePageComponent } from './user/components/home-page/home-page.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { NavbarComponent } from './user/components/navbar/navbar.component';
>>>>>>> 7a4b02fd82ac70a13f4ca3a80062ec483ab7cb6c

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    FooterComponent,
    NavbarComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
