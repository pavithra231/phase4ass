import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ChangePWDComponent } from './change-pwd/change-pwd.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { SummaryComponent } from './summary/summary.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { List1Component } from './list1/list1.component';

const routes: Routes = [
  {"path":"add",component:AddproductComponent},
  {"path":"list",component:ListComponent},
  {"path":"login",component:LoginComponent},
  {"path":"adminpage",component:AdminpageComponent},
  {"path":"search",component:SearchComponent},
  {"path":"changepwd",component:ChangePWDComponent},
  {"path":"home",component:HomeComponent},
  {"path":"userlogin",component:UserloginComponent},
  {"path":"payment",component:PaymentComponent},
  {"path":"summary",component:SummaryComponent},
  {"path":"list1",component:List1Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
