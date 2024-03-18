import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [DashboardcompComponent],
  imports: [
    CommonModule,
    MatSidenavModule, // Add MatSidenavModule here
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule
  ],
  exports:[
    DashboardcompComponent
  ]
})
export class DashboardModule { }
