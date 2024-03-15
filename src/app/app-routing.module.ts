import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { RelationalExecutiveModule } from './Role/relational-executive/relational-executive.module';
import { DashboardcompComponent } from './Dashboard/dashboardcomp/dashboardcomp.component';
import { OprationalExecutiveModule } from './Role/oprational-executive/oprational-executive.module';
import { AccountManagerModule } from './Role/account-manager/account-manager.module';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { CreditManagerModule } from './Role/credit-manager/credit-manager.module';

const routes: Routes = [
  { path: 'dashboardlayout',component:DashboardcompComponent,
  children: [
    {
      path: 'RExecutive', loadChildren: () => RelationalExecutiveModule
    },
    {
      path: 'OExecutive', loadChildren: () => OprationalExecutiveModule
    },            
    {
      path: 'User', loadChildren: () => UserModule
    },
    {
      path: 'Cmanager', loadChildren: () => CreditManagerModule
    },   
     {
      path: 'acManager', loadChildren: () => AccountManagerModule
    }
  ]
},
  { path: 'termsAndCondition',component:TermsAndConditionComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
