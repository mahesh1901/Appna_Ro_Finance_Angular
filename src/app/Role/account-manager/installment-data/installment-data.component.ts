import { Component } from '@angular/core';
import { Coustomer } from '../../../Model/coustomer';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../../../sharedService/common-service.service';

@Component({
  selector: 'app-installment-data',
  templateUrl: './installment-data.component.html',
  styleUrl: './installment-data.component.css'
})
export class InstallmentDataComponent {

  
  customerdetails:Coustomer;

  constructor(private fb: FormBuilder, public activatedRouter: ActivatedRoute, public route: Router, private cs:CommonServiceService) { }

  ngOnInit(){
    this.activatedRouter.queryParams.subscribe((params) => {
      console.log(params)
      this.customerdetails = JSON.parse(params['data']);
    })
  }
}
