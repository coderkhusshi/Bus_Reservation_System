import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReserveFormComponent } from './reserve-form/reserve-form.component';


@NgModule({
  declarations: [
    ReserveFormComponent,
     ReservationFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [ReserveFormComponent, ReservationFormComponent]
})
export class ReservationListModule { }
