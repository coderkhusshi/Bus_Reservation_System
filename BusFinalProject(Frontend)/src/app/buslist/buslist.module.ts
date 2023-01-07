import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormComponent } from './list-form/list-form.component';
import { BusFormComponent } from './bus-form/bus-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListFormComponent, BusFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [ListFormComponent, BusFormComponent]
})
export class BusListModule { }
