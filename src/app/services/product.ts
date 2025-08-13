import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {id:1,name:"Computer",price:100,selected:true},
    {id:2,name:"Printer",price:856,selected:false},
    {id:3,name:"Iphone",price:9000,selected:true}
  ]
  constructor() {

  }
  getAllProducts() {
    return this.products;
  }
  addProduct(product: any) {
    this.products.push(product);
  }
  removeProduct(product: any) {
    this.products=this.products.filter(p => p.id != product.id )
  }
}
