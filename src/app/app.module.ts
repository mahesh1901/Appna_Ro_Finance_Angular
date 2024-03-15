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
import { OprationalExecutiveModule } from './Role/oprational-executive/oprational-executive.module';
import { RelationalExecutiveModule } from './Role/relational-executive/relational-executive.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TermsAndConditionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModModule,
    DefaultModRoutingModule,
    
    DashboardModule,
    RelationalExecutiveModule,
    OprationalExecutiveModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
