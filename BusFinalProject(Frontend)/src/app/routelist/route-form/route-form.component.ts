import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouteList } from '../routelist';


@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent implements OnInit {

  
  routelistForm!: FormGroup;
  
  routes:RouteList[] = new Array();
  isUpdate:boolean=false;
  constructor() { }

  ngOnInit() {
    this.routelistForm = new FormGroup({
      routeId: new FormControl(),
      routeFrom: new FormControl(),
      routeTo: new FormControl(),
      distance: new FormControl()
      
      
    });
  }

  ShowRouteList():void{
    let route:RouteList = new RouteList(this.routelistForm.controls['routeId'].value, 
                                    this.routelistForm.controls['routeFrom'].value,
                                    this.routelistForm.controls['routeTo'].value,
                                    this.routelistForm.controls['distance'].value)
                                    


                                    
                                    
    this.routes.push(route);
  }
 

}
