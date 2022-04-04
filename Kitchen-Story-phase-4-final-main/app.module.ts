import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ChangePWDComponent } from './change-pwd/change-pwd.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';
import { List1Component } from './list1/list1.component';


@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ListComponent,
    LoginComponent,
    SearchComponent,
    ChangePWDComponent,
    HomeComponent,
    UserloginComponent,
    PaymentComponent,
    SummaryComponent,
    List1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
