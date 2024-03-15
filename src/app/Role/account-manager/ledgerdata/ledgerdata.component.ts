import { Component } from '@angular/core';
import { Coustomer } from '../../../Model/coustomer';
import { CommonServiceService } from '../../../sharedService/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ledgerdata',
  templateUrl: './ledgerdata.component.html',
  styleUrl: './ledgerdata.component.css'
})
export class LedgerdataComponent {

  customerdatalist: Coustomer[] = [];

  constructor(private cs:CommonServiceService,private router:Router){}

  loanDisburseList(){
    this.cs.getCustomer("Loan_Disbursed").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
  }

  ledgerGenratedList(){
    this.cs.getCustomer("Ledger_Generated").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
  }
// no enum upto now
  defaulterList(){
    this.cs.getCustomer("Defualter").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
  }



  CheckInstallMent(singlecustomer:Coustomer){
    this.router.navigate(['./dashboardlayout/acManager/installmentData'],{
      queryParams:{data:JSON.stringify(singlecustomer)}
      })
  }
  

}
