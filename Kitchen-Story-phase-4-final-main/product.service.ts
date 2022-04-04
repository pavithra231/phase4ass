import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    {id:1, name:"Peanut Butter", price:100, description:"butter"},
    {id:2, name:"carrot", price:50, description:"vegetable"},
    {id:3, name:"cheese", price:150, description:"cheese"},
    {id:4, name:"Tomato sauce", price:50, description:"sauce"},
    {id:5, name:"pasta", price:50, description:"pasta"}
  ];

  prod:Product[]=[

  ];

  
  constructor() { }
    
  addProduct(product:Product)
  {
    this.products.push(product);
  }
  getAllProducts():Product[]
  {
    return this.products;
  }
  
  getbyname(pname:string){
    const result = this.products.find( ({ name }) => name === pname );
    return result;
  }  
  addProd(prod:Product)
  {
    this.prod.push(prod);
  }
  getProducts():Product[]
  {
    return this.prod;
  }
  
}

