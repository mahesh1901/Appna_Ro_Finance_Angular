import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
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

  constructor(private router: Router, private observer: BreakpointObserver,private cdr: ChangeDetectorRef) {}
  someProperty: boolean = true;

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
      setTimeout(() => {
        this.someProperty = false;
        this.cdr.detectChanges(); // Trigger change detection
      });
    });
  }

  logout(){
    localStorage.setItem('role', '');
    this.router.navigateByUrl('home'); 

  }

}
