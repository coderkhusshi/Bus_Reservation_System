import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from "@angular/router"
import { BusList } from '../buslist/buslist';
import { BusListService } from '../buslist/buslist.service';
import { AllBus } from '../model/allbus';
import { BusRouteData } from '../model/busroutedata';

@Component({
  selector: 'app-checkbus',
  templateUrl: './checkbus.component.html',
  styleUrls: ['./checkbus.component.css']
})
export class CheckbusComponent implements OnInit {

  routeData!: BusRouteData;
  buslistData!: BusList[];
  routeFrom="";
  routeTo="";
  show=false;
  constructor(private route: ActivatedRoute,private router: Router, private service: BusListService) { 
  this.buslistData=new Array();
  }
  
  ngOnInit() {

    let from= this.route.snapshot.paramMap.get('from')
    let to = this.route.snapshot.paramMap.get('to')
    
   this.service.getAllBusListByRoute(from,to).subscribe(data => {
   
    this.buslistData=data.busList;
    console.log("busdata is "+JSON.stringify(this.buslistData))
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(this.routeData));
    console.log("data" +this.routeData.routeId)
   
    });   
  }

  reserveBus(busid:any){
    // alert(busid+"reservebus")
    this.router.navigate(['/reservationpage',busid]);
  }
  }




