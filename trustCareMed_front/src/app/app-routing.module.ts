import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './user/components/home-page/home-page.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';
import { FooterComponent } from './user/components/footer/footer.component';
const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'home/signup', component: SignUpComponent},
  {path:'home/contact', component:ContactComponent},
  {path:'home/sign-in', component:SignInComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
