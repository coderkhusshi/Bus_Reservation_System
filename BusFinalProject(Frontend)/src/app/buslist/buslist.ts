import { Time } from "@angular/common";
import { timer } from "rxjs";

export class BusList{
    busid: number;
    busname:string;
    driverName:string;
    busType:string;
    arrivalTime:Time;
    departureTime:Time;
    seats:number;
    avaiableSeats:number;
    price:number;
   
    busList!: BusList[];

    constructor(busid:number, busname:string, dname:string, type:string, atime:Time, dtime:Time, seats:number, aseats:number, price:number, fkr:number){
        this.busid = busid;
        this.busname= busname;
        this.driverName=dname;
        this.busType=type;
        this.arrivalTime=atime;
        this.departureTime=dtime;
        this.seats=seats;
        this.avaiableSeats=aseats;
        this.price=price;
        
    }
    toString():string{
        return "Bus Id: "+this.busid+", bus Name: "+this.busname+", Driver Name: "+this.driverName
        +",Bus Type: "+this.busType+", ArrivalTime: "+this.arrivalTime+", DepartureTime: "+this.departureTime+
        ", Seats: "+this.seats+", AvaiableSeats: "+this.avaiableSeats+",Price:"+this.price;
    }
}
