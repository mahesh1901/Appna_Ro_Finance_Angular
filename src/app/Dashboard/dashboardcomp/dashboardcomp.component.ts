import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../Model/menu';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrl: './dashboardcomp.component.css'
})
export class DashboardcompComponent {

  @ViewChild(MatSidenav)  
  public sidenav: MatSidenav;

  constructor(private router: Router, private observer: BreakpointObserver) {}

  public userRole: any;  

  public menuItems: any[];

  ngOnInit() {
    this.menuItems = Menu.menus;
    console.log('menuitems array :' + this.menuItems);
    this.userRole = localStorage.getItem('role'); //   direclty getting data here
    console.log('UserRole is ' + this.userRole);
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  logout(){
    localStorage.setItem('role', '');
    this.router.navigateByUrl('home'); 

  }

}
