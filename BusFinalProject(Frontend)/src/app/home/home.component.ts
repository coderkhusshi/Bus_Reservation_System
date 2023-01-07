import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BusListService } from '../buslist/buslist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // logins:AllBus[];
  // routeFrom="";
  // routeTo="";
  // show=false;
  // constructor(private route: ActivatedRoute,private router: Router,private service: BusListService) {
  //   this.logins = new Array(); }

  // ngOnInit() {
  //   this.service.getAllBusListByRoute(this.routeFrom,this.routeTo).subscribe((data) => {
  //     alert(JSON.stringify(data));
  //    Object.entries(data) 
  //     alert(JSON.stringify(data));
  //   });   
  // }

  // BusCheckout(){
  //   this.show=true;
  //  let from="Kolkata";
  //  let to="Barasat";
  //   alert("checkout called");
  //   this.router.navigate(['/checkbus',from,to]);
  // }


  // -------------Priyanshi--------


formdata:any;
routeFrom="";
routeTo="";
show=false;
constructor(private route: ActivatedRoute,private router: Router,private service: BusListService) {}
ngOnInit():void {
  
    this.formdata=new FormGroup({
    routeFrom: new FormControl(""),
    routeTo : new FormControl("")
  });
 
  this.service.getAllBusListByRoute(this.routeFrom,this.routeTo).subscribe((data) => { 
   Object.entries(data) 
  });  
}
BusCheckout (data:any)
{
  this.show=true;
  this.routeFrom = data.routeFrom;
  this.routeTo = data.routeTo;
  this.router.navigate(['/checkbus',this.routeFrom,this.routeTo]);
}

}
