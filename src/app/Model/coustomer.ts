
import { CoustomerAddress } from "./coustomer-address";
import { CoustomerFinancialData } from "./coustomer-financial-data";

import { Documents } from "./documents";
import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { LoanDisbursment } from "./loan-disbursment";
import { SanctionLetter } from "./sanction-letter";

export class Coustomer 
{
[x: string]: any;
customerId:string;	
enquiryId:string;
customerFirstName:string;
customerMiddleName:string;
customerLastName:string;
customerDateOfBirth:string;
customerGender:string;
customerMobileNumber:number;
customerAdditionalMobileNumber:number;
customerEmail:string;
// customerCibilScore:number;

customerVerificationStatus:string;
	
// Secondary referance	
	
customerAddress:CoustomerAddress;	

customerFinancialData:CoustomerFinancialData;



guarantorDetails:GuarantorDetails;	

customerDocuments:Documents;

// null input paased

loanDisbursement:LoanDisbursment;	
	
ledger:Ledger;		

sanctionLetter:SanctionLetter;	



}
