
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserList } from '../userlist';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userlistForm! : FormGroup;

  users:UserList[]=new Array();
  isUpdate:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.userlistForm = new FormGroup({
      userId: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      contact: new FormControl(),
      email: new FormControl(),
     
  });
}
ShowBusList():void{
  let user:UserList = new UserList(this.userlistForm.controls['userId'].value,
                                  this.userlistForm.controls['username'].value,
                                  this.userlistForm.controls['password'].value,
                                  this.userlistForm.controls['firstName'].value,
                                  this.userlistForm.controls['lastName'].value,
                                  this.userlistForm.controls['contact'].value,
                                  this.userlistForm.controls['email'].value);
                                 




  this.users.push(user);
}

}

