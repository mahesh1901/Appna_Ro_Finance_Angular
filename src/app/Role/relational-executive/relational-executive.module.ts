import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEnquiriesComponent } from './show-enquiries/show-enquiries.component';
import { RouterModule, Routes } from '@angular/router';
import { MultistepformComponent } from './multistepform/multistepform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';
import { MatStep, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

// export const rerouting: Routes = [
//   {    path:'viewenquiries',component:ShowEnquiriesComponent },
//     { path: 'apply', component: MultistepformComponent }, 
  

// ]

export const rerouting: Routes = [
  { path: 'viewenquiries', component: ShowEnquiriesComponent },
  { path: 'apply', component: MultistepformComponent }
  // Other child routes if any
];

@NgModule({
 
  declarations: [
    ShowEnquiriesComponent,
    MultistepformComponent
  ],
  imports: [
   // [RouterModule.forChild(routes)],
    RouterModule.forChild(rerouting),
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCardModule,
  ],
  exports: [RouterModule]

})
export class RelationalExecutiveModule { }
