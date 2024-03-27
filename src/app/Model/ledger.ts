import { Installment } from "./installment";

export class Ledger 
{
ledgerId:number;
ledgerCreatedDate:string;
totalLoanAmount:number;
tenure:number;
monthlyEMI:number;
amountPaidTillDate:number;
remainingAmount:number;
defaulterCount:number;
loanEndDate:string;
loanStatus:string;
 installments:Installment[]; 
}
