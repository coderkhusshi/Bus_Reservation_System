import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservationList } from '../reservationlist';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})
export class ReserveFormComponent implements OnInit {

  reservationlistForm!: FormGroup;
  
  reservations:ReservationList[] = new Array();
  isUpdate:boolean=false;
 constructor() { }

  ngOnInit(): void {
    this.reservationlistForm = new FormGroup({
      reservationId: new FormControl(),
      reservationStatus: new FormControl(),
      reservationType: new FormControl(),
      reservationDate: new FormControl(),
      reservationTime: new FormControl(),
      source: new FormControl(),
      destination: new FormControl(),
      
      
    });
  }
  ShowReservationList():void{
    let reservation:ReservationList = new ReservationList(this.reservationlistForm.controls['reservationId'].value, 
                                    this.reservationlistForm.controls['reservationStatus'].value,
                                    this.reservationlistForm.controls['reservationType'].value,
                                    this.reservationlistForm.controls['reservationDate'].value,
                                    this.reservationlistForm.controls['reservationTime'].value,
                                    this.reservationlistForm.controls['source'].value,
                                    this.reservationlistForm.controls['destination'].value);
                                    // this.reservationlistForm.controls['busList'].value);
                                                                   
    this.reservations.push(reservation);
  }

}
