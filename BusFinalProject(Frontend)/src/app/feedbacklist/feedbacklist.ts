import { Time } from "@angular/common";
import { timer } from "rxjs";

export class FeedbackList{
    feedBackId!: number;
    driverRating!:string;
    serviceRating!:string;
    overallRating!:string;
    comments!:string;
    feedbackdate!:Time;
    
    constructor(feedbackid:number, driverRating:string, serviceRating:string, overallRating:string,comments:string, feedbackdate:Time){
        this.feedBackId = feedbackid;
        this.driverRating= driverRating;
        this.serviceRating=serviceRating;
        this.overallRating=overallRating;
        this.comments=comments;
        this.feedbackdate=feedbackdate;
    }

    toString():string{
        return "Feedback Id: "+this.feedBackId+", DriverRating: "+this.driverRating+", Service Rating: "+this.serviceRating
        +",Overall Rating: "+this.overallRating+ "comments:"+this.comments,", feedbackdate: "+this.feedbackdate;
    }
}