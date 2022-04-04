import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePWDComponent implements OnInit {
  
  username=''
  new_pass=''
  
  constructor(private formBuilder: FormBuilder,
    private service: AdminService, private router:Router) { }
  registerForm: FormGroup;

  submitted: boolean = false;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      new_pass: ['', Validators.required],
      username: ['', Validators.required]
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
        const bool=this.service.changepwd(this.username,this.new_pass);
        if(bool==true){
          
          alert("password changed successfully");
          this.router.navigateByUrl('login');
          
        }  
        else{
          
          alert("password can't changed");
        }
    }
  }
  getf()
  {
    return this.registerForm.controls;
  }
}
