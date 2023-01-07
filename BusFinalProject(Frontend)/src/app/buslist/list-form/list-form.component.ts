import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusList } from '../buslist';
import { BusListService } from '../buslist.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  buslistForm!: FormGroup;
  buses: BusList[] ;
  isUpdate:boolean=false;
  constructor(private fb: FormBuilder, private service: BusListService) {
    this.buses = new Array();
  }

  ngOnInit() {
    console.log("ng on init");
    this.buslistForm = this.fb.group({
      busid: ['', Validators.required],
      busname: ['', Validators.required],
      driverName: ['', Validators.required],
      busType: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      departureTime: ['', Validators.required],
      seats: ['', Validators.required],
      avaiableSeats: ['', Validators.required],
      price: ['', Validators.required],
     
    });

    this.service.getAllBusList()
    .subscribe(
         data => { this.buses = data;}, //this success handler works only if status code between 200 and 299
         err=> {console.log(err)}  //this success handler works only if status code between 4 and 5
      
      );
  }
  saveBusList(): void {
    let bus:BusList=this.buslistForm.value;
    //logic for saving the employee
    if(!this.isUpdate){
      this.service.addBusList(bus)
      .subscribe(data => {
        alert("BusList with Id " + data.busid + " is created");
        this.service.getAllBusList().subscribe(buss => {
          this.buses = buss;
        });
      });
    }
    //updating the employee
    else{
      this.service.updateBusList(bus).subscribe(data => {
        alert("BusList is Updated");
        this.service.getAllBusList().subscribe(buss => {
          this.buses = buss;
             });
      });
      this.isUpdate=false;
    }
    this.buslistForm.reset();
    
  }


  //Deletes the Employee
  deletebus(busid: number) {
    let candelete = confirm(`Are you Sure to Delete Bus '${busid}'`);
    if (candelete==true) {
      this.service.deleteBusList(busid).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllBusList().subscribe(buss => {
          this.buses = buss;
        });
      });
    }
  }

  Updatebus(busid: number) {
    let bus = this.buses.find(b => b.busid == busid)
    this.buslistForm = this.fb.group({
      busid: [bus!.busid, Validators.required],
      busname: [bus!.busid, Validators.required],
      driverName: [bus!.driverName, Validators.required],
      busType: [bus!.busType, Validators.required],
      arrivalTime: [bus!.arrivalTime, Validators.required],
      departureTime: [bus!.departureTime, Validators.required],
      seats: [bus!.seats, Validators.required],
      avaiableSeats: [bus!.avaiableSeats, Validators.required],
      price:[bus!.price, Validators.required]
     
      
    });
    this.isUpdate=true;
  }


}
