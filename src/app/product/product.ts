import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class Product implements OnInit {
  products!: Array<any>;
  constructor() {
  }
  ngOnInit() {
    this.products = [
      {id:1,name:"Computer",price:100,selected:true},
      {id:2,name:"Printer",price:856,selected:false},
      {id:3,name:"Iphone",price:9000,selected:true}
    ]
  }

  handleDelete(product: any) {
    let v=confirm("Are you sure you want to delete this product?");
    if (v) {
      this.products=this.products.filter(p => p.id != product.id )
    }

  }
}
