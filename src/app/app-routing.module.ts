import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcompComponent } from './Dashboard/dashboardcomp/dashboardcomp.component';
import { AccountManagerModule } from './Role/account-manager/account-manager.module';
import { CreditManagerModule } from './Role/credit-manager/credit-manager.module';
import { OperationalExecutiveModule } from './Role/oprational-executive/oprational-executive.module';
import { RelationalExecutiveModule } from './Role/relational-executive/relational-executive.module';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { UserModule } from './user/user.module';

// const routes: Routes = [
//   { path: 'dashboardlayout', component: DashboardcompComponent, children: [
//     { path: 'RExecutive', loadChildren: () => import('./Role/relational-executive/relational-executive.module').then(m => m.RelationalExecutiveModule) }
//   ]}
// ];
  // const routes: Routes = [
  //   {
  //     path: 'dashboardlayout',
  //     component: DashboardcompComponent,
  //     children: [
  //       {
  //         path: 'RExecutive',
  //         loadChildren: () => import('./Role/relational-executive/relational-executive.module').then(m => m.RelationalExecutiveModule)
  //       },
  //     ]
  //   }];
    export const routes: Routes = [
  
  {
     path: 'dashboardlayout',component:DashboardcompComponent,
  children: [
    {
      path: 'RExecutive', loadChildren: () => RelationalExecutiveModule
    },
    {
      path: 'OExecutive', loadChildren: () => OperationalExecutiveModule
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
