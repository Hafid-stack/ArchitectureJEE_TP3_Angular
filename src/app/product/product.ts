import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class Product implements OnInit {
  products!: Array<any>;
  constructor(private productService: ProductService) {

  }
  ngOnInit() {
  this.getAllProducts();
  }
  getAllProducts(): void {
    this.products= this.productService.getAllProducts();
  }

  handleDelete(product: any) {
    let v=confirm("Are you sure you want to delete this product?");
    if (v) {
    this.productService.removeProduct(product);
    this.getAllProducts();
    }

  }
}
