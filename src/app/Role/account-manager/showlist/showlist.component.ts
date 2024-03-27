import { Component } from '@angular/core';
import { CommonServiceService } from '../../../sharedService/common-service.service';
import { Coustomer } from '../../../Model/coustomer';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrl: './showlist.component.css'
})
export class ShowlistComponent {

 // customerdatalist:Coustomer | undefined;
  customerdatalist: Coustomer[] = [];

  constructor(private cs:CommonServiceService){
  
  }
  
  
    customerAcceptedList(){
      this.cs.getCustomer("Sanction_Generated").subscribe((application:any)=>{
        this.customerdatalist=application.responceData
      });
    }     
  
        loanDisburseList(){
          this.cs.getCustomer("Loan_Disbursed").subscribe((application:any)=>{
            this.customerdatalist=application.responceData
          });
        }
        ledgerGenratedList(){
          this.cs.getCustomer("Loan_Disbursed").subscribe((application:any)=>{
            this.customerdatalist=application.responceData
          });
        }
  // no enum upto now
        defaulterList(){
          this.cs.getCustomer("Defualter").subscribe((application:any)=>{
            this.customerdatalist=application.responceData
          });
        }
  
        loandisbursement(customerId:number){
          console.log(customerId)
              this.cs.loandisbursement(customerId).subscribe((response:any)=>{
                this.customerdatalist=response.responceData
                console.log(this.customerdatalist)
          });
        }

  
        ledgerGenration(customerId:number){
          this.cs.ledgerGenration(customerId).subscribe((response:any)=>{
            this.customerdatalist=response.responceData
                console.log(this.customerdatalist)
      });
      }
}
