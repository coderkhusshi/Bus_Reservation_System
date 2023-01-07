import { Time } from "@angular/common";

export class AllBus{
    busid!: number;
    busname!: String;
    driverName!: String;
    busType!: String;
    arrivalTime!: Time;
    departureTime!: Time;
    seats!: number;
    avaiableSeats!: number;

    constructor(id: number, name:String, dname: String, type:String, time:Time, dtime:Time, seat: number, aseat: number ){
        this.busid=id;
        this.busname=name;
        this.driverName=dname;
        this.busType=type;
        this.arrivalTime=time;
        this.departureTime=dtime;
        this.seats=seat;
        this.avaiableSeats=aseat;
    }

    toString():string{
        return "BusId: "+this.busid+", BusName: "+this.busname+", DriverName:"+this.driverName+",BusType:"+this.busType
        +",Arrival Time:"+this.arrivalTime+",DepartureTime:"+this.departureTime+", Seats:"+this.seats+",availableSeats:"+this.avaiableSeats;
    }

}