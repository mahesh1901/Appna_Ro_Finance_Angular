import { Injectable } from '@angular/core';
import { SanctionLetter } from '../Model/sanction-letter';
import { EnquiryDetails } from '../Model/enquiry-details';

import { GuarantorDetails } from '../Model/guarantor-details';
import { Documents } from '../Model/documents';
import { Ledger } from '../Model/ledger';
import { Dealer } from '../Model/dealer';
import { HttpClient } from '@angular/common/http';
import { CoustomerFinancialData } from '../Model/coustomer-financial-data';
import { CoustomerAddress } from '../Model/coustomer-address';
import { Coustomer } from '../Model/coustomer';
import { LoanDisbursment } from '../Model/loan-disbursment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }

 public enquiryDetails:EnquiryDetails={
   enquiryId: '',
   customerFirstName: '',
   customerMiddleName: '',
   customerLastName: '',
   customerDateOfBirth: '',
   customerEmail: '',
   customerMobileNumber:0,
   pancardNumber: '',
   monthlyIncome:0,
   enquiryStatus: '',
   setCurrentDateAndTime:'',
   cibilScore:' '
   //cibildata: new Cibil
   
 }

public sanctionobj:SanctionLetter={
  sanctionId: '',
  sanctionDate: undefined,
  applicantName: '',
  loanAmountSanctioned: 0,
  interestType: '',
  rateOfInterest: 0,
  loanTenure: 0,
  monthlyEmiAmount: 0,
  loanAmountWithInterest: 0,
  modeOfPayment: '',
  sanctionLetterStatus: ''
}


public customer:Coustomer={
  enquiryId: '',
  customerFirstName: '',
  customerMiddleName: '',
  customerLastName: '',
  customerDateOfBirth: '',
  customerGender: '',
  customerMobileNumber: 0,
  customerAdditionalMobileNumber: 0,
  customerEmail: '',
  customerVerificationStatus: '',
  customerAddress: new CoustomerAddress,
  customerFinancialData: new CoustomerFinancialData,
  dealerData: new Dealer,
  guarantorDetails: new GuarantorDetails,
  customerDocuments: new Documents,
  // this is passed null from frontend
  loanDisbursement: new LoanDisbursment,
  ledger: new Ledger,
  sanctionLetter: new SanctionLetter,
  // already in data base 
  //customerCibilScore: new Cibil,
  customerId: undefined
}

//------------------------------------------------------ enquiry component -----------------------------------------------------------
// save customer Enquiry 
  customerEnquiry(enquiryDetails: EnquiryDetails) {
    return this.http.post("http://mahesh:8083/enq/enquiry",enquiryDetails)  // done here
  }

  // response are get in the form of the base responselist //it is for all data  get all enquiries from here 
  customerEnquiries(status:string){
    return this.http.get("http://mahesh:8083/enq/getallenquiries/"+status)
  }

//--------------------------------------------------------- RE call -----------------------------------------------------------
// RE check the cibil cibil generated and uodate in enquiry database    enquiryCibil
  cibilScoreCheck(enquiryDetails: EnquiryDetails){
    return this.http.put("http://mahesh:8083/enq/CIBILScore/check/"+enquiryDetails.pancardNumber,enquiryDetails)
    // return this.http.put("http://mahesh:8083/enquiryCibil/"+enquiryDetails.pancardNumber,enquiryDetails)

  }

  // Depend on cibil mail is send to Customer 
  sendMail(enquiryDetails: EnquiryDetails){
    return this.http.post("http://mahesh:8084/mail/cibilstatus",enquiryDetails)
  }




  //----------------------------------------------------- Customer call ----------------------------------------------------
  //saving new application here
  saveCustomer(customer:any,enquiryId:string){
    alert("call to common service ")
    return this.http.post("http://mahesh:8083/customer/upload/"+enquiryId,customer)
  }

  // single data for customer to track their application 
  getSingleCustomer(customerId:string){
    return this.http.get("http://mahesh:8083/customer/getcustomerbyid/"+customerId);
  }

   //-------------------------------------------------------- OE call ----------------------------------------------------

    // after Oe Verification satus updated     
    withstatusUpdate(customerId: string, status: string) {
      return this.http.put("http://mahesh:8083/customer/withstatus/"+customerId,status);
    }

  //-------------------------------------------------------- CM call ----------------------------------------------------

    // save sanction with secondary by CM 
    generatesanctionletter(sanctionobj:SanctionLetter,customerId:string) {
      alert("sanction letter")
      return this.http.post("http://mahesh:8084/generatesanctionletter/"+customerId,sanctionobj);
      }
  //----------------------------------------------- Common call for get customerlist----------------------------------------------------
  // all cuatomer Data depend on Status
  getCustomer(status:string){
    alert("Application list")
    return this.http.get("http://mahesh:8083/customer/getAllCustomer/"+status)
  }

  //-------------------------------------------------------- AM call ----------------------------------------------------

    // save loan disbursement secondary by AM 
    loandisbursement(customerId:string) {
      alert("loandisbursement letter")
      
      return this.http.get("http://mahesh:8085/loanDisbursment/loandisburse/"+customerId);
      
      }

    // loan disbursement
      ledgerGenration(customerId:string) {
        alert("ledgergenarte letter")
        return this.http.get("http://mahesh:8085/loan/generateledger/"+customerId);
        }
}

