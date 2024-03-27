import { Component } from '@angular/core';
import { Coustomer } from '../../../Model/coustomer';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../../sharedService/common-service.service';
import { SanctionLetter } from '../../../Model/sanction-letter';

@Component({
  selector: 'app-show-verified-list',
  templateUrl: './show-verified-list.component.html',
  styleUrl: './show-verified-list.component.css'
})
export class ShowVerifiedListComponent {

  showme=false;


  constructor(private router:Router,private cs :CommonServiceService){     
  }

    public customerdata:Coustomer;

  public customerdatalist:Coustomer[]
  public sanctionGeneratedlist: SanctionLetter[];

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

  sanctionGenerated() {
    alert("Sanction Generate List")
    this.cs.getCustomer("Sanction_Generated").subscribe((a:any)=>{
      this.customerdatalist=a.responceData});}
    
    // alert("Sanction Generated Customer");
    // this.cs.getSanctionLetter().subscribe((application: any) => {
    //   this.sanctionGeneratedlist = application.responceData;
    //   console.log("Sanction Data")
    //   console.log(application)
    //   console.log("No Data")

  
    //   if (application != null) {
    //     // Assuming you want to fetch customer data based on the sanction data
    //     this.cs.getCustomer("Customer_Accepted").subscribe((application: any) => {
    //       this.customerdatalist = application.responceData;
    //       console.log(this.customerdatalist);
    //       this.showme = false;

    //     });
    //   }
  

  

  LoanDisbursed(){
    this.cs.getCustomer("Loan_Disbursed").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
    this.showme=false;
  }

    // santion generation reouting done here  to Sanction Ts
    generateSanction(customerdata:Coustomer){
      this.router.navigate(['./dashboardlayout/Cmanager/sanctionGeneration'],{
       queryParams:{ data:JSON.stringify(customerdata)}
      });
      this.showme=false;
    }

}
