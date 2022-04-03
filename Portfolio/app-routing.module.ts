import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './register/addproduct.component';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './Profile/list.component';


const routes: Routes = [
  {"path":"add",component:AddproductComponent},
  {"path":"list",component:ListComponent},
  {"path":"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
