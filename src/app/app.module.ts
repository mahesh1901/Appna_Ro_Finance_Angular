// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
// import { DefaultModModule } from './default-mod/default-mod.module';
// import { DefaultModRoutingModule } from './default-mod/default-mod-routing.module';
// import { DashboardModule } from './Dashboard/dashboard/dashboard.module';
// import { UserModule } from './user/user.module';
// import { OprationalExecutiveModule } from './Role/oprational-executive/oprational-executive.module';
// import { RelationalExecutiveModule } from './Role/relational-executive/relational-executive.module';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [AppComponent, TermsAndConditionComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     DefaultModModule,
//     DefaultModRoutingModule,
//     DashboardModule,
//     RelationalExecutiveModule,
//     OprationalExecutiveModule,
//     UserModule,
//     FormsModule,
//     HttpClientModule,
//     AppRoutingModule,
//     MatMomentDateModule
//   ],
//   providers: [
//     // Provide the chosen DateAdapter
//     { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
//     // You may also need to provide MAT_DATE_FORMATS if you've customized the date formats
//     { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
//   ]
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { DefaultModModule } from './default-mod/default-mod.module';
import { DefaultModRoutingModule } from './default-mod/default-mod-routing.module';
import { DashboardModule } from './Dashboard/dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { RelationalExecutiveModule } from './Role/relational-executive/relational-executive.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

// Import required Angular Material modules and adapters
import { MAT_MOMENT_DATE_FORMATS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, TermsAndConditionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModModule,
    DefaultModRoutingModule,
    DashboardModule,
    RelationalExecutiveModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatMomentDateModule // Import MatMomentDateModule here
  ],
  providers: [
    // Provide the chosen DateAdapter
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    // You may also need to provide MAT_DATE_FORMATS if you've customized the date formats
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
