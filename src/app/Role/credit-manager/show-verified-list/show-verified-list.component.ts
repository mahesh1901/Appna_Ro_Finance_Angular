import { Component } from '@angular/core';
import { Coustomer } from '../../../Model/coustomer';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../../sharedService/common-service.service';

@Component({
  selector: 'app-show-verified-list',
  templateUrl: './show-verified-list.component.html',
  styleUrl: './show-verified-list.component.css'
})
export class ShowVerifiedListComponent {

  showme=false;

  constructor(private router:Router,private cs :CommonServiceService){     
  }


  public customerdatalist:Coustomer[]

// all below method for list getting 
  verifiedApplication(){
    alert("Customer Verified  Data")
    this.cs.getCustomer("Verified").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
    this.showme=true;
  }

  customerAccepted(){
    alert("customer Accepted Data");
    this.cs.getCustomer("Customer_Accepted").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
    this.showme=false;
  }
  customerRejected(){
    alert("Customer Rejected Data");
   this.cs.getCustomer("Customer_Rejected").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
    this.showme=false;
  }

  sanctionGenerated(){
    alert("Sanction Generated Customer");
    this.cs.getCustomer("Sanction_Generated").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
    this.showme=false;
  }

  LoanDisbursed(){
    this.cs.getCustomer("Loan_Disbursed").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
    this.showme=false;
  }

    // santion generation reouting done here 
    generateSanction(customerdata:Coustomer){
      this.router.navigate(['./dashboardlayout/Cmanager/sanctionGeneration'],{
       queryParams:{ data:JSON.stringify(customerdata)}
      });
      this.showme=false;
    }

}
