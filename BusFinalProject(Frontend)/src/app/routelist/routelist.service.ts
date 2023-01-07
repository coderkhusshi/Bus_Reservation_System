import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteList } from './routelist';


@Injectable({
  providedIn: 'root'
})
export class RouteListService {
  
  constructor(private http:HttpClient) { 
  }
  //creating Employee
  addRouteList(route:RouteList):Observable<RouteList>{
 
    return this.http.post<RouteList>("http://localhost:8081/BusApp/route", route);
  }
  
  getAllRouteList():Observable<RouteList[]>{
    // the result of get function. get fun will give you Observable<Employee[]>
    return this.http.get<RouteList[]>("http://localhost:8081/BusApp/route");
  }

  getRouteListById(routeId:number):Observable<RouteList>{
      return this.http.get<RouteList>(`http://localhost:8081/BusApp/route/${routeId}`);

  }

  deleteRouteList(routeId:number):Observable<RouteList>{
    return this.http.delete<RouteList>(`http://localhost:8081/BusApp/route/${routeId}`);

  }

  updateRouteList(route:RouteList):Observable<RouteList>{
    return this.http.put<RouteList>("http://localhost:8081/BusApp/route",route);
  }

  ShowRouteList(route:RouteList):Observable<RouteList>{
    return this.http.put<RouteList>("http://localhost:8081/BusApp/{routeFrom}/{routeTo}",route);
  }

}