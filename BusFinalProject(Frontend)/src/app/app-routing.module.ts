import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListFormComponent } from './buslist/list-form/list-form.component';
import { FeedListComponent } from './feedbacklist/feed-list/feed-list.component';
import { PayListComponent } from './paymentlist/pay-list/pay-list.component';
import { ReservationFormComponent } from './reservationlist/reservation-form/reservation-form.component';
import { UserFormComponent } from './userlist/user-form/user-form.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteListComponent } from './routelist/route-list/route-list.component';
import { CheckbusComponent } from './checkbus/checkbus.component';
import { StratingPageComponent } from './startingpage/stratingpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';
import { ReservationpageComponent } from './reservationpage/reservationpage.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  {path: '', component: StratingPageComponent},
  {path :'home', component: HomeComponent},
  {path: 'userpage',component: UserpageComponent},
  {path: 'buslist', component: ListFormComponent},
  {path: 'paymentlist', component: PayListComponent},
  {path: 'reservationlist', component: ReservationFormComponent},
  {path: 'feedbacklist', component: FeedListComponent},
  {path: 'userlist', component: UserFormComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'feedbackpage', component:FeedbackpageComponent},
  {path: 'routelist', component:RouteListComponent},
  {path: 'checkbus/:from/:to', component:CheckbusComponent},
  {path: 'reservationpage/:busid', component:ReservationpageComponent},
  {path: 'thankyoupage', component:ThankyoupageComponent},
  {path: 'adminlogin', component:AdminloginComponent},
  {path: 'contactpage', component:ContactpageComponent},
  {path: 'stratingpage', component:StratingPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
