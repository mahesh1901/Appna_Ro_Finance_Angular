import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CommonServiceService } from '../../../sharedService/common-service.service';


@Component({
  selector: 'app-single-application',
  templateUrl: './singleapplication.component.html', // Adjust the path as needed
  styleUrls: ['./singleapplication.component.css']
})
export class SingleApplicationComponent implements OnInit {

  constructor(private fb: FormBuilder, public activatedRouter: ActivatedRoute, public route: Router, private cs:CommonServiceService) { }

  statusform: FormGroup;

  public customerdetails: any

  ngOnInit(): void {


   
    this.activatedRouter.queryParams.subscribe((params) => {
      console.log(params)
      this.customerdetails = JSON.parse(params['data']);
    })
  }

  applicationVerify(customerId: number) {
      //verifiaction alert for Success
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Verify it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Verified!',
          'Customer has been successfully Verified.',
          'success'
        )
      }
    })
    //if yes verify it is hit then status will change to verified
this.cs.withstatusUpdate(customerId,"Verified").subscribe(()=>{ });

  }
  applicationReject(customerId: number) {

    ////verifiaction alert for Reject
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reject it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Rejected!',
          'Customer has been successfully Rejected.',
          'success'
        )
      }
    })

    this.cs.withstatusUpdate(customerId,"Rejected").subscribe(()=>{
    })

  }



}



