import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanctionGenerationComponent } from './sanction-generation/sanction-generation.component';
import { ShowVerifiedListComponent } from './show-verified-list/show-verified-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

export const cmrouting: Routes = [
  {    path:'showVerifiedList',component: ShowVerifiedListComponent},
  {    path:'sanctionGeneration',component: SanctionGenerationComponent},
]

@NgModule({
  declarations: [
    SanctionGenerationComponent,
    ShowVerifiedListComponent
   
  ],
  imports: [
    RouterModule.forChild(cmrouting),
    CommonModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [SanctionGenerationComponent,RouterModule,
    ShowVerifiedListComponent],
})
export class CreditManagerModule { }
