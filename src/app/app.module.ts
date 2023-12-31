import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { DonarComponent } from './donar/donar.component';
import { Donor1Component } from './donor1/donor1.component';
import { DonordetailsComponent } from './donordetails/donordetails.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    UserdetailsComponent,
    DonarComponent,
    Donor1Component,
    DonordetailsComponent,
    UserDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
