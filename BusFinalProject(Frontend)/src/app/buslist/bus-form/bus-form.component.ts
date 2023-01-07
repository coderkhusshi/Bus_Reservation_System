import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BusList } from '../buslist';
import { BusListModule } from '../buslist.module';
@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.css']
})
export class BusFormComponent implements OnInit {


  buslistForm!: FormGroup;
  
  buses:BusList[] = new Array();
  isUpdate:boolean=false;
  constructor() { }

  ngOnInit() {
    this.buslistForm = new FormGroup({
      busid: new FormControl(),
      busname: new FormControl(),
      driverName: new FormControl(),
      busType: new FormControl(),
      arrivalTime: new FormControl(),
      departureTime: new FormControl(),
      seats: new FormControl(),
      avaiableSeats: new FormControl(),
      price:new FormControl(),
      fk_route:new FormControl()
      
    });
  }

  ShowBusList():void{
    let bus:BusList = new BusList(this.buslistForm.controls['busid'].value, 
                                    this.buslistForm.controls['busname'].value,
                                    this.buslistForm.controls['driverName'].value,
                                    this.buslistForm.controls['busType'].value,
                                    this.buslistForm.controls['arrivalTime'].value,
                                    this.buslistForm.controls['departureTime'].value,
                                    this.buslistForm.controls['seats'].value,
                                    this.buslistForm.controls['avaiableSeats'].value,
                                    this.buslistForm.controls['price'].value,
                                    this.buslistForm.controls['fk_route'].value);


                                    
                                    
    this.buses.push(bus);
  }

}
