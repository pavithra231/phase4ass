import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  constructor(private formBuilder: FormBuilder,
    private service: ProductService, private router:Router) { }
  registerForm: FormGroup;

  product:Product[];
  name='';
  submitted: boolean = false;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      name: ['', Validators.required]
      
    })
  }
 
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid)
      return;
    else {
      let prod:any=this.service.getbyname(this.name);
      this.service.addProd(prod);
      this.service.getProducts();
      this.router.navigateByUrl('list1');
    }
    
  }
  getf()
  {
    return this.registerForm.controls;
  }
}
