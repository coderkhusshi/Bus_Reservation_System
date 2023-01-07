import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackListModule } from './feedbacklist/feedbacklist.module';
import { FeedbackListService } from './feedbacklist/feedbacklist.service';
import { PaymentListModule } from './paymentlist/paymentlist.module';
import { PaymentListService } from './paymentlist/paymentlist.service';
import { BusListService } from './buslist/buslist.service';
import { BusListModule } from './buslist/buslist.module';
import { ReservationListModule } from './reservationlist/reservationlist.module';
import { ReservationListService } from './reservationlist/reservationlist.service';
import { HomeComponent } from './home/home.component';
import { UserListService } from './userlist/userlist.service';
import { UserListModule } from './userlist/userlist.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteListModule } from './routelist/routelist.module';
import { RouteListService } from './routelist/routelist.service';
import { CommonModule } from '@angular/common';
import { CheckbusComponent } from './checkbus/checkbus.component';
import { StratingPageComponent } from './startingpage/stratingpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';
import { ReservationpageComponent } from './reservationpage/reservationpage.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactpageComponent } from './contactpage/contactpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent, 
    CheckbusComponent, 
    StratingPageComponent, 
    UserpageComponent, 
    FeedbackpageComponent, 
    ReservationpageComponent,
    ThankyoupageComponent,
    AdminloginComponent,
    ContactpageComponent
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    AppRoutingModule,
    FeedbackListModule,
    PaymentListModule,
    BusListModule,
    ReservationListModule,
    FeedbackListModule,
    UserListModule,
    RouteListModule,
    FeedbackListModule,
    HttpClientModule,
    CommonModule 
    
  ],
  providers: [FeedbackListService,PaymentListService,BusListService,ReservationListService,FeedbackListService,UserListService,RouteListService,FeedbackListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
