import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import {UserFormComponent} from './user-form/user-form.component';





@NgModule({
  declarations: [UserFormComponent , ListUserComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [ListUserComponent, UserFormComponent]
})
export class UserListModule { }
