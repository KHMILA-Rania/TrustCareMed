import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './user/components/home-page/home-page.component';

import { FooterComponent } from './user/components/footer/footer.component';

import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { NavbarComponent } from './user/components/navbar/navbar.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    SignInComponent
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
