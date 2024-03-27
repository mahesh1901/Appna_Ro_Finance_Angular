import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../../sharedService/common-service.service';
import { Coustomer } from '../../Model/coustomer';
import { SanctionLetter } from '../../Model/sanction-letter';

@Component({
  selector: 'app-show-status',
  templateUrl: './show-status.component.html',
  styleUrls: ['./show-status.component.css']
})
export class ShowStatusComponent implements OnInit {
  title = 'SanctionLetter';
  customerdetails: Coustomer;
  showme = false;

  sanctionLetterForm: FormGroup;
  customerInfo: FormGroup;

  constructor(public cs: CommonServiceService, public fb: FormBuilder) {}

  ngOnInit() {
    this.customerInfo = this.fb.group({
      customerId: [0, [Validators.required]]
    });

    this.sanctionLetterForm = this.fb.group({
      sanctionId: [],
      sanctionDate: [],
      applicantName: ['', [Validators.required]],
      loanAmountSanctioned: ['', [Validators.required]],
      interestType: ['', [Validators.required]],
      rateOfInterest: ['', [Validators.required]],
      loanTenure: ['', [Validators.required]],
      monthlyEmiAmount: ['', [Validators.required]],
      loanAmountWithInterest: ['', [Validators.required]],
      sanctionLetterStatus: []
    });
  }

  getSingleCustomer() {
    alert("getSingleCustomer")
    this.cs.getSingleCustomer(this.customerInfo.get('customerId').value).subscribe((response: any) => {
      this.customerdetails = response.responceData;
      this.showme = true;
    });
  }

  acceptOffer(customerId: number) {
    this.cs.withstatusUpdate(customerId, "Customer_Accepted").subscribe(() => {
      window.location.reload();
    });
  }

  rejectOffer(customerId: number) {
    this.cs.withstatusUpdate(customerId, "Customer_Rejected").subscribe(() => {
      window.location.reload();
    });
  }

  // Helper method to check if customer details are available
  isCustomerDetailsAvailable(): boolean {
    alert("Empty Data")
    return this.customerdetails !== undefined && this.customerdetails !== null;
  }
}



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CommonServiceService } from '../../sharedService/common-service.service';
// import { Coustomer } from '../../Model/coustomer';
// import { SanctionLetter } from '../../Model/sanction-letter';

// @Component({
//   selector: 'app-show-status',
//   templateUrl: './show-status.component.html',
//   styleUrl: './show-status.component.css'
// })
// export class ShowStatusComponent
//  {
 
//   title = 'SanctionLetter';

//   constructor(public cs:CommonServiceService, public fb:FormBuilder){}

//   public customerdetails:Coustomer;

//   sanctionLetterForm: FormGroup;
//   customerInfo: FormGroup;
//   showme=false;
// s:SanctionLetter;
// c:any[]


//     ngOnInit(){

// this.customerInfo=this.fb.group({  
//   customerId:[0, [Validators.required]],
// })


//      this.sanctionLetterForm= this.fb.group({
//       sanctionId:[],
//       sanctionDate:[],
//       applicantName:['', [Validators.required]],
//       loanAmountSanctioned:['', [Validators.required]],
//       interestType:['', [Validators.required]],
//       rateOfInterest:['', [Validators.required]],
//       loanTenure:['', [Validators.required]],
//       monthlyEmiAmount:['', [Validators.required]],
//       loanAmountWithInterest:['', [Validators.required]],      
//       //null
//       sanctionLetterStatus:[]


//       });
//     }

//     //customer get thier status on basics of id 
//     getSingleCustomer()
//    {
//       alert("getSingleCustomer")
//       this.cs.getSingleCustomer(this.customerInfo.get('customerId').value).subscribe((response:any)=>{
//         this.customerdetails=response.responceData;
//       });
//       if(this.customerdetails.customerVerificationStatus === undefined) {        
//       this.showme=false;       
//        } else{
//         this.showme=true; 
//        }
//       }
      
       
//        acceptOffer(customerid:number){
//         this.cs.withstatusUpdate(customerid,"Customer_Accepted").subscribe();  
//         window.location.reload()        
//        }
       
//        rejectOffer(customerid:number){
//         this.cs.withstatusUpdate(customerid,"Customer_Rejected").subscribe();
//         window.location.reload()
          
//        }

   

//     get sanctionDate(){
//       return this.sanctionLetterForm.get('sanctionDate');
//     }
//     get applicantName(){
//       return this.sanctionLetterForm.get('applicantName');
//     }
//     get loanAmountSanctioned(){
//       return this.sanctionLetterForm.get('loanAmountSanctioned');
//     }
//     get interestType(){
//       return this.sanctionLetterForm.get('interestType');
//     }
//     get rateOfInterest(){
//       return this.sanctionLetterForm.get('rateOfInterest');
//     }
//     get loanTenure(){
//       return this.sanctionLetterForm.get('loanTenure');
//     }
//     get monthlyEmiAmount(){
//       return this.sanctionLetterForm.get('monthlyEmiAmount');
//     }
//     get loanAmountWithInterest(){
//       return this.sanctionLetterForm.get('loanAmountWithInterest');
//     }
//     get modeOfPayment(){
//       return this.sanctionLetterForm.get('modeOfPayment');
//     }
// }
