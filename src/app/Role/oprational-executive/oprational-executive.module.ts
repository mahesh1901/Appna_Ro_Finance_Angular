import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { SingleapplicationComponent } from './singleapplication/singleapplication.component';



@NgModule({
  declarations: [
    ApplicationlistComponent,
    SingleapplicationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OprationalExecutiveModule { }
