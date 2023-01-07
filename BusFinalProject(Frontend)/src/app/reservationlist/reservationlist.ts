import { Time } from "@angular/common";
import { timer } from "rxjs";
import { BusList } from "../buslist/buslist";

export class ReservationList{
    reservationId!: number;
    reservationStatus!:string;
    reservationType!:string;
    reservationDate:Date;
    reservationTime:Time;
    source!:string;
    destination!:string;
    // busList!: BusList;

    constructor(resId:number, resStatus:string, resType:string, resDate:Date, resTime:Time, source:string, destination:string){
        this.reservationId = resId;
        this.reservationStatus= resStatus;
        this.reservationType=resType;
        this.reservationDate=resDate;
        this.reservationTime=resTime;
        this.source=source;
        this.destination=destination;
        // this.busList=busList;
    }
    toString():string{
        return "Reservation Id: "+this.reservationId+", reservation Status: "+this.reservationStatus+", Reservation Type: "+this.reservationType
        +",Reservation Date: "+this.reservationDate+", ReservationTime: "+this.reservationTime+", Source: "+this.source+
        ", Destination: "+this.destination;
    }
}
