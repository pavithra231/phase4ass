import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service:ProductService,private router:Router) { }
  products:Product[];
  ngOnInit(): void {
      this.products=this.service.getAllProducts();
  }
  OnSubmit(){
    this.router.navigateByUrl("/payment");
  }
}
