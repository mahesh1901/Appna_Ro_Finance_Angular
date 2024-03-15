import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallmentDataComponent } from './installment-data/installment-data.component';
import { LedgerdataComponent } from './ledgerdata/ledgerdata.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { RouterModule, Routes } from '@angular/router';

export const acRouting: Routes = [
  {    path:'showSanctionist',component: ShowlistComponent},
  {    path:'showLedgerData',component: LedgerdataComponent},
  {    path:'installmentData',component: InstallmentDataComponent},
]

@NgModule({
  declarations: [
    InstallmentDataComponent,
    LedgerdataComponent,
    ShowlistComponent
  ],
  imports: [
    RouterModule.forChild(acRouting),
    CommonModule
  ]
  ,exports:[
    ShowlistComponent, 
    LedgerdataComponent, 
    InstallmentDataComponent
  ]
})
export class AccountManagerModule { }
