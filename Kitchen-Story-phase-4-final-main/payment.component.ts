import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  owner:string;
  cardnum:number;
  expdate:number;
  cvv:number;

 
  
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      owner: ['', Validators.required],
      cardnum: ['', Validators.required],
      expdate: ['', Validators.required],
      cvv: ['', Validators.required]
    })
  }
  
  onsubmit(){
    this.router.navigateByUrl('/summary');
  }
}
