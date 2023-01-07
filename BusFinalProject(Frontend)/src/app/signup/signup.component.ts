import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserList } from '../userlist/userlist';
import { UserListService } from '../userlist/userlist.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

//   Form!: FormGroup;
//    constructor(private fb: FormBuilder) {
//       this.myForm();
//    }

//    myForm() {
//     this.signupForm = this.fb.group({
//       name: ['', Validators.required ],
//     email: ['', [Validators.required, 
//        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
//     });
//  }

//  ngOnInit()
//  {

//  }
userlistForm!: FormGroup;
users: UserList[] = new Array();
isUpdate:boolean=false;
constructor(private fb: FormBuilder, private service: UserListService) {
  this.users = new Array();
}
  

ngOnInit() {
  console.log("ng on init");
  this.userlistForm = this.fb.group({
    userId: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', Validators.required],
    
  });

  this.service.getAllUserList()
  .subscribe(
       data => { this.users = data;}, //this success handler works only if status code between 200 and 299
       err=> {console.log(err)}  //this success handler works only if status code between 4 and 5

    );
}
saveUserList(): void {
  let user:UserList=this.userlistForm.value;
  //logic for saving the employee
  if(!this.isUpdate){
    this.service.addUserList(user)
    .subscribe(data => {
      alert("UserList with Id " + data.userId + " is created");
      this.service.getAllUserList().subscribe(userss => {
        this.users = userss;
      });
    });
  }
   //updating the employee
   else{
    this.service.updateuserList(user).subscribe(data => {
      alert("UserList is Updated");
      this.service.getAllUserList().subscribe(userss => {
        this.users = userss;
           });
    });
    this.isUpdate=false;
  }
  this.userlistForm.reset();
}}
