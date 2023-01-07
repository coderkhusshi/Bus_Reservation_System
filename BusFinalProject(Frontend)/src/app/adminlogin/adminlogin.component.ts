import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  // 
  
  username:any;
  psw:any; 
  adminForm:any;
  fb: any;
  isUpdate:boolean=false;
  ngOnInit() { 
    this.adminForm = new FormGroup({ 
        username: new FormControl(""),
        psw: new FormControl("")
     });  
  } 

   takedata(data:any) {

    this.username = data.username;
    this.psw= data.psw;
    this.adminForm = this.fb.group({
      username: ['', Validators.required , Validators.pattern("team5")],
      psw: ['', Validators.required, Validators.pattern("busreservation")] 
    });
 }

 onButtonClick() {
 
  this.username = 'team5';
  this.psw = 'busreservation';
  let validChars = '';
  if (this.username==this.username) {
    validChars += this.username;
  }
  if (this.psw==this.psw) {
    validChars += this.psw;
  }
}
}
