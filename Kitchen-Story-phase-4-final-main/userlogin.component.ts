import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: UserService, private router:Router) { }
  registerForm: FormGroup;
  uname='';
  pass='';


  submitted: boolean = false;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      uname: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid)
      return;
    else {
      const bool=this.service.Userlogin(this.uname,this.pass);
      if(bool==true){
        this.router.navigateByUrl('search');
      }  
      else{
        this.router.navigateByUrl('userlogin');
        alert("invalid username or password");
      }
    }
  }
  getf()
  {
    return this.registerForm.controls;
  }
}