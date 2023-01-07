import { Time } from "@angular/common";
import { timer } from "rxjs";

export class PaymentList{
    paymentid!: number;
    amount!:number;
    status!:string;
    paymentdate!:Time;
   

    constructor(paymentid:number, amount:number, status:string,  paymentdate:Time){
        this.paymentid = paymentid;
        this.amount= amount;
        this.status=status;
        this.paymentdate=paymentdate;
    }
    toString():string{
        return "payment Id: "+this.paymentid+", amount: "+this.amount+", status: "+this.status
        +",paymentdate: "+this.paymentdate;
    }
}
