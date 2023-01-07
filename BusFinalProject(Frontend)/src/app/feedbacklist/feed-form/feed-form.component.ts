import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackList } from '../feedbacklist';
import { FeedbackListModule } from '../feedbacklist.module';
import { FeedbackListService } from '../feedbacklist.service';


@Component({
  selector: 'app-feed-form',
  templateUrl: './feed-form.component.html',
  styleUrls: ['./feed-form.component.css']
})
export class FeedFormComponent implements OnInit {
  // feedbacklistForm !: FormGroup;
  // feedbacks:FeedbackList[] = new Array();
  // isUpdate:boolean=false;
  // constructor() { }

  // ngOnInit() {
  //   this.feedbacklistForm = new FormGroup({
  //     feedBackId: new FormControl(),
  //     ServiceRating: new FormControl(),
  //     DriverRating: new FormControl(),
  //     OverallRating: new FormControl(),
  //     feedbackDate: new FormControl(),
  //   });
  // }

  // ShowFeedbackList():void{
  //   let feedback:FeedbackList = new FeedbackList(this.feedbacklistForm.controls['feedBackId'].value, 
  //                                   this.feedbacklistForm.controls['DriverRating'].value,
  //                                   this.feedbacklistForm.controls['ServiceRating'].value,
  //                                   this.feedbacklistForm.controls['OverallRating'].value,
  //                                   this.feedbacklistForm.controls['Comments'].value,
  //                                   this.feedbacklistForm.controls['feedbackDate'].value)
                                   


                                    
                                    
  //   this.feedbacks.push(feedback);
  // }


  feedbacklistForm!: FormGroup;
  feedbackes: FeedbackList[] ;
  isUpdate:boolean=false;
  constructor(private fb: FormBuilder, private service: FeedbackListService) {
    this.feedbackes = new Array();
  }
 
  ngOnInit() {
    console.log("ng on init");
    this.feedbacklistForm = this.fb.group({
      feedBackId: ['', Validators.required],
      driverRating: ['', Validators.required],
      serviceRating: ['', Validators.required],
      overallRating: ['', Validators.required],
      comments: ['', Validators.required],
      feedbackdate: ['', Validators.required],
    });
 
    this.service.getAllFeedbackList()
    .subscribe(
         data => { this.feedbackes = data;}, //this success handler works only if status code between 200 and 299
         err=> {console.log(err)}  //this success handler works only if status code between 4 and 5
     
      );
  }
  saveFeedbackList(): void {
    let feedback:FeedbackList=this.feedbacklistForm.value;
    //logic for saving the employee
    if(!this.isUpdate){
      this.service.addFeedbackList(feedback)
      .subscribe(data => {
        alert("FeedbackList with Id " + data.feedBackId + " is created");
        this.service.getAllFeedbackList().subscribe(feedbacks => {
          this.feedbackes = feedbacks;
        });
      });
    }
    //updating the employee
    else{
      this.service.updateFeedbackList(feedback).subscribe(data => {
        alert("FeedbackList is Updated");
        this.service.getAllFeedbackList().subscribe(feedbacks => {
          this.feedbackes = feedbacks;
             });
      });
      this.isUpdate=false;
    }
    this.feedbacklistForm.reset();
   
  }
 
 
  //Deletes the Employee
  deletefeedback(feedBackId: number) {
    let candelete = confirm(`Are you Sure to Delete feedback'${feedBackId}'`);
    if (candelete==true) {
      this.service.deleteFeedbackList(feedBackId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllFeedbackList().subscribe(feedbacks => {
          this.feedbackes = feedbacks;
        });
      });
    }
  }
 
  Updatefeedback(feedBackId: number) {
    let feedback = this.feedbackes.find(b => b.feedBackId == feedBackId)
    this.feedbacklistForm = this.fb.group({
      feedBackId: [feedback!.feedBackId, Validators.required],
       driverRating: [feedback!.driverRating, Validators.required],
      serviceRating: [feedback!.serviceRating, Validators.required],
      overallRating: [feedback!.overallRating, Validators.required],
      comments: [feedback!.comments, Validators.required],
      feedbackdate: [feedback!.feedbackdate, Validators.required],
     
    });
    this.isUpdate=true;
  }


}