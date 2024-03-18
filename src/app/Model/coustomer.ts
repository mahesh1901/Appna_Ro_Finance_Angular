
import { CoustomerAddress } from "./coustomer-address";
import { CoustomerFinancialData } from "./coustomer-financial-data";
import { Dealer } from "./dealer";
import { Documents } from "./documents";
import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { LoanDisbursment } from "./loan-disbursment";
import { SanctionLetter } from "./sanction-letter";

export class Coustomer 
{
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

customerVerificationStatus:string;
	
// Secondary referance	
	
customerAddress:CoustomerAddress;	

customerFinancialData:CoustomerFinancialData;

dealerData:Dealer;

guarantorDetails:GuarantorDetails;	

customerDocuments:Documents;

// null input paased

loanDisbursement:LoanDisbursment;	
	
ledger:Ledger;		

sanctionLetter:SanctionLetter;	


//customerCibilScore:Cibil;	
}
