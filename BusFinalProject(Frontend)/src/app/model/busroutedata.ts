import { BusList } from "../buslist/buslist";

export class BusRouteData{
    routeId: number ;
    routeFrom: String;
    routeTo: String;
    distance: number;
    busList!: BusList[];
    
    constructor(id: number, from: String, to: String, distance: number){
        this.routeId=id;
        this.routeFrom=from;
        this.routeTo=to;
        this.distance=distance;
    }
    toString():string{
        return "RouteId: "+this.routeId+", RouteFrom: "+this.routeFrom+", RouteTo:"+this.routeTo+",Distance:"+this.distance;
    }

}