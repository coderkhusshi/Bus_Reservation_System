import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteList } from '../routelist';
import { RouteListService } from '../routelist.service';


@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {
  routelistForm!: FormGroup;
  routes: RouteList[] ;
  isUpdate:boolean=false;
  constructor(private fb: FormBuilder, private service: RouteListService) {
    this.routes = new Array();
  }

  ngOnInit() {
    console.log("ng on init");
    this.routelistForm = this.fb.group({
      routeId: ['', Validators.required],
      routeFrom: ['', Validators.required],
      routeTo: ['', Validators.required],
      distance: ['', Validators.required]
    
    });

  this.service.getAllRouteList()
  .subscribe(
         data => { this.routes = data;}, //this success handler works only if status code between 200 and 299
         err=> {console.log(err)}  //this success handler works only if status code between 4 and 5

    );
}
saveRouteList(): void {
  let route:RouteList=this.routelistForm.value;
  //logic for saving the employee
  if(!this.isUpdate){
    this.service.addRouteList(route)
    .subscribe(data=> {
      alert("RouteList with Id " + data.routeId + " is created");
      this.service.getAllRouteList().subscribe((routess: RouteList[]) => {
        this.routes = routess;
      });
    });
  }
   //updating the employee
   else{
    this.service.updateRouteList(route).subscribe((data: any) => {
      alert("RouteList is Updated");
      this.service.getAllRouteList().subscribe((routess: RouteList[]) => {
        this.routes = routess;
           });
    });
    this.isUpdate=false;
  }
  this.routelistForm.reset();

}

 //Deletes the Employee
 deleteroute(routId: number) {
  let candelete = confirm(`Are you Sure to Delete Route '${routId}'`);
  if (candelete==true) {
    this.service.deleteRouteList(routId).subscribe(data=> {
      alert("Deleted Scuccessfully");
      this.service.getAllRouteList().subscribe(routess=> {
        this.routes = routess;
      });
    });
  }
}



  Updateroute(routeId: number) {
    let route = this.routes.find(r => r.routeId == routeId)
    this.routelistForm = this.fb.group({
      routeId: [route!.routeId, Validators.required],
      routeFrom: [route!.routeFrom, Validators.required],
      routeTo: [route!.routeTo, Validators.required],
      distance: [route!.distance, Validators.required]
     
      
    });
    this.isUpdate=true;
  }
  

}
