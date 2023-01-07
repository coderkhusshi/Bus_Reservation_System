import { Time } from "@angular/common";
import { timer } from "rxjs";

export class UserList{
    userId!: number;
    userName!:string;
    password!:string;
    firstName!:string;
    lastName:string;
    contact:number;
    email!:string;
  
    //avaiableemail!:number;

    constructor(userid:number, userName:string, password:string, firstName:string, lastName:string, contact:number, email:string){
        this.userId = userid;
        this.userName= userName;
        this.password=password;
        this.firstName= firstName;
        this.lastName=lastName;
        this.contact= contact;
        this.email=email;
        //this.avaiableemail=aemail;
    }
    toString():string{
        return "user Id: "+this.userId+", user Name: "+this.userName+", Driver Name: "+this.password
        +",user Type: "+this.firstName+", ArrivalTime: "+this.lastName+", contact: "+this.contact+
        ", email: "+this.email;
    }
}
