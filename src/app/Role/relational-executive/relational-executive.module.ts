import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEnquiriesComponent } from './show-enquiries/show-enquiries.component';
import { RouterModule, Routes } from '@angular/router';

export const rerouting: Routes = [
  {    path:'viewenquiries',component:ShowEnquiriesComponent }
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
