import { Component } from '@angular/core';
import { EnquiryDetails } from '../../../Model/enquiry-details';
import { CommonServiceService } from '../../../sharedService/common-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-enquiries',
  templateUrl: './show-enquiries.component.html',
  styleUrl: './show-enquiries.component.css'
})
export class ShowEnquiriesComponent {

  enquiry:EnquiryDetails;


  constructor(private cs:CommonServiceService){}
  
  public enquirylist:any[]
  showme=false;
  
  
   pendingEnquiries(){  
    alert("Showing Pending Enquires")
    this.cs.customerEnquiries("Enquired").subscribe((response:any)=>{
      this.enquirylist=response.responceData;
    })
    this.showme=false;
   }
  
   validcibilEnquiries(){  
    alert("Showing Valid Cibil Enquries")
    this.cs.customerEnquiries("Cibilok").subscribe((response:any)=>{
      this.enquirylist=response.responceData;
      this.showme=true;
    })
   }
  
   rejectcibilEnquiries(){
    alert("Showing Rejected Enquires")
    this.cs.customerEnquiries("Cibilreject").subscribe((response:any)=>{
      this.enquirylist=response.responceData;
      this.showme=true;
    })
   }
  
    
   cibilScoreCheck(enquiryDetails: EnquiryDetails){
    alert("Cibil Checked  Successfully to : " + enquiryDetails.customerFirstName);

  this.cs.cibilScoreCheck(enquiryDetails).subscribe((response:any)=>{
    this.enquiry=response.responceData
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cibil status for '+this.enquiry.enquiryId+'  is '+this.enquiry.enquiryStatus,
      showConfirmButton: true,
      timer: 5000,
    })
    // alert("Cheked The Cibil Score "+ this.enquiry.cibilScore);
  });
  
  //window.location.reload();
   }
  
   sendMail(enquiryDetails: EnquiryDetails){
    alert("Mail Sent Successfully to : " + enquiryDetails.customerFirstName);
    this.cs.sendMail(enquiryDetails).subscribe((response:any)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mail Sent To '+this.enquiry.customerFirstName+' on '+this.enquiry.customerEmail+' Regarding application',
        showConfirmButton: true,
        timer: 5000,
      })
    });
  }
}
