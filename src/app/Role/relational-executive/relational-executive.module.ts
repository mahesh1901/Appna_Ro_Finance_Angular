import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEnquiriesComponent } from './show-enquiries/show-enquiries.component';
import { RouterModule, Routes } from '@angular/router';
import { MultistepformComponent } from './multistepform/multistepform.component';

export const rerouting: Routes = [
  {path:'viewenquiries',component:ShowEnquiriesComponent },
  {path:'multi',component:MultistepformComponent}
]

@NgModule({
  declarations: [
    ShowEnquiriesComponent
  ],
  imports: [
    RouterModule.forChild(rerouting),
    CommonModule
  ]
})
export class RelationalExecutiveModule { }
