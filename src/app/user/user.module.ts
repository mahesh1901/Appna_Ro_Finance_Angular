import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowStatusComponent } from './show-status/show-status.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';




export const Userrouting: Routes = [
  { path: 'statusshowform', component: ShowStatusComponent }
];

@NgModule({
  declarations: [ShowStatusComponent],
  imports: [
    RouterModule.forChild(Userrouting),
    CommonModule,
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
    FormsModule
    
    
  ],
  
 


})
export class UserModule { }
