import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './user/components/home-page/home-page.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { ContactComponent } from './user/components/contact/contact.component';

import { AboutComponent } from './user/components/about/about.component';




const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'home/signup', component: SignUpComponent},
  { path: 'home/contact', component: ContactComponent},
  { path: 'home/about', component : AboutComponent},
  

  {path:'home/contact', component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
