import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentList } from '../paymentlist';
import { PaymentListService } from '../paymentlist.service';
@Component({
  selector: 'app-pay-list',
  templateUrl: './pay-list.component.html',
  styleUrls: ['./pay-list.component.css']
})
export class PayListComponent implements OnInit {

  paymentlistForm!: FormGroup;
paymentes: PaymentList[] ;
isUpdate:boolean=false;
constructor(private fb: FormBuilder, private service: PaymentListService) {
  this.paymentes = new Array();
}

ngOnInit() {
  console.log("ng on init");
  this.paymentlistForm = this.fb.group({
    paymentid: ['', Validators.required],
    amount: ['', Validators.required],
    status: ['', Validators.required],
    paymentdate: ['', Validators.required],
  });

  this.service.getAllPaymentList()
  .subscribe(
       data => { this.paymentes = data;}, //this success handler works only if status code between 200 and 299
       err=> {console.log(err)}  //this success handler works only if status code between 4 and 5
    
    );
}
savePaymentList(): void {
  let payment:PaymentList=this.paymentlistForm.value;
  //logic for saving the employee
  if(!this.isUpdate){
    this.service.addPaymentList(payment)
    .subscribe(data => {
      alert("PaymentList with Id " + data.paymentid + " is created");
      this.service.getAllPaymentList().subscribe(payments => {
        this.paymentes = payments;
      });
    });
  }
  //updating the employee
  else{
    this.service.updatePaymentList(payment).subscribe(data => {
      alert("PaymentList is Updated");
      this.service.getAllPaymentList().subscribe(payments => {
        this.paymentes = payments;
           });
    });
    this.isUpdate=false;
  }
  this.paymentlistForm.reset();
  
}


//Deletes the Employee
deletepayment(paymentid: number) {
  let candelete = confirm(`Are you Sure to Delete Bus '${paymentid}'`);
  if (candelete==true) {
    this.service.deletePaymentList(paymentid).subscribe(data => {
      alert("Deleted Scuccessfully");
      this.service.getAllPaymentList().subscribe(payments => {
        this.paymentes = payments;
      });
    });
  }
}

Updatepayment(paymentid: number) {
  let payment = this.paymentes.find(b => b.paymentid == paymentid)
  this.paymentlistForm = this.fb.group({
    paymentid: [payment!.paymentid, Validators.required],
    amount: [payment!.amount, Validators.required],
    status: [payment!.status, Validators.required],
    paymentdate: [payment!.paymentdate, Validators.required]
   
    
  });
  this.isUpdate=true;
}


}