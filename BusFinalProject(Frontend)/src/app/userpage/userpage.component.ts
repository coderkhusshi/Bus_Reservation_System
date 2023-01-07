import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusListService } from '../buslist/buslist.service';
import { AllBus } from '../model/allbus';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  formdata:any;
  routeFrom="";
  routeTo="";
  show=false;
  constructor(private route: ActivatedRoute,private router: Router,private service: BusListService) {
  
  }
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

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
