import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentList } from '../paymentlist';
@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css']
})
export class PayFormComponent implements OnInit {
  paymentlistForm!: FormGroup;
  paymentes:PaymentList[] = new Array();
  isUpdate:boolean=false;
  constructor() { }

  ngOnInit() {
    this.paymentlistForm = new FormGroup({
      paymentid: new FormControl(),
      amount: new FormControl(),
      status: new FormControl(),
      paymentdate: new FormControl()
    
      
    });
  }

  ShowPaymentList():void{
    let payment:PaymentList = new PaymentList(this.paymentlistForm.controls['paymentid'].value, 
                                    this.paymentlistForm.controls['amount'].value,
                                    this.paymentlistForm.controls['status'].value,
                                    this.paymentlistForm.controls['paymentdate'].value);


                                    
                                    
    this.paymentes.push(payment);
  }

}