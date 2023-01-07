import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

     loginForm = new FormGroup({
   
 })

  constructor(private router:Router) {}
  username!:string;
  password!:string;
  ngOnInit(): void {
  }

   login(): void {
     
      if (this.username=="Priyanshi"&& this.password=="priya")
   {
      this.router.navigate(['/userpage']);
   }
   else if(this.username=="Divya"&& this.password=="Paliwal")
   {
      this.router.navigate(['/userpage']);
   }
   else if(this.username=="Khushi"&& this.password=="Kumari")
   {
      this.router.navigate(['/userpage']);
   }
   else if(this.username=="Indrani"&& this.password=="Dey")
   {
      this.router.navigate(['/userpage']);
   }
   }
   




}
