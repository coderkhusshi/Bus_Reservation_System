import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationList } from './reservationlist';

@Injectable({
  providedIn: 'root'
})
export class ReservationListService {
  // in-memory database. data is going to lost after restart of server
  // static employees:Employee[];
  constructor(private http:HttpClient) { 
  }
  //creating Employee
  addReservationList(reservation:ReservationList):Observable<ReservationList>{
 
    return this.http.post<ReservationList>("http://localhost:8081/BusApp/controllerr", reservation);
  }
  
  getAllReservationList():Observable<ReservationList[]>{
    // the result of get function. get fun will give you Observable<Employee[]>
    return this.http.get<ReservationList[]>("http://localhost:8081/BusApp/controllerr");
  }

  getReservationListById(reservationId:number):Observable<ReservationList>{
      return this.http.get<ReservationList>(`http://localhost:8081/BusApp/controllerr/${reservationId}`);

  }

  deleteReservationList(reservationId:number):Observable<ReservationList>{
    return this.http.delete<ReservationList>(`http://localhost:8081/BusApp/controllerr/${reservationId}`);

  }

  updateReservationList(reservation:ReservationList):Observable<ReservationList>{
    return this.http.put<ReservationList>("http://localhost:8081/BusApp/controllerr",reservation);
  }

}

