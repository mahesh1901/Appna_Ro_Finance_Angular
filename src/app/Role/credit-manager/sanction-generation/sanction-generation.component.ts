import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Coustomer } from '../../../Model/coustomer';
import { CommonServiceService } from '../../../sharedService/common-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sanction-generation',
  templateUrl: './sanction-generation.component.html',
  styleUrl: './sanction-generation.component.css'
})
export class SanctionGenerationComponent {

  constructor(public cs: CommonServiceService, public fb: FormBuilder, private activatedroute: ActivatedRoute) { }

  public sanctionLetterForm: FormGroup;
     customerInfo: FormGroup;
    public customerdata:Coustomer;
    public  emicheckform: FormGroup;
 
 
    
   
   public loanOffer:number; 
    emi:number;
    tenure:number;
    intrest:number;
    totalRepayment:number;
    emihtml:string;
    totalRepaymenthtml:string;
    
   ngOnInit() {
 
 // routed by the verfied list
     this.activatedroute.queryParams.subscribe((param) => {
       this.customerdata = JSON.parse(param['data']);
       
     })    
 
     this.sanctionLetterForm = this.fb.group({
       sanctionId:'',
       sanctionDate:'',     
       applicantName: [this.customerdata.customerFirstName, [Validators.required]],
       loanAmountSanctioned: [0, [Validators.required]],
       interestType: ['', [Validators.required]],
       rateOfInterest: [0, [Validators.required]],
       loanTenure: [0, [Validators.required]],
       monthlyEmiAmount: [0, [Validators.required]],
       loanAmountWithInterest: [0, [Validators.required]],
       modeOfPayment: ['', [Validators.required]],
      
       sanctionLetterStatus:['']
 
     });
 
     this.emicheckform = this.fb.group({
       loanAmount:0,
       rateOfInterest:0,
       Tenure:0
     });
 
 
 
   }
 
   get loanAmountSanctioned() {
     return this.sanctionLetterForm.get('loanAmountSanctioned');
   }
   get interestType() {
     return this.sanctionLetterForm.get('interestType');
   }
   get rateOfInterest() {
     return this.sanctionLetterForm.get('rateOfInterest');
   }
   get loanTenure() {
     return this.sanctionLetterForm.get('loanTenure');
   }
   get monthlyEmiAmount() {
     return this.sanctionLetterForm.get('monthlyEmiAmount');
   }
   get loanAmountWithInterest() {
     return this.sanctionLetterForm.get('loanAmountWithInterest');
   }
   get modeOfPayment() {
     return this.sanctionLetterForm.get('modeOfPayment');
   }
 
   emicheck(){
     alert("emi check from")
     this.intrest = this.emicheckform.get('rateOfInterest').value / (12 * 100);
     this.tenure = this.emicheckform.get('Tenure').value;
     this.emi =
       (this.emicheckform.get('loanAmount').value *
       this.intrest *
         Math.pow(1 + this.intrest , this.tenure )) /
       (Math.pow(1 + this.intrest , this.tenure) - 1);
     this.totalRepayment = this.emi * this.tenure;
 
     this.emihtml=this.emi.toFixed();
     this.totalRepaymenthtml=this.totalRepayment.toFixed();
   }
 
 
   // for  only the sanction letter update (new api for sanction update)
   generatesanctionletter(){
   alert("saveSanctionLetter from")
 
   //alert for genrating Sanction Letter
   Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, Genrate Sanction Letter!'
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire(
         'Genrated!',
         'Sanction letter has been sent to Customer',
         'success'
       )
     }
   })
 
  //  this.cs.withstatusUpdate(customerId,"Verified").subscribe(()=>{ });

   this.cs.sanctionobj=this.sanctionLetterForm.value
  // this.cs.customer(this.customerdata.customerId);

  console.log(this.customerdata.customerId);
   this.cs.generatesanctionletter(this.cs.sanctionobj,this.customerdata.customerId).subscribe(()=>{
 
   });
 }
}
