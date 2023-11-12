import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
const routes: Routes = [
  { path: '/home', component: HomePageComponent},
  { path: '/home/signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
