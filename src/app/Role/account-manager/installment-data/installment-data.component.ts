import { Component } from '@angular/core';
import { Coustomer } from '../../../Model/coustomer';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../../../sharedService/common-service.service';

@Component({
  selector: 'app-installment-data',
  templateUrl: './installment-data.component.html',
  styleUrls: ['./installment-data.component.css']
})
export class InstallmentDataComponent {
  customerdetails: Coustomer;

  constructor(private fb: FormBuilder, public activatedRouter: ActivatedRoute, public route: Router, private cs: CommonServiceService) { }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe((params) => {
      const data = params['data'];
      if (data) {
        this.customerdetails = JSON.parse(data);
        console.log(this.customerdetails);
        if (this.customerdetails && this.customerdetails.ledger && this.customerdetails.ledger.installments) {
          console.log(this.customerdetails.ledger.installments);
        } else {
          console.log('Installments data not available');
        }
      } else {
        console.log('Data parameter not found in queryParams');
      }
    });
  }
}





// import { Component } from '@angular/core';
// import { Coustomer } from '../../../Model/coustomer';
// import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CommonServiceService } from '../../../sharedService/common-service.service';

// @Component({
//   selector: 'app-installment-data',
//   templateUrl: './installment-data.component.html',
//   styleUrl: './installment-data.component.css'
// })
// export class InstallmentDataComponent {

  
//   customerdetails:Coustomer;

//   constructor(private fb: FormBuilder, public activatedRouter: ActivatedRoute, public route: Router, private cs:CommonServiceService) { }

//   ngOnInit(){
//     this.activatedRouter.queryParams.subscribe((params) => {
//       this.customerdetails = JSON.parse(params['data']);
//        console.log(this.customerdetails)
//     })
//     console.log(this.customerdetails.ledger.installments);

//   }
// }
