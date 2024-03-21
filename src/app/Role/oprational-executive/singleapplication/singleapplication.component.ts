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

    // parma method used to get Data from URL
    //now Data will be came in String formate we need to convert it into Object with help of JSON.parse method

    // way 1:
    // this.activatedRouter.paramMap.subscribe((param)=>{
    //   this.customerdetails= JSON.parse(param.get('data'));
    // })



    // working ok way 2: 
    this.activatedRouter.queryParams.subscribe((params) => {
      console.log(params)
      this.customerdetails = JSON.parse(params['data']);
    })
  }

  applicationVerify(customerId: string) {
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
this.cs.withstatusUpdate(customerId,"Verified").subscribe(()=>{
});

  }
  applicationReject(customerId: string) {

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

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import Swal from 'sweetalert2';
// import { CommonServiceService } from '../../../sharedService/common-service.service';

// @Component({
//   selector: 'app-single-application',
//   templateUrl: './singleapplication.component.html', // Adjust the path as needed
//   styleUrls: ['./singleapplication.component.css']
// })
// export class SingleApplicationComponent implements OnInit {
//   statusForm: FormGroup;
//   customerDetails: any;

//   constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private cs: CommonServiceService) { }

//   ngOnInit(): void {
//     this.activatedRoute.queryParams.subscribe(params => {
//       if (params && params['data']) {
//         this.customerDetails = JSON.parse(params['data']);
//       } else {
//         // Handle case when 'data' parameter is missing or invalid
//         console.error('No valid data found in query params');
//       }
//     });
//   }

//   applicationVerify(customerId: string): void {
//     this.showVerificationAlert('Verify', 'Verified', customerId);
//   }

//   applicationReject(customerId: string): void {
//     this.showVerificationAlert('Reject', 'Rejected', customerId);
//   }

//   private showVerificationAlert(action: string, status: string, customerId: string): void {
//     Swal.fire({
//       title: `Are you sure to ${action}?`,
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: `Yes, ${action} it!`
//     }).then((result) => {
//       if (result.isConfirmed) {
//         this.updateStatus(customerId, status);
//       }
//     });
//   }

//   private updateStatus(customerId: string, status: string): void {
//     this.cs.withstatusUpdate(customerId, status).subscribe(() => {
//       Swal.fire(
//         `${status}!`,
//         `Customer has been successfully ${status}.`,
//         'success'
//       );
//     }, error => {
//       console.error('Error updating status:', error);
//       Swal.fire(
//         'Error!',
//         'Failed to update status.',
//         'error'
//       );
//     });
//   }
// }


