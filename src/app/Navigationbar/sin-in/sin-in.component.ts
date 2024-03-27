import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sin-in',
  templateUrl: './sin-in.component.html',
  styleUrl: './sin-in.component.css'
})

export class SinInComponent implements OnInit{

  // @ViewChild('container')
  // container: ElementRef;

  constructor(private fb: FormBuilder, private router: Router) {}

  //login data is here
  loginfo: FormGroup;
  //registration data is here
  registerf: FormGroup;

  ngOnInit() {
    this.loginfo = this.fb.group({
      customerEmail: [''],
      customerPassword: [''],
    });

    this.registerf = this.fb.group({
      customerEmail: [],
      customerPassword: [],
      customerName: [],
    });
  }

  signIn() 
  {
    // this.container.nativeElement.classList.remove('right-panel-active');
    if (
      this.loginfo.get('customerEmail').value === 'user' &&
      this.loginfo.get('customerPassword').value === 'user123'
    ) 
    // User Login
    {
      alert('welcome User');
      localStorage.setItem('role', 'User'); //role is the key and OExecutive is the data  this value is get in the dashboard.ts file now
      this.router.navigateByUrl('dashboardlayout/User'); // dashborad it is differnet module where we rout now
    
    }
      // Operational Executive Role 
    else if (
      this.loginfo.get('customerEmail').value === 'oe' &&
      this.loginfo.get('customerPassword').value === 'oe123'
    ) 

    {
      alert('welcome OExecutive');
      localStorage.setItem('role', 'OExecutive');
      this.router.navigateByUrl('dashboardlayout/OExecutive');
    }
     // Relation Executive Role 
    else if (
      this.loginfo.get('customerEmail').value === 're' &&
      this.loginfo.get('customerPassword').value === 're123'
    ) 
   
    {
      alert('welcome RExecutive');
      localStorage.setItem('role', 'RExecutive');
      // 'dashboardlayout/RExecutive'
      this.router.navigateByUrl('dashboardlayout/RExecutive');
    } 
    // Credit Manager
    else if (
      this.loginfo.get('customerEmail').value === 'cm' &&
      this.loginfo.get('customerPassword').value === 'cm123'
    ) {
      alert('welcome Credit Manager');
      localStorage.setItem('role', 'Cmanager');
      this.router.navigateByUrl('dashboardlayout/Cmanager');
     }
     
     // Admin Login 
  else if (
    this.loginfo.get('customerEmail').value === 'admin' &&
    this.loginfo.get('customerPassword').value === 'admin123'
  ) {
    alert('welcome Account Manager');
    localStorage.setItem('role', 'acManager');
    this.router.navigateByUrl('dashboardlayout/acManager');
    
} else {
      alert('invalid credetials ...!!!!');
    }
  }

  // signUp() {
  //   this.container.nativeElement.classList.add('right-panel-active');
  // }

  // get customerEmail(){
  //   return this.loginf.get('customerEmail');
  // }

  // get customerPassword(){
  //   return this.loginf.get('customerPassword');
  // }

}
