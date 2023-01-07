import { Time } from "@angular/common";
import { timer } from "rxjs";

export class RouteList{
    routeId!: number;
    routeFrom!: string;
    routeTo!: string;
    distance!: number;
    

    constructor(routeId:number, routeFrom:string, routeTo:string, distance:number){
        this.routeId = routeId;
        
    }
    toString():string{
        return "Route Id: "+this.routeId+", Route From: "+this.routeFrom+", Route To: "+this.routeTo+", Distance: "+ this.distance;
        
    }
}