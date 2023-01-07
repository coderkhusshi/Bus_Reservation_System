import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusList } from '../buslist/buslist';
import { BusListService } from '../buslist/buslist.service';
import { BusRouteData } from '../model/busroutedata';


@Component({
  selector: 'app-reservationpage',
  templateUrl: './reservationpage.component.html',
  styleUrls: ['./reservationpage.component.css']
})
export class ReservationpageComponent implements OnInit {
  
  busl!: BusRouteData;
  buslistData!: BusList;
  reservationId='';
  show=false;
  bookseats:any;
  bookseatsPrice:any;
  
  constructor(private route: ActivatedRoute,private router: Router, private service: BusListService) { 
  
  }
  
  ngOnInit() {

    let busid= this.route.snapshot.paramMap.get('busid')
    // alert(busid+"ngOnIt")
    this.service.findBus(busid).subscribe(data => {
   
    this.buslistData=data;
   this.bookseatsPrice=this.buslistData.price;
    // alert("busdata is "+JSON.stringify(this.buslistData))
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(this.busl));
     console.log("data" +this.busl.routeId)
   
    });   
  }
  onSeatChange(data:any){
    this.bookseats = data;
    this.bookseatsPrice=this.bookseats*this.bookseatsPrice;
    // alert(this.bookseatsPrice)
  }
  reserveSeat(){
    alert("Booking Confirm");
    this.buslistData.avaiableSeats=this.buslistData.avaiableSeats-this.bookseats;
    // alert(this.buslistData.avaiableSeats);
  }   

}
