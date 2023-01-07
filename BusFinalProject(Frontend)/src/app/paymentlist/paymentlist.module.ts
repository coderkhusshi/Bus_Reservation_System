import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PayListComponent } from './pay-list/pay-list.component';
import { PayFormComponent } from './pay-form/pay-form.component';



@NgModule({
  declarations: [PayFormComponent, PayListComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [PayFormComponent, PayListComponent]
})
export class PaymentListModule { }
