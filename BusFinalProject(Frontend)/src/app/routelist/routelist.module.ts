import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RouteFormComponent } from "./route-form/route-form.component";
import { RouteListComponent } from "./route-list/route-list.component";



@NgModule({
    declarations: [RouteListComponent, RouteFormComponent],
    imports: [
      CommonModule, ReactiveFormsModule
    ],
    exports: [RouteListComponent, RouteFormComponent]
  })
  export class RouteListModule { }