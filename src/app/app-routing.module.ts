import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { DonarComponent } from './donar/donar.component';
import { Donor1Component } from './donor1/donor1.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DonordetailsComponent } from './donordetails/donordetails.component';


const routes: Routes = [
  {path:'',component:BannerComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'donar',component:DonarComponent},
  {path:'donor1',component:Donor1Component},
  {path:'donordetails',component:DonordetailsComponent},
  {path:'user-details',component:UserDetailsComponent}
  // {path:"userdetails",component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
