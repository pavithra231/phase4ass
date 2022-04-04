import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admin={"username":"sivakumar","password":"siva@123"}

  login(uname: string,pass: string)
  {
      if(uname=== this.admin.username&& pass===
        this.admin.password)
      {
        return true;
      }
      else{
        return false;
      }
  }
      
  
  changepwd(username:string,newpass:string){
    if(username===this.admin.username)
    {
      this.admin.password=newpass;
      return true;
    }
    else
    return false;

  }
  constructor() { }

}
