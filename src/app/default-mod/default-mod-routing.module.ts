import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComComponent } from '../Navigationbar/home-com/home-com.component';
import { EmiCalculatorComponent } from '../Navigationbar/emi-calculator/emi-calculator.component';
import { AboutUsComponent } from '../Navigationbar/about-us/about-us.component';
import { LoanEnquiryComponent } from '../Navigationbar/loan-enquiry/loan-enquiry.component';
import { SinInComponent } from '../Navigationbar/sin-in/sin-in.component';
import { FaqComponent } from '../Navigationbar/faq/faq.component';
import { DefaultcomponentComponent } from './defaultcomponent/defaultcomponent.component';
import { IntrestRateComponent } from '../Navigationbar/intrest-rate/intrest-rate.component';

const routes: Routes = [
  {
    path:'',component:DefaultcomponentComponent,
    children:[
     {
       path:'',component:HomeComComponent     
     },      
       {path:'emiCalculator',component:EmiCalculatorComponent
     },
     {path:'aboutUs',component:AboutUsComponent
     },
       {path:'loanEnquiry',component:LoanEnquiryComponent
     },
       {path:'signIN',component:SinInComponent
     }, 
     {path:'faq', component:FaqComponent
     },
     {
       path:'interestRate', component:IntrestRateComponent
     },
     {
       path:'home',component:HomeComComponent     
     },  
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultModRoutingModule { }
