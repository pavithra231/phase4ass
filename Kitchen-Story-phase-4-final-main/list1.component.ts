import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  constructor(private service:ProductService,private router:Router) { }
  
  prod:Product[];

  ngOnInit(): void {
      this.prod=this.service.getProducts();
  }
  OnSubmit(){
    this.router.navigateByUrl("/payment");
  }
}