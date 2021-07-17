
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {

  product: { destination: string, price: number, description?: string, image?: string, start : string, duration : string } = { destination: "", price: 0, start: "", duration: "" };
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product: any) {
    alert("This item is added to the cart");
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = Number(params.get("id"));
      this.product = products[id];
    })
  }
}
