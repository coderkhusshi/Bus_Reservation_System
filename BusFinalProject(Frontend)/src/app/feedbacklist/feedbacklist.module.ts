import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedFormComponent } from './feed-form/feed-form.component';


@NgModule({
  declarations: [FeedListComponent, FeedFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [FeedListComponent, FeedFormComponent]
})
export class FeedbackListModule { }