import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: ProductService, private router:Router) { }
  registerForm: FormGroup;

  product:Product=new Product();

  submitted: boolean = false;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      
      college: ['', Validators.required],
      yearofpass: ['', Validators.required],
      percentage: ['', Validators.required],
      department: ['', Validators.required],
      school: ['', Validators.required],
      YOP: ['', Validators.required],
      percent: ['', Validators.required],
      group:['', Validators.required],
      skill:['', Validators.required],
      certificate : ['', Validators.required]
    })
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

 
      console.log(this.product);
      this.service.addProduct(this.product);
      this.router.navigateByUrl('list');
  
  }
  getf()
  {
    return this.registerForm.controls;
  }
}