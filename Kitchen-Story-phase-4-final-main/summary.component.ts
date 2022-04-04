import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  

  constructor(private service:ProductService,private router:Router ) { }
  
  prod:Product[];
  ngOnInit(): void {
      this.prod=this.service.getProducts();
  }
  OnSubmit(){
    
  }
}
