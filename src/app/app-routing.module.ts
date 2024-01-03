import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserSignIpComponent } from './components/user-sign-ip/user-sign-ip.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';

const routes: Routes = [
  {
    path:"",
    component: IndexPageComponent
  },
  {
    path:"signup",
    component: UserSignUpComponent
  },
  {
    path:"signin",
    component: UserSignIpComponent
  },
  {
    path:"userhomepage",
    component:UserHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
