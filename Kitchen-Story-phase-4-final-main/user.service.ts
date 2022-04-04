import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user={"username":"siva","password":"siva123"}

  
  Userlogin(username:string,password:string)
  {
    if(username===this.user.username && password===this.user.password){
        return true;
      }
      else
      return false;
  }
  constructor() { }
}
