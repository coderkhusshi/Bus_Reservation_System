
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserList } from '../userlist';
import { UserListService } from '../userlist.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

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

  }
  
   //Deletes the Employee
   deleteuser(userId: number) {
    let candelete = confirm(`Are you Sure to Delete User '${userId}'`);
    if (candelete==true) {
      this.service.deleteUserList(userId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllUserList().subscribe(useres => {
          this.users = useres;
        });
      });
    }
  }
  Updateuser(userId: number) {
    let user = this.users.find(b => b.userId == userId)
    this.userlistForm = this.fb.group({
      userId: [user!.userId, Validators.required],
      userName: [user!.userName, Validators.required],
      password: [user!.password, Validators.required],
      firstName: [user!.firstName, Validators.required],
      lastName: [user!.lastName, Validators.required],
      contact: [user!.contact, Validators.required],
      email: [user!.email, Validators.required],
     

    });
    this.isUpdate=true;
  }

}