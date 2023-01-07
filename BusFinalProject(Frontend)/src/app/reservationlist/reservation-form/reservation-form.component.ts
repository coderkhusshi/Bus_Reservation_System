import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationList } from '../reservationlist';
import { ReservationListService } from '../reservationlist.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationlistForm!: FormGroup;
  reservations: ReservationList[] ;
  isUpdate:boolean=false;
  constructor(private fb: FormBuilder, private service: ReservationListService) { 
    this.reservations = new Array();
  }
 

  ngOnInit() {
     console.log("ng on init");
      this.reservationlistForm = this.fb.group({
        reservationId: ['', Validators.required],
        reservationStatus: ['', Validators.required],
        reservationType: ['', Validators.required],
        reservationDate: ['', Validators.required],
        reservationTime: ['', Validators.required],
        source: ['', Validators.required],
        destination: ['', Validators.required]
    });

    this.service.getAllReservationList()
    .subscribe(
         data => { this.reservations = data;}, //this success handler works only if status code between 200 and 299
         err=> {console.log(err)}  //this success handler works only if status code between 4 and 5
      
      );
  }
  saveReservationList(): void {
    let reservation:ReservationList=this.reservationlistForm.value;
    //logic for saving the employee
    if(!this.isUpdate){
      this.service.addReservationList(reservation)
      .subscribe(data => {
        alert("ReservationList with Id " + data.reservationId + " is created");
        this.service.getAllReservationList().subscribe(reservationn => {
          this.reservations = reservationn;
        });
      });
    }
    //updating the employee
    else{
      this.service.updateReservationList(reservation).subscribe(data => {
        alert("ReservationList is Updated");
        this.service.getAllReservationList().subscribe(reservationn => {
          this.reservations = reservationn;
             });
      });
      this.isUpdate=false;
    }
    this.reservationlistForm.reset();
    
  }


  //Deletes the Employee
  deletereservation(reservationId: number) {
    let candelete = confirm(`Are you Sure to Delete Bus '${reservationId}'`);
    if (candelete==true) {
      this.service.deleteReservationList(reservationId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllReservationList().subscribe(reservationn => {
          this.reservations = reservationn;
        });
      });
    }
  }

  Updatereservation(reservationId: number) {
    let reservation = this.reservations.find(b => b.reservationId == reservationId)
    this.reservationlistForm = this.fb.group({
      reservationId: [reservation!.reservationId, Validators.required],
      reservationStatus: [reservation!.reservationId, Validators.required],
      reservationType: [reservation!.reservationType, Validators.required],
      reservationDate: [reservation!.reservationDate, Validators.required],
      reservationTime: [reservation!.reservationTime, Validators.required],
      source: [reservation!.source, Validators.required],
      destination: [reservation!.destination, Validators.required]
      
    });
    this.isUpdate=true;


  }

}
