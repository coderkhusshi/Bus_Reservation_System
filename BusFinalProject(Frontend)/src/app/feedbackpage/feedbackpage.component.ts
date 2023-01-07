import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackList } from '../feedbacklist/feedbacklist';
import { FeedbackListService } from '../feedbacklist/feedbacklist.service';

@Component({
  selector: 'app-feedbackpage',
  templateUrl: './feedbackpage.component.html',
  styleUrls: ['./feedbackpage.component.css']
})
export class FeedbackpageComponent implements OnInit {

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
    alert("thanks for rating us !!")
  }

}
