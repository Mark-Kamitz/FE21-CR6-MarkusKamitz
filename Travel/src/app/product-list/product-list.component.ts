import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products
  
  constructor(private CS: CartService) { }
  addToCart(product: any) {
    alert("This item is added to the cart");
    this.CS.addToCart(product);
  }
  ngOnInit(): void {
  }

}
