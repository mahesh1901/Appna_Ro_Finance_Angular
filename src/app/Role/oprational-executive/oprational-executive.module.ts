import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { SingleApplicationComponent } from './singleapplication/singleapplication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const oerouting: Routes = [
  { path: 'ViewAllEnquires', component: ApplicationlistComponent },
  { path: 'ShowSingleEnquiry', component: SingleApplicationComponent}
  // Other child routes if any
];

@NgModule({
  declarations: [
  ApplicationlistComponent,
  SingleApplicationComponent

  ],
  imports: [
    RouterModule.forChild(oerouting),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ 
    RouterModule,
    ApplicationlistComponent,
    SingleApplicationComponent
  ]
})
export class OperationalExecutiveModule { }
