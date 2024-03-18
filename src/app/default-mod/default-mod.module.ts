// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { DefaultModRoutingModule } from './default-mod-routing.module';
// import { DefaultcomponentComponent } from './defaultcomponent/defaultcomponent.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { HomeComComponent } from '../Navigationbar/home-com/home-com.component';
// import { LoanEnquiryComponent } from '../Navigationbar/loan-enquiry/loan-enquiry.component';
// import { AboutUsComponent } from '../Navigationbar/about-us/about-us.component';
// import { EmiCalculatorComponent } from '../Navigationbar/emi-calculator/emi-calculator.component';
// import { SinInComponent } from '../Navigationbar/sin-in/sin-in.component';
// import { FormsModule } from '@angular/forms';


// @NgModule({
//   declarations: [
//     DefaultcomponentComponent,
//     FooterComponent,
//     HeaderComponent,
//     NavbarComponent
//   ],
//   imports: [
//     CommonModule,
//     DefaultModRoutingModule,
//     FormsModule
//   ],
//   exports:[
//     HeaderComponent,
//     NavbarComponent,
//     FooterComponent,
//     DefaultcomponentComponent,
//     SinInComponent,
//     HomeComComponent,
//     EmiCalculatorComponent,
//     LoanEnquiryComponent,
//     AboutUsComponent,
    
//   ]
// })
// export class DefaultModModule { }

import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';


import { DefaultModRoutingModule } from './default-mod-routing.module';
import { DefaultcomponentComponent } from './defaultcomponent/defaultcomponent.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComComponent } from '../Navigationbar/home-com/home-com.component';

import { AboutUsComponent } from '../Navigationbar/about-us/about-us.component';
import { EmiCalculatorComponent } from '../Navigationbar/emi-calculator/emi-calculator.component';
import { SinInComponent } from '../Navigationbar/sin-in/sin-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanEnquiryComponent } from '../Navigationbar/loan-enquiry/loan-enquiry.component';

@NgModule({
  declarations: [
    DefaultcomponentComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SinInComponent, // Ensure SinInComponent is declared here
    HomeComComponent, // Ensure HomeComComponent is declared here
    EmiCalculatorComponent, // Ensure EmiCalculatorComponent is declared here
     LoanEnquiryComponent,
    AboutUsComponent // Ensure AboutUsComponent is declared here
  ],
  imports: [
    CommonModule,
    DefaultModRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    DefaultcomponentComponent,
    SinInComponent,
    HomeComComponent,
    EmiCalculatorComponent,
    AboutUsComponent,
    LoanEnquiryComponent
  ]
})
export class DefaultModModule { }

